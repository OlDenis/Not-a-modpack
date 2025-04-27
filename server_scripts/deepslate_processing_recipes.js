// requires: create, create_d2d
// priority: 2

// This script adds crushing recipes for deepslate blocks

const crushed_ds = "kubejs:crushed_deepslate";
const ds_chunk = "kubejs:deepslate_chunk";
const cobbled_ds = "minecraft:cobbled_deepslate";
const ds = "minecraft:deepslate";

ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    // Cobbled deepslate to crushed deepslate
    event.recipes.create.crushing(
        [
            crushed_ds,
            withChance(ds_chunk, 0.15)
        ], 
       cobbled_ds
    ).id("crushing_cobbled_deepslate");

    // Deepslate to cobbled deepslate
    event.recipes.create.crushing(
        [
            cobbled_ds,
            withChance(ds_chunk, 0.1)
        ],       
        ds
    ).id("crushing_deepslate");

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
            withChance("create_d2d:diamond_shard", 0.005, 1),
        ], 
        crushed_ds
    );
    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})
