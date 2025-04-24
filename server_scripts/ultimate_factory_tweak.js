// requires create_utlimate_factory, create_d2d, garnished

const ultimate = 'create_ultimate_factory:';
const recipesToRemove = [
    "compacting_coalblock",
    "compacting_calcite",
    "crushing_blackstone",
    "crushing_seagrass",
    "crushing_netherite",
    "crushing_scoria"
];

ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);   

    // Remove the recipes from the ultimate factory mod
    for (const recipe of recipesToRemove) {
        event.remove({id: ultimate + recipe});
    }
    event.remove({output: "minecraft:wither_skeleton_skull"});
    // Compact coal into diamond
    event.recipes.create.compacting(
        [
           "create_d2d:diamond_shard",
           withChance("minecraft:diamond", 0.10),
           withChance("minecraft:coal", 0.50, 3),
           withChance("create_d2d:coal_piece", 0.25, 16),
        ],
        [
            "minecraft:coal_block",
            "minecraft:coal_block",
            "minecraft:coal_block",
            "minecraft:coal_block",
            "minecraft:coal_block",
            "minecraft:coal_block",
            "minecraft:coal_block",
            "minecraft:coal_block",
            "minecraft:coal_block",
            {
                "type" : "fluid_stack",
                "fluid" : "minecraft:lava",
                "amount" : 1000
            }
        ]
    ).superheated();

    // Compact gravel and salt into calcite
    event.recipes.create.compacting(
        "minecraft:calcite",
        [
            "minecraft:gravel",
            "garnished:salt_compound",
            "garnished:salt_compound",
            "garnished:salt_compound",
        ]
    ).heated()

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})
