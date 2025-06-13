// Remove smallships whith no textures
const smallship_w_types = [
    'aether_skyroot',
    'twilightforest_canopy',
    'twilightforest_dark',
    'twilightforest_dark',
    'twilightforest_mangrove',
    'twilightforest_mining',
    'twilightforest_sorting',
    'twilightforest_time',
    'twilightforest_transformation',
    'twilightforest_twilight_oak',
    'undergarden_grongle',
    'undergarden_smogstem',
    'undergarden_wigglewood'
]

StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event =>{
    for (const ship_type of ['cog', 'brigg', 'galley', 'drakkar']) {
        for (const w_type of smallship_w_types) {
            event.remove(`smallships:${w_type}_${ship_type}`)
        }
    }
})
