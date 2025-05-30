// ignore : false
// requires: woodwork, handcrafted, supplementaries, luminousworld, createcasing, decorativepaths, twilightforest, farmersdelight
// Data
let wood_types = {
    "minecraft": [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak",
        "mangrove",
        "cherry",
      "bamboo",
        "crimson",
        "warped"
    ]
}

let mod_items = {
    "log": {
        "minecraft": [
            {
                "id": "boat",
                "amount": 1
            }
        ],
        "supplementaries": [
            {
                "id": "way_sign",
                "amount": 4
            }
        ],
        "handcrafted": [
            {
                "id": "bench",
                "amount": 2
            },
            {
                "id": "chair",
                "amount": 2
            },
            {
                "id": "dining_bench",
                "amount": 2
            },
            {
                "id": "table",
                "amount": 2
            },
            {
                "id": "pillar_trim",
                "amount": 6
            },
            {
                "id": "corner_trim",
                "amount": 4
            }
        ],
        "luminousworld": [
            {
                "id": "table",
                "amount": 1
            },
            {
                "id": "shelf",
                "amount": 3
            },
            {
                "id": "log_stack",
                "amount": 1
            }
        ],
        "createcasing": [
            {
                "id": "shaft",
                "amount": 4
            }
        ],
        "farmersdelight": [
            {
                "id": "cabinet",
                "amount": 1
            }
        ]
    },
    "planks": {
        "supplementaries": [
            {
                "id": "way_sign",
                "amount": 1
            }
        ],
        "handcrafted": [
            {
                "id": "pillar_trim",
                "amount": 1
            },
            {
                "id": "corner_trim",
                "amount": 1
            }
        ],
        "decorativepaths": [
            {
                "id": "planks_path_01",
                "amount": 1
            },
            {
                "id": "planks_path_02",
                "amount": 1
            },
            {
                "id": "planks_path_03",
                "amount": 1
            },
            {
                "id": "planks_path_04",
                "amount": 1
            },
            {
                "id": "planks_path_05",
                "amount": 1
            },
            {
                "id": "planks_path_06",
                "amount": 1
            }
        ],
        "twilightforest": [
            {
                "id": "banister",
                "amount": 3
            }
        ]
    },
    "sign": {
        "supplementaries": [
            {
                "id": "way_sign",
                "amount": 2
            }
        ]
    }
}

let luminousshelf = ["oak", "birch", "spruce", "bao"];
let nether_wood = ["crimson", "warped"];

ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    // Sawmill recipes
    const namespace = "minecraft";
    const w_types = wood_types[namespace];
    for (const w_type of w_types) {
        for (const [ingredient_part, mod_results] of Object.entries(mod_items)) {
            if (nether_wood.includes(w_type) && ingredient_part === "log"){
                ingredient_part = "stem";
            }
            // use tag for logs as ingredient
            if (ingredient_part === "log" || ingredient_part === "stem"){
                ingredient_part += "s";
            }
            let ingredient = namespace + ":" + w_type + "_" + ingredient_part;
            for (const [mod, results] of Object.entries(mod_results)) {
                for (const result of results) {
                    // Define proper item id for the result
                    let result_id = mod + ":" + w_type + "_" + result["id"];
                    if (result["id"] === "way_sign") {
                        result_id = mod + ":" + result["id"] + "_" + w_type;
                    }
                    else if (mod === "luminousworld") {
                        // Patch luminousworld log_stack IDs
                        if (result["id"] !== "log_stack") {
                            result_id = mod + ":" + w_type + result["id"];
                        }
                        // Patch luminous dark oak items IDs
                        if (w_type === "dark_oak"){
                            result_id = mod + ":darkoak" + result["id"];
                        }
                        // Patch luminousworld shelves IDs
                        if (result["id"] === "shelf" && luminousshelf.includes(w_type)) {
                            result_id += "_1";
                        }
                    }
                    

                    // Add sawmill recipes
                    let r = {
                        "type": "woodworks:sawmill",
                        "ingredient": {
                            "item": ingredient
                        },
                        "result": {
                            "count": result["amount"],
                            "id": result_id
                        }
                    }
                    // Use tag for log or stem as ingredient
                    if (ingredient_part === "logs" || ingredient_part === "stems") {
                        r = {
                            "type": "woodworks:sawmill",
                            "ingredient": {
                                "tag": ingredient
                            },
                            "result": {
                                "count": result["amount"],
                                "id": result_id
                            }
                        }
                    }
                    let r_id = w_type + "_" + result["id"] + "_from_" + ingredient_part;
                    if (result["id"] === "table" && mod === "luminousworld"){
                        r_id = w_type + "_" + mod + "_" + result["id"] + "_from_" + ingredient_part;
                    }
                    event.custom(r).id(r_id + "_sawing")

                    // Add create:cutting recipes
                    if (ingredient_part === "logs" || ingredient_part === "stems") {
                        let tag_ingredient = '#' + ingredient;
                        event.recipes.create.cutting(
                            withChance(result_id, 1, result["amount"]),
                            tag_ingredient
                        )
                    }
                    else {
                        event.recipes.create.cutting(
                        withChance(result_id, 1, result["amount"]),
                        ingredient
                       )
                    }
                    
                }
            }
        // Remove stonecutting recipe (Decorative paths)
        for (let i=1; i<7 ; i++){
            event.remove({output: "decorativepaths:" + w_type + "_planks_path_0" + i} )
            }
        }
    }

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})