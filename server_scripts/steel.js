// requires : create, create_ironworks, samurai_dynasty

function foldRecipe(event, input, output) {
    event.smithing(
        Item.of(output, 3),
        input,
        input,
        input
    )
}

const stages = [
    'wrought',
    'hardened',
    'tempered'
]
const time = 200
const exp = 0.35

// This script tweaks the steel ingot recipes
ServerEvents.recipes(event => {
    // Adding ingot folding recipes
    stages.forEach (stage => {
        for (let i = 0; i < 3; i++) {
            foldRecipe(event, `kubejs:${stage}_iron_ingot_${i}`, `kubejs:${stage}_iron_ingot_${i + 1}`)
        }
    })
    // Removing original steel ingot recipe
    event.remove({id: 'samurai_dynasty:steel_ingot_from_blasting_iron_ingot'})
    // Adding new blasting recipes
    event.blasting(
        'kubejs:wrought_iron_ingot_0',
        'minecraft:iron_ingot',
        exp,
        2*time
    )
    event.blasting(
        'samurai_dynasty:steel_ingot',
        'kubejs:tempered_iron_ingot_3',
        exp,
        time
    )
   for (let i = 0; i < 2; i++) {
        event.blasting(
            `kubejs:${stages[i+1]}_iron_ingot_0`,
            `kubejs:${stages[i]}_iron_ingot_3`,
            exp,
            time
        )
    }
})