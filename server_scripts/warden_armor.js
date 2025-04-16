// PlayerEvents.tick(event => {
//     let p = event.player
//     if (p.helmet == "rune_helmet" && p.body == "rune_body" && p.leggings == "rune_leggings" && p.boots == "rune_boots") {
//     p.potionEffects.add("fire_resistance,100,1,true")
//     }
// })

function checkArmorSet(player, prefix) {
    return !player.armorSlots.some(a => 
        !a.id.startsWith(prefix)
    )
};

PlayerEvents.tick(event => {
    const { player } = event;

    // Fires event once a second
    if (!(player.tickCount % 100 === 0)) {
        return;
    }
    let prefix = "deeperdarker:warden_";
    // Check if the player is wearing the full armor set
    if (checkArmorSet(player, prefix)) {
        // Apply regeneration potion effect
        let potion = event.player.potionEffects
        for (let effect of [
            'minecraft:strength',
            'minecraft:resistance'
            ]
        ) {
            potion.add(effect, 300, 1)
        }

    }
});