// requires: create, create_d2d, rechiseled
// priority: 2

// This script adds crushing recipes for deepslate blocks

const crushed_ds = "kubejs:crushed_deepslate";
const ds_chunk = "kubejs:deepslate_chunk";
const cobbled_ds = "minecraft:cobbled_deepslate";
const ds = "minecraft:deepslate";

ServerEvents.tags("item", event => {
    // Create new tags for deepstone blocks
    event.add('kubejs:deepstone', 'kubejs:deepstone');
    event.add('kubejs:deepstone', 'kubejs:chiseled_deepstone');

    event.add('kubejs:cut_deepstone', 'kubejs:cut_deepstone');
    event.add('kubejs:cut_deepstone', 'kubejs:deepstone');
})

ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    // Cobbled deepslate to crushed deepslate
    event.recipes.create.crushing(
        [
            withChance(crushed_ds, 0.85),
            withChance(ds_chunk, 0.15)
        ], 
       cobbled_ds
    ).id("crushing_cobbled_deepslate");

    // Deepslate to cobbled deepslate
    event.recipes.create.crushing(
        [
            withChance(cobbled_ds, 0.9),
            withChance(ds_chunk, 0.1)
        ],       
        ds
    ).id("crushing_deepslate");

    // Cobbled deepslate to deepsand
    event.recipes.create.crushing(
        [
            "kubejs:deepsand",
            withChance(ds_chunk, 0.01)
        ],       
        crushed_ds
    ).id("deepsand");

    // Deepslate chunks to cobbled deepslate
    event.shaped(
        cobbled_ds,
        [
            "AA",
            "AA"
        ],
        {
            A: ds_chunk
        }
    );

    // Washing crushed deepslate
    event.recipes.create.splashing(
        [
            withChance(ds_chunk, 0.125, 3),
            withChance("create:zinc_nugget", 0.15, 1),
            withChance("minecraft:iron_nugget", 0.02, 1),
        ], 
        crushed_ds
    );

    // Washing deepsand
    event.recipes.create.splashing(
        [
            withChance(ds_chunk, 0.05, 3),
            withChance("create:copper_nugget", 0.15, 1),
            withChance("minecraft:amethyst_shard", 0.02, 1),
            withChance("minecraft:amethyst_shard", 0.12, 3),
            withChance("create_d2d:diamond_shard", 0.005, 1),
        ], 
        "kubejs:deepsand"
    );

    // Deepstone blocks

    // Deepstone
    event.recipes.shaped(
        "kubejs:deepstone",
        [
            "AA",
            "AA"
        ],
        {
            "A": "kubejs:deepsand"
        }
    )
    event.recipes.shaped(
        "kubejs:deepstone_slab",
        [
            "AAA"
        ],
        {
            "A": "#kubejs:deepstone"
        }
    )
    event.recipes.shaped(
        "kubejs:deepstone_stairs",
        [
            "A  ",
            "AA ",
            "AAA"
        ],
        {
            "A": "#kubejs:deepstone"
        }
    )
    event.recipes.shaped(
        "kubejs:deepstone_wall",
        [
            "AAA",
            "AAA"
        ],
        {
            "A": "#kubejs:deepstone"
        }
    )
    event.recipes.stonecutting(
        "2x kubejs:deepstone_slab",
        "kubejs:deepstone"
    ).id("deepstone_slab_from_cutting")
    event.recipes.stonecutting(
        "kubejs:deepstone_stairs",
        "kubejs:deepstone"
    ).id("deepstone_stairs_from_cutting")
    event.recipes.stonecutting(
        "kubejs:deepstone_wall",
        "kubejs:deepstone"
    ).id("deepstone_wall_from_cutting")

    // Chiseled Deepstone
    event.recipes.shaped(
        "kubejs:chiseled_deepstone",
        [
            "A",
            "A"
        ],
        {
            "A": "kubejs:deepstone_slab"
        }
    )
    event.recipes.stonecutting(
        "kubejs:chiseled_deepstone",
        "kubejs:deepstone"
    )

    // Cut Deepstone
    event.recipes.shaped(
        "kubejs:cut_deepstone",
        [
            "AA",
            "AA"
        ],
        {
            "A": "kubejs:deepstone"
        }
    )
    event.recipes.shaped(
        "kubejs:cut_deepstone_slab",
        [
            "AAA"
        ],
        {
            "A": "kubejs:cut_deepstone"
        }
    )
    event.recipes.shaped(
        "kubejs:cut_deepstone_stairs",
        [
            "A  ",
            "AA ",
            "AAA"
        ],
        {
            "A": "kubejs:cut_deepstone"
        }
    )
    event.recipes.shaped(
        "kubejs:cut_deepstone_wall",
        [
            "AAA",
            "AAA"
        ],
        {
            "A": "kubejs:cut_deepstone"
        }
    )
    event.recipes.stonecutting(
        "2x kubejs:cut_deepstone_slab",
        "#kubejs:cut_deepstone"
    ).id("cut_deepstone_slab_from_cutting")
    event.recipes.stonecutting(
        "kubejs:cut_deepstone_stairs",
        "#kubejs:cut_deepstone"
    ).id("cut_deepstone_stairs_from_cutting")
    event.recipes.stonecutting(
        "kubejs:cut_deepstone_wall",
        "#kubejs:cut_deepstone"
    ).id("cut_deepstone_wall_from_cutting")

    // Smooth Deepstone
    event.recipes.smelting(
        "kubejs:smooth_deepstone",
        "kubejs:deepstone"
    );
    event.recipes.shaped(
        "kubejs:smooth_deepstone_slab",
        [
            "AAA"
        ],
        {
            "A": "kubejs:smooth_deepstone"
        }
    )
    event.recipes.shaped(
        "kubejs:smooth_deepstone_stairs",
        [
            "A  ",
            "AA ",
            "AAA"
        ],
        {
            "A": "kubejs:smooth_deepstone"
        }
    )
    event.recipes.shaped(
        "kubejs:smooth_deepstone_wall",
        [
            "AAA",
            "AAA"
        ],
        {
            "A": "kubejs:smooth_deepstone"
        }
    )
    event.recipes.stonecutting(
        "2x kubejs:smooth_deepstone_slab",
        "kubejs:smooth_deepstone"
    ).id("smooth_deepstone_slab_from_cutting");
    event.recipes.stonecutting(
        "kubejs:smooth_deepstone",
        "kubejs:smooth_deepstone_stairs"
    ).id("smooth_deepstone_stairs_from_cutting");
    event.recipes.stonecutting(
        "kubejs:smooth_deepstone",
        "kubejs:smooth_deepstone_wall"
    ).id("smooth_deepstone_wall_from_cutting");
    
    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})

// Add washing output to crushed deepslate block breaking
LootJS.modifiers(event => {
    event.addTableModifier("kubejs:blocks/crushed_deepslate")
    .addLoot(LootEntry.of("kubejs:deepslate_chunk")
        .randomChance(0.15)
        .setCount([1, 3]),
    LootEntry.of("create:zinc_nugget")
        .randomChance(0.10)
        .setCount([1, 2]),
    LootEntry.of("create:iron_nugget")
        .randomChance(0.02)
        .setCount([1, 2]),
    LootEntry.of("create_d2d:diamond_shard")
        .randomChance(0.005)
    )
})
