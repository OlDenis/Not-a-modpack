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
    ],
    "wetland_whimsy": [
        "bald_cypress"
    ],
    "luminousworld": [
        "white_oak",
        "palm", 
        "auburn",
        "baobab" // Cursed naming convention
    ],
    "undergarden": [
        "smogstem",
        "wigglewood",
        "grongle"
    ],
    "eternal_starlight": [
        "lunar",
        "northland",
        "starlight_mangrove",
        "scarlet",
        "torreya",
        "jinglestem"
    ],
    "moresnifferflowers": [
        "vivicus",
        "corrupted"
    ],
    "garnished": [
        "nut",
        "sepia" // stems instead of logs
    ],
    "ars_nouveau": [
        "archwood"
    ],
    "aether": [
        "skyroot",

    ],
    "deep_aether": [
        "roseroot",
        "yagroot",
        "cruderoot",
        "conberry",
        "sunroot"
    ],
    "twilightforest": [
        "twilight_oak",
        "canopy",
        "mangrove",
        "dark",
        "time",
        "transformation",
        "mining",
        "sorting"
    ],
    "deeperdarker": [
        "echo",
        "bloom" // stems instead of logs
    ],
    "abyssal_decor": [  // No tags
        // "ancient_birch",
        "white_wood",
        "blackwood",
        "cinnamon" // needs extra attention
    ],
    "expandeddelight": [
        "cinnamon"
    ],
    "mynethersdelight":[
        "powdery"       // blocks instead of logs (like bamboo)
    ],
    "betterarcheology":[
        "rotten"        // Doesn't need tag (only log)
    ]
}

let special_log_tags = {
    "aether": {
        "skyroot" : "crafts_skyroot_planks"
    },
    "ars_nouveau" : {
        "archwood" : "blazing_logs"
    }
}

