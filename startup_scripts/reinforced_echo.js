// Listen to item registry event
StartupEvents.registry('item', event => {
    // Reinforced Echo ingot
    event.create('reinforced_echo_ingot').tag(['c:ingots', 'c:ingots/echo'])
})