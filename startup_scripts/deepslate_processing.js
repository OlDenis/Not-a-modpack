// requires: create

// This script adds new processed deepslate blocks

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
        .texture('up','kubejs:smooth_deepstone')
        
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

})

StartupEvents.registry('item', event => {
    event.create('deepslate_chunk')
        .displayName('Deepslate Chunk')
})

