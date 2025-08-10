// requires: create

// This script adds new processed deepslate blocks

let rechiseled_ds = ['bricks', 'brick_pattern', 'brick_paving', 'diagonal_bricks', 'large_tiles', 'polished', 'rotated_bricks', 'tiles']
let rechiseled_ds_names = {
    "diagonal_bricks": "Diagonal Deepstone Bricks",
    "large_tiles" : "Large Deepstone Tiles",
    "polished": "Polished Deepstone",
    "rotated_bricks": "Rotated Deepstone Bricks",
    "brick_paving": "Deepstone Brick Paving",
    "brick_pattern": "Deepstone Brick Pattern"
}

StartupEvents.registry('block', event => {
    // Rechiseled deepstone
    let chisel_name = ""
    for (let chisel of rechiseled_ds){
        for (let connect of ["","_connecting"]){
            let rds = event.create("deepstone_"+chisel+connect)
                .fullBlock(true)
                .soundType('deepslate')
                .hardness(3)
                .resistance(6)
                .lightLevel(0)
                .requiresTool(true)
                .tagBlock('minecraft:mineable/pickaxe')
                .tagBlock('minecraft:needs_iron_tool')
            // Change display name for blocks with complex names
            if (chisel in rechiseled_ds_names){
                chisel_name = rechiseled_ds_names[chisel]
            }
            else {
                chisel_name = "Deepstone " + chisel[0].toUpperCase() + chisel.slice(1);
            }
            rds.displayName(chisel_name)
            // Add tootltip to the blocks item
            if (connect){
                rds.tagBlock("kubejs:connecting")
            }
        }
    }
})

