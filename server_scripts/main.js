//requires: create_deep_dark, deeperdarker
// This is a server script for KubeJS.

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
     
  let armorPieces = [
    'helmet',
    'chestplate',
    'leggings',
    'boots'
  ];
  
  let tools = [
    'pickaxe',
    'axe',
    'shovel',
    'sword',
    'hoe'
  ];

  // Adding the Warden armor recipes
  for (let piece of armorPieces) {
    // Remove the Warden armor recipes
    event.remove({output: 'deeperdarker:warden_' + piece});
    // Changing Warden armor recipe
    event.smithing(
      'deeperdarker:warden_' + piece,                  // arg 1: output
      'deeperdarker:warden_upgrade_smithing_template', // arg 2: the smithing template
      'create_deep_dark:echo_armor_' + piece,          // arg 3: the item to be upgraded
      'deeperdarker:reinforced_echo_shard'             // arg 4: the upgrade item
    )
  }
  // Adding the Warden tools recipes  
  for (let tool of tools) {
    // Remove the Warden tools recipes
    event.remove({output: 'deeperdarker:warden_' + tool});
    // Changing Warden tools recipe
    event.smithing(
      'deeperdarker:warden_' + tool,                    // arg 1: output
      'deeperdarker:warden_upgrade_smithing_template',  // arg 2: the smithing template
      'minecraft:netherite_' + tool,                    // arg 3: the item to be upgraded
      'kubejs:reinforced_echo_ingot'                    // arg 4: the upgrade item
    )
  }

  // Adding reinforced echo ingot recipe
  event.custom({
    type: 'create:mixing',
    heat_requirement: "superheated",
    ingredients: [
      {
        "type": "fluid_stack",
        "amount": 250,
        "fluid": "create_deep_dark:molten_echo"
      },
      {item: 'minecraft:phantom_membrane'}, // repeat ingredient to require multiple
      {item: 'minecraft:phantom_membrane'}, 
      {item: 'minecraft:phantom_membrane'}, 
      {item: 'minecraft:phantom_membrane'}, 
      {item: 'deeperdarker:warden_carapace'},
      {item: 'deeperdarker:warden_carapace'},
      {item: 'deeperdarker:warden_carapace'},
      {item: 'deeperdarker:warden_carapace'},
      {item: 'create_deep_dark:echo_ingot'}
    ],
    results: [
      {
        id: 'kubejs:reinforced_echo_ingot',
        count: 1
      }
    ],
  })

  // Adding reinforced echo block recipes
  event.shapeless(
    Item.of('kubejs:reinforced_echo_block'), // arg 1: output
    [
      '9x kubejs:reinforced_echo_ingot' // arg 2: the input items
    ]
  )
  event.shapeless(
    Item.of('kubejs:reinforced_echo_ingot', 9), // arg 1: output
    [
      'kubejs:reinforced_echo_block' // arg 2: the input items
    ]
  )
})
