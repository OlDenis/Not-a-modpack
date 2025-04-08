// Replace End remaster's eyes with shards that will be used to craft them

// Replace Old eye by ...

LootJS.modifiers(event => {
    event
        .addTableModifier("minecraft:chests/desert_pyramid")
        .replaceLoot("endrem:old_eye", "kubejs:old_eye_fragment", true)
})
