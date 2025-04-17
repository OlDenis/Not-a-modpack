// requires: endrem
/* This script add the modified end remaster eyes fragments and related items
   to the game. */

let eyes = [
    // Old
    {
        flavor : 'old',
        name : 'Old',
        tooltip : 'A fragment of an ancient worm\'s eye'
    },
    // Lost
    {
        flavor : 'lost',
        name : 'Lost',
        tooltip : 'A fragment of an Utheric artifact forged with Forgotten tools'
    },
    // Cursed
    {
        flavor : 'cursed',
        name : 'Cursed',
        tooltip : 'The shattered remains of an ancient piglin artifact'
    },
    // Black
    {
        flavor : 'black',
        name : 'Black',
        tooltip : 'A fragment of the legendary Black pearl\'s pride'
    },
    // Rogue
    {
        flavor : 'rogue',
        name : 'Rogue',
        tooltip : 'The shattered remains of knowledge from an early civilization'
    },
]

// This function is used to create the eye fragments items
StartupEvents.registry('item', event => {
    for (let eye of eyes) {
        console.log(eye['flavor'])
        event.create(`${eye['flavor']}_eye_fragment`)
            .displayName(`${eye['name']} Eye Fragment`)
            .tooltip(eye['tooltip'])
    }
})