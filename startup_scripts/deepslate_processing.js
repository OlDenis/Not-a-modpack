// requires: create

// This script adds new processed deepslate blocks

const crushedDeepslateLoot = {
    pools : [
        {
            rolls: 1,
            entries: [
                {
                    type: 'minecraft:item',
                    name: 'kubejs:crushed_deepslate',
                    weight: .575
                },
                {
                    type: 'minecraft:item',
                    name: 'kubejs:deepslate_chunk',
                    functions: [
                        {
                            function: 'minecraft:set_count',
                            count: {
                                min: 1,
                                max: 3,
                                type: 'minecraft:uniform'
                            }
                        }
                    ],
                    weight : .25
                },
                {
                    type: 'minecraft:item',
                    name: 'create:zinc_nugget',
                    functions: [
                        {
                            function: 'minecraft:set_count',
                            count: {
                                min: 1,
                                max: 2,
                                type: 'minecraft:uniform'
                            }
                        }
                    ],
                    weight : .15
                },
                {
                    type: 'minecraft:item',
                    name: 'create:iron_nugget',
                    functions: [
                        {
                            function: 'minecraft:set_count',
                            count: {
                                min: 1,
                                max: 2,
                                type: 'minecraft:uniform'
                            }
                        }
                    ],
                    weight : .02
                },
                {
                    type: 'minecraft:item',
                    name: 'create_d2d:diamond_shard',
                    functions: [
                        {
                            function: 'minecraft:set_count',
                            count: {
                                min: 1,
                                max: 1,
                                type: 'minecraft:uniform'
                            }
                        }
                    ],
                    weight : .005
                }
            ]
        }
    ]
}

StartupEvents.registry('block', event => {
    event.create('crushed_deepslate','falling')
        .displayName('Crushed Deepslate')
        .fullBlock(true)
        .gravelSoundType()
        .hardness(2.5)
        .resistance(6)
        .lightLevel(0)
        // .setLootTableJson(crushedDeepslateLoot)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/shovel')
        .tagBlock('minecraft:needs_iron_tool')
})

StartupEvents.registry('item', event => {
    event.create('deepslate_chunk')
        .displayName('Deepslate Chunk')
})

