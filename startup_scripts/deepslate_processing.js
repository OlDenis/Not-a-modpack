// requires: create

// This script adds new processed deepslate blocks

let rechiseled_ds = ['bricks', 'brick_pattern', 'brick_paving', 'diagonal_bricks', 'large_tiles', 'polished', 'rotated_bricks', 'tiles']
let rechiseled_ds_names = {
    "diagonal_bricks": "Diagonal Deepstone Bricks",
    "large_tiles" : "Large Deepstone Tiles",
    "polished": "Polished Deepstone",
    "rotated_bricks": "Rotated Deepstone Bricks"
}

StartupEvents.registry('block', event => {
    // Crushed deepslate
    event.create('crushed_deepslate','falling')
        .displayName('Crushed Deepslate')
        .fullBlock(true)
        .gravelSoundType()
        .hardness(2.5)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/shovel')
        .tagBlock('minecraft:needs_iron_tool')

    // Deepsand
    event.create('deepsand', 'falling')
        .fullBlock(true)
        .sandSoundType()
        .hardness(2.5)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/shovel')
        .tagBlock('minecraft:needs_iron_tool')

    // Deepstone
    event.create('deepstone')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('kubejs:deepstone')
        .tagBlock('kubejs:cut_deepstone')
        
    // Deepstone Stairs
    event.create('deepstone_stairs', 'stairs')
        .displayName('Deepstone Stairs')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .texture('up','kubejs:smooth_deepstone/stairs')
        .tagBlock('kubejs:deepstone')
        
    // Deepstone Slab
    event.create('deepstone_slab', 'slab')
        .displayName('Deepstone Slab')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('kubejs:deepstone/slab')
        .texture('up', 'kubejs:smooth_deepstone')
        
    // Deepstone wall
    event.create('deepstone_wall', 'wall')
        .displayName('Deepstone Wall')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('kubejs:deepstone/wall')
        
    // Cut Deepstone
    event.create('cut_deepstone')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('kubejs:deepstone')
        .tagBlock('kubejs:cut_deepstone')
        
    // Deepstone Stairs
    event.create('cut_deepstone_stairs', 'stairs')
        .displayName('Cut Deepstone Stairs')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .texture('up', 'kubejs:smooth_deepstone')
        .tagBlock('kubejs:deepstone/stairs')
        
    // Cut Deepstone Slab
    event.create('cut_deepstone_slab', 'slab')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('kubejs:deepstone/slab')
        
    // Cut Deepstone Wall
    event.create('cut_deepstone_wall', 'wall')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('kubejs:deepstone/wall')
        
    // Chiseled Deepstone
    event.create('chiseled_deepstone')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('kubejs:deepstone')
        
    // Smooth Deepstone
    event.create('smooth_deepstone')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('kubejs:smooth_deepstone')
        
    // Smooth Deepstone Stairs
    event.create('smooth_deepstone_stairs','stairs')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('kubejs:smooth_deepstone/stairs')
        
    // Smooth Deepstone Slab
    event.create('smooth_deepstone_slab','slab')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('kubejs:smooth_deepstone/slab')
        
    // Smooth Deepstone Wall
    event.create('smooth_deepstone_wall','wall')
        .fullBlock(true)
        .soundType('deepslate')
        .hardness(3)
        .resistance(6)
        .lightLevel(0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('kubejs:smooth_deepstone/wall')
        
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
    
StartupEvents.registry('item', event => {
    event.create('deepslate_chunk')
        .displayName('Deepslate Chunk')
})

