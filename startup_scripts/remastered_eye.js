// requires: endrem
// This script add the modified end remaster eyes fragments and related items
// to the game.

StartupEvents.registry('item', event => {
    // Old Eye fragment
    event.create('old_eye_fragment')
        .displayName('Old Eye Fragment')
        .tooltip("A fragment of an ancient worm's eye")
    })