let mod_items = {
    "logs": {
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
                "amount": 2
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

let vanilla_items = {
    "logs" : {"minecraft": [
        {
            "id": "planks",
            "amount": 4
        },
        {
            "id": "stairs",
            "amount": 4
        },
        {
            "id": "slab",
            "amount": 8
        },
        {
            "id": "fence",
            "amount": 4
        },
        {
            "id": "fence_gate",
            "amount": 1
        },
        {
            "id": "door",
            "amount": 2
        },
        {
            "id": "trapdoor",
            "amount": 2
        },
        {
            "id": "pressure_plate",
            "amount": 2
        },
        {
            "id": "button",
            "amount": 4
        },
        {
            "id": "sign",
            "amount": 2
        },
        {
            "id": "boat",
            "amount": 1
        }
    ],
    "planks" : [
        {
            "id": "stairs",
            "amount" : 1
        },
        {
            "id": "slab",
            "amount": 2
        },
        {
            "id": "fence",
            "amount": 1
        },
        {
            "id": "button",
            "amount": 1
        }
    ]}
}

let everycomp_other_items = {
    "logs" : {
        "twilightforest": [
            {
                "id" : "hollow_log",
                "amount": 1
            }
        ]
    },
    "planks" : {
        "woodworks" : [
            {
                "id" : "ladder",
                "amount" : 4
            },
            {
                "id": "boards",
                "amount" : 1
            }
        ]
    }
}

let everycompat = {
    "farmersdelight": "fd",
    "handcrafted": "hc",
    "twilightforest": "tf",
    "woodworks": "abnww"
}

let luminousshelf = ["oak", "birch", "spruce", "bao"];
let stem_wood = ["crimson", "warped", "sepia", "bloom"];
let bamboo_wood = ["bamboo", "powdery"] // Note: has a special type of planks called mosaic
let log_variants = ["logs", "stems", "blocks"]

function sawmillRecipe(event, ingredient, result_id, result_amount, is_logs){
    // Returns the correct dict for a sawmill recipe
    // Add sawmill recipes
    let r = {
        "type": "woodworks:sawmill",
        "ingredient": {
            "item": ingredient
        },
        "result": {
            "count": result_amount,
            "id": result_id
        }
    }
    // Use tag for log or stem as ingredient
    if (is_logs) {
        r = {
            "type": "woodworks:sawmill",
            "ingredient": {
                "tag": ingredient
            },
            "result": {
                "count": result_amount,
                "id": result_id
            }
        }
    }
    
    return r
    
}

function modItemSawmillRecipe(event, mod_items, wood_type, namespace){
    // Register sawmill recipe of modded items made of vanilla wood
    for (const [ingredient_part, mod_results] of Object.entries(mod_items)) {
        if (ingredient_part === "logs") {
            if (stem_wood.includes(wood_type)) {
                ingredient_part = "stem";
            }
            else if (wood_type === "bamboo") {
                ingredient_part = "blocks";
            }
        }
        let ingredient = namespace + ":" + wood_type + "_" + ingredient_part;
        for (const [mod, results] of Object.entries(mod_results)) {
            for (const result of results) {
                // Define proper item id for the result
                let result_id = mod + ":" + wood_type + "_" + result["id"];
                if (result["id"] === "way_sign") {
                    result_id = mod + ":" + result["id"] + "_" + wood_type;
                }
                else if (mod === "luminousworld") {
                    // Patch luminousworld log_stack IDs
                    if (result["id"] !== "log_stack") {
                        result_id = mod + ":" + wood_type + result["id"];
                    }
                    // Patch luminous dark oak items IDs
                    if (wood_type === "dark_oak") {
                        result_id = mod + ":darkoak" + result["id"];
                    }
                    // Patch luminousworld shelves IDs
                    if (result["id"] === "shelf" && luminousshelf.includes(wood_type)) {
                        result_id += "_1";
                    }
                }

                let r = sawmillRecipe(event, ingredient,
                    result_id, result["amount"], log_variants.includes(ingredient_part))
                // Register sawmill recipes
                let r_id = wood_type + "_" + mod + "_" + result["id"] + "_from_" + ingredient_part;
                event.custom(r).id(r_id + "_sawing")

                // Add create:cutting recipes
                if (log_variants.includes(ingredient_part)) {
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
                    ).id(r_id + "_cutting")
                }

            }
        }
        // Remove stonecutting recipe (Decorative paths)
        for (let i = 1; i < 7; i++) {
            event.remove({ output: "decorativepaths:" + wood_type + "_planks_path_0" + i })
        }
    }
}

function vanillaItemSawmillRecipe(event, vanilla_items, wood_type, namespace){
    // Register sawmill recipe of vanilla items made of modded wood
    for (const [ingredient_part, vanilla_results] of Object.entries(vanilla_items)) {
        let ingredient = namespace + ":" + wood_type + "_" + ingredient_part;
        // Special tags for aether and ars_nouveau
        if (Object.keys(special_log_tags).includes(namespace)){
            ingredient = namespace + ":" + special_log_tags[namespace][wood_type];
        }
        for (const [mod, results] of Object.entries(vanilla_results)) {
            for (const result of results) {
                // Define proper item id for the result
                let result_id = namespace + ":" + wood_type + "_" + result["id"];
                if (namespace === "luminousworld"){
                    if (wood_type === "white_oak"){
                        ingredient = ingredient.replace("planks", "plank");
                        result_id = result_id.replace("planks", "plank");
                        if ("trapdoor" === result["id"]){
                            result_id = namespace + ":white_oak" + result["id"];
                        }
                        else if ( result["id"] === "fence_gate"){
                            result_id = namespace + ":white_oakfencegate";
                        }                        
                    }
                    else if (wood_type === "baobab"){
                        ingredient = ingredient.replace("planks", "plank");
                        result_id = result_id.replace("planks", "plank");
                        if ( ["fence", "trapdoor"].includes(result["id"])){
                            result_id = result_id.replace("_", "");
                        }
                        else if ( result["id"] === "fence_gate"){
                            result_id = namespace + ":white_oakfencegate";
                        }
                    }
                    else {
                        ingredient = ingredient.replace("_planks", "plank");
                        result_id = result_id.replace("_planks", "plank");
                        if (wood_type === "auburn"){
                            if (result["id"] !== "door"){
                                result_id = result_id.replace("_", "");
                            }
                            if (result["id"] === "fence_gate"){
                                result_id = result_id.replace("_", "");
                            }
                            if (! ["door", "trapdoor"].includes(result["id"])){
                                result_id = result_id.replace("auburn", "autumn");
                            }
                        }
                        else if (wood_type === "palm"){
                            if (!["fence_gate", "door"].includes(result["id"])){
                                result_id = result_id.replace("_", "");
                            }
                        }
                       
                    }                
                }
                if (result["id"] === "boat"){
                    if (wood_type === "bamboo") {result_id = result_id.replace("boat", "raft");}
                    else if (["crimson", "warped"].includes(wood_type)) continue;
                }
                
                // Create sawmill recipe
                let r = sawmillRecipe(event, ingredient, result_id, result["amount"], log_variants.includes(ingredient_part))
                let r_id = namespace + "_" + wood_type + "_" + result["id"] + "_from_" + ingredient_part;
                // Register sawmill recipes
                event.custom(r).id(r_id + "_sawing")
            }
        }
    }
}

function modItemFromModdedWoodSawmillRecipe(event, mod_items, everycompat, wood_type, namespace){
    // Register sawmill recipe of modded items made of modded wood
    for (const [ingredient_part, mod_results] of Object.entries(mod_items)){
        // Everycompat recipes
        let ingredient = `${namespace}:${wood_type}_${ingredient_part}`;
        let is_logs = log_variants.includes(ingredient_part)
        for (const [mod, results] of Object.entries(mod_results)){
            if (Object.keys(everycompat).includes(mod)){
                for (const result of results){
                    let result_id = `everycomp:${everycompat[mod]}/${namespace}/${wood_type}_${result["id"]}` ;
                    let r = sawmillRecipe(event, ingredient, result_id, result["amount"], is_logs ) ;
                    let r_id = `everycomp_${namespace}_${wood_type}_${mod}_${result["id"]}_from_${ingredient_part}`;
                    // Register sawmill recipes
                    event.custom(r).id(r_id + "_sawing")
                }
            }
        }
        // Supplementaries recipe (way_signs)
        if (Object.keys(mod_results).includes("supplementaries")){
            for (let result of mod_results["supplementaries"]){
                let result_id = `supplementaries:${namespace}/${result["id"]}_${wood_type}`;
                let r = sawmillRecipe(event, ingredient, result_id, result["amount"], is_logs);
                let r_id = `supplementaries_${namespace}_${wood_type}_${result["id"]}_from_${ingredient_part}`
                // Register sawmill recipes
                event.custom(r).id(r_id + "_sawing")
            }
        }
        // Luminous
        if (namespace === "luminousworld" && Object.keys(mod_results).includes("luminousworld")){
            for (let result of mod_results[namespace]){
                let result_id = `${namespace}:${wood_type}${result["id"]}`
                let r = sawmillRecipe(event, ingredient, result_id, result["amount"], is_logs);
                let r_id = `${namespace}_${wood_type}_${namespace}_${result["id"]}_from_${ingredient_part}`
                // Register sawmill recipes
                event.custom(r).id(r_id + "_sawing")
            }
        }
    }
    // Other modded items from everycompat
    for (const [ingredient_part, mod_results] of Object.entries(everycomp_other_items)) {
        // Everycompat recipes
        let ingredient = `${namespace}:${wood_type}_${ingredient_part}`;
        let is_logs = log_variants.includes(ingredient_part)
        for (const [mod, results] of Object.entries(mod_results)) {
            if (Object.keys(everycompat).includes(mod)) {
                for (const result of results) {
                    console.log(`result: ${result["id"]}`)
                    let result_id = `everycomp:${everycompat[mod]}/${namespace}/${wood_type}_${result["id"]}`;
                    if (result["id"] === "hollow_log") {
                        result_id = `everycomp:${everycompat[mod]}/${namespace}/hollow_${wood_type}_log`;
                    }
                    let r = sawmillRecipe(event, ingredient, result_id, result["amount"], is_logs)
                    let r_id = `everycomp_${namespace}_${wood_type}_${mod}_${result["id"]}_from_${ingredient_part}`;
                    // Register sawmill recipes
                    event.custom(r).id(r_id + "_sawing")
                }
            }
        }
    }
}


// Create new tags for abyssal_decor logs
ServerEvents.tags("item", event => {
    // White wood
    event.add("abyssal_decor:white_wood_logs", "abyssal_decor:white_wood_log" )
    event.add("abyssal_decor:white_wood_logs", "abyssal_decor:white_wood_wood" )
    // Black wood
    event.add("abyssal_decor:blackwood_logs", "abyssal_decor:blackwood_log" )
    event.add("abyssal_decor:blackwood_logs", "abyssal_decor:stripped_blackwood_log" )
    event.add("abyssal_decor:blackwood_logs", "abyssal_decor:blackwood_wood" )
    // Cinnamon
    event.add("abyssal_decor:cinnamon_logs", "abyssal_decor:cinnamon_log" )
    event.add("abyssal_decor:cinnamon_logs", "abyssal_decor:stripped_cinnamon_log" )
    event.add("abyssal_decor:cinnamon_logs", "abyssal_decor:cinnamon_wood" )
    event.add("abyssal_decor:cinnamon_logs", "abyssal_decor:stripped_cinnamon_wood" )
    
    //White oak
    event.add("luminousworld:white_oak_logs", "luminousworld:white_oak_log" )
    event.add("luminousworld:white_oak_logs", "luminousworld:stripped_white_oak_log" )
    event.add("luminousworld:white_oak_logs", "luminousworld:white_oak_wood" )
    event.add("luminousworld:white_oak_logs", "luminousworld:stripped_white_oak_wood" )
    // Palm
    event.add("luminousworld:palm_logs", "luminousworld:palm_log" )
    event.add("luminousworld:palm_logs", "luminousworld:stripped_palm_log" )
    event.add("luminousworld:palm_logs", "luminousworld:palm_wood" )
    event.add("luminousworld:palm_logs", "luminousworld:stripped_palm_wood" )
    // Auburn
    event.add("luminousworld:auburn_logs", "luminousworld:auburn_log" )
    event.add("luminousworld:auburn_logs", "luminousworld:stripped_auburn_log" )
    event.add("luminousworld:auburn_logs", "luminousworld:auburn_wood" )
    event.add("luminousworld:auburn_logs", "luminousworld:stripped_auburn_wood" )
    // Baobab
    event.add("luminousworld:baobab_logs", "luminousworld:bao_bob_log")
    event.add("luminousworld:baobab_logs", "luminousworld:stripped_bao_bab_log")
    event.add("luminousworld:baobab_logs", "luminousworld:stripped_bao_bab_wood")
})


ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    // Sawmill recipes
    for (const [namespace, w_types] of Object.entries(wood_types)){
        if (namespace === "minecraft"){
            for (const w_type of w_types) {
                modItemSawmillRecipe(event, mod_items, w_type, namespace);
            }
        }
        else {
            for (const w_type of w_types){
                vanillaItemSawmillRecipe(event, vanilla_items, w_type, namespace);
                modItemFromModdedWoodSawmillRecipe(event, mod_items, everycompat, w_type, namespace)
            }
        }
    }
    // Foxy pillar
    const foxy_r = sawmillRecipe(event, "minecraft:spruce_logs", "abyssal_decor:foxy_pillar", 1, true)
    event.custom(foxy_r);
    // Wood plate
    const w_plate_r = sawmillRecipe(event, "minecraft:wooden_slabs", "handcrafted:wood_plate", 1, true)
    event.custom(w_plate_r);


    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})