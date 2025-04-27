// This script adds compacted coal items from create: high_pressure

StartupEvents.registry('item', event => {
    event.create('graphite')
    event.create('graphite_powder')
    event.create('impure_diamond')
})