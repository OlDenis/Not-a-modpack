const $Map = Java.loadClass("java.util.Map");
const $HashMap = Java.loadClass("java.util.HashMap");
const $ArmorItem = Java.loadClass("net.minecraft.world.item.ArmorItem");
const $ArmorType = Java.loadClass("net.minecraft.world.item.ArmorItem$Type");

// Create reinforced echo armor material
StartupEvents.registry('armor_material', event => {
    event.create('kubejs:reinforced_echo')
        .defense({
            helmet: 4.0,
            chestplate: 9.0,
            leggings: 7.0,
            boots: 4.0
        })
        .toughness(4.0)
        .knockbackResistance(0.2)
        .repairIngredient(() => Item.of('kubejs:reinforced_echo_ingot'))
        .equipSound('minecraft:item.armor.equip_iron')
});


// Listen to item registry event
StartupEvents.registry('item', event => {
    // Reinforced Echo ingot
    event.create('reinforced_echo_ingot').tag(['c:ingots', 'c:ingots/reinforced_echo']);
    for (const piece of ['helmet', 'chestplate', 'leggings', 'boots']){
        event.create(`reinforced_echo_${piece}`, `${piece}`).material('kubejs:reinforced_echo')
    }
});