// requires: endrem
// This script add the modified end remaster eyes recipes

ServerEvents.recipes(event => {
    // Old Eye fragment
    event.shaped(
        Item.of('endrem:old_eye', 1), // arg 1: output
        [
                'AAA',
                'ABA', // pattern
                'AAA'
            ],
        {
            A: 'kubejs:old_eye_fragment', //input
            B: 'minecraft:ender_eye'
        }
    )   
})