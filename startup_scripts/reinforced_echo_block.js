const blockName = 'reinforced_echo_block';

StartupEvents.registry('block', event => {
    // Reinforced Echo block
    event.create(blockName) // Create a new block with ID 'kubejs:reinforced_echo_block'
        .displayName('Reinforced Echo Block') // Set a custom name
        .soundType('sculk') // Set a material (affects the sounds and some properties)
        .fullBlock(true)
        .hardness(5.0) // Set hardness (affects mining time)
        .resistance(2000.0) // Set resistance (to explosions, etc)
        .requiresTool(true) // Requires a tool or it won't drop (see tags below)
        .tagBlock('minecraft:beacon_base_blocks') //can be used as a beacon base
        .tagBlock('minecraft:mineable/pickaxe') // need a pickaxe
        .tagBlock('minecraft:needs_diamond_tool') // the tool tier must be at least diamond
        .property(BlockProperties.AXIS) // Allows the block to be placed in different orientations (x, y, z) like logs
        .placementState((event) => 
            event.set(BlockProperties.AXIS, event.clickedFace.axis))
    })