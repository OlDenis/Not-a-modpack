// Replace End remaster's eyes with shards that will be used to craft them
// Old Eye fragment loot tables
const eyesLootTables = {
    "old": [
        {
            "id": "minecraft:archaeology/desert_pyramid",
            "weight": 5
        },
        {
            "id": "sweety_archaeology:archaeology/desert_post",
            "weight": 5
        },
        {
            "id": "terralith:desert_outpost",
            "weight": 1
        },
        {
            "id": "betterarcheology:archeology/desert_sand",
            "weight": 5
        },
        {
            "id": "betterarcheology:archeology/chest_buried_ruins_sand",
            "weight": 1
        },
        {
            "id": "betterdeserttemples:chests/tomb",
            "weight": 5
        },
        {
            "id": "betterdeserttemples:chests/lab",
            "weight": 5
        },
        {
            "id": "betterdeserttemples:chests/pharaoh_hidden",
            "weight": 10
        },
        {
            "id": "nova_structures:archaelogy/desert_ruin_inside_temple",
            "weight": 80
        }
    ],
    "rogue": [
        {
            "id": "betterarcheology:archeology/chest_jungle_temple_treasure",
            "weight": 25
        },
        {
            "id": "sweety_archaeology:archaeology/ritual_site",
            "weight": 5
        },
        {
            "id": "nova_structures:chests/jungle_ruins/jungle_ruins_main_temple",
            "weight": 5
        }
    ],
    "cursed": [
        {
            id: "nova_structures:chests/piglin_outstation/vault_piglin_outstation",
            weight: 100
        },
        {
            id: "nova_structures:chests/piglin_donjon/vault_piglin_donjon",
            weight: 100
        }
        
    ],
    "black": [
        {
            id: "medieval_buildings:chests/ship_barrel",
            weight: 3
        },
        {
            id: "medieval_buildings:chests/ship_chests",
            weight: 3
        },
        {
            id: "irons_spellbooks:chests/impaled_icebreaker/captain_quarters",
            weight: 3
        }
    ],
    "lost": [
        {
            id: "undergarden:chests/catacombs",
            weight: 10
        },
        {
            id: "undergarden:entities/forgotten_guardian",
            weight: 10
        }
    ]
}

LootJS.modifiers(event => {
    // Replace Old eye by amber_remnant
    event.addTableModifier("minecraft:chests/desert_pyramid")
        .replaceLoot("endrem:old_eye", "garnished:amber_remnant", true)
    // Replace rogue eye by its fragment
    event.addTableModifier("minecraft:chests/jungle_temple")
        .replaceLoot("endrem:rogue_eye", "kubejs:rogue_eye_fragment", true)
    // Replace black eye by its fragment
    event.addTableModifier("minecraft:chests/buried_treasure")
        .replaceLoot("endrem:black_eye", "kubejs:black_eye_fragment", true)
    // Replace cursed eye by its fragment
    event.addTableModifier("minecraft:chests/bastion_treasure")
        .replaceLoot("endrem:cursed_eye", "kubejs:cursed_eye_fragment", true)
    // Replace lost eye by bread
    event.addTableModifier("minecraft:chests/abandoned_mineshaft")
        .replaceLoot("endrem:lost_eye", "minecraft:bread", true)
    // Replace corrupted eye by bread
    event.addTableModifier("minecraft:chests/pillager_outpost")
        .removeLoot("endrem:corrupted_eye")
    // Add corrupted eye to lone citadel loot tables
    event.addTableModifier("nova_structures:chests/lone_citadel/c_vault_boss")
        .randomChance(1.0)
        .addLoot("endrem:corrupted_eye")
    // Replace undead soul by skeleton horse trophy
    event.addTableModifier("minecraft:entities/skeleton_horse")
        .replaceLoot("endrem:undead_soul", "handcrafted:skeleton_horse_trophy", true)
})

// const aetherFilter = ItemFilter.custom(item => {
//     return item.hasTas('')
// })

// Add Eye fragments to loot tables
LootJS.lootTables(event => {
    for (let [eye, lootTables] of Object.entries(eyesLootTables)) {
        for (let lootTable of lootTables) {
            event.getLootTable(lootTable["id"])
                .firstPool()
                .addEntry(LootEntry.of("kubejs:" + eye + "_eye_fragment").withWeight(lootTable["weight"]))
        }
    }
    // Add undead soul to Twilight forest lich
    event.getLootTable("twilightforest:entities/lich")
        .firstPool()
        .addEntry(LootEntry.of("endrem:undead_soul"))
    // Add nether eye to blaze loot if killed with aether sword
    event.getLootTable("minecraft:entities/blaze")
        .firstPool()
        .addEntry(LootEntry.of("endrem:nether_eye")
            .withWeight(0.05)
            .matchMainHand(ItemFilter.anyOf(
                ItemFilter.tag("#aether:bronze_dungeon_loot"),
                ItemFilter.tag("#aether:silver_dungeon_loot"),
                ItemFilter.tag("#aether:gold_dungeon_loot")
            ))
        )
})