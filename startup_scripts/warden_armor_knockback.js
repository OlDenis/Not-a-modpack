// ignore: true

ItemEvents.modification(event => {
  let kr = 0.2; // Knockback Resistance value
  let armorSet = [
    "deeperdarker:warden_helmet",
    "deeperdarker:warden_chestplate",
    "deeperdarker:warden_leggings",
    "deeperdarker:warden_boots"
  ];
  let armorIDs = [
    "minecraft:armor.helmet",
    "minecraft:armor.chestplate",
    "minecraft:armor.leggings",
    "minecraft:armor.boots"
  ];
  let armorSlots = [
    "head",
    "chest",
    "legs",
    "feet"
  ];

  // Loop through each armor piece and modify its attributes
  for (let i = 0; i < armorSet.length; i++) {
    event.modify(armorSet[i], item => {
      let modifiedAttributeModifiers = Item.of(item.item().id).attributeModifiers.withModifierAdded(
        "generic.knockback_resistance", { amount: kr, id: armorIDs[i], operation: "add_value" }, armorSlots[i]
      )
      item.setAttributeModifiersWithTooltip(modifiedAttributeModifiers.modifiers())
  })}
});


// This script modifies the Knockback Resistance for the Warden armor set