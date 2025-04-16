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
            "id": "minecraft:chests/jungle_temple",
            "weight": 25
        },
        {
            "id": "betterarcheology:archeology/chest_jungle_temple_treasure",
            "weight": 25
        },
        {
            "id": "sweety_archaeology:archaeology/ritual_site",
            "weight": 5
        },
    ],
    "cursed": [
        {
            id: "nova_structures:chests/piglin_outstation/vault_piglin_outstation",
            weight: 100
        }
    ],
    "black": [
        {
            id: "medieval_buildings:chests/ship_barrel",
            weight: 10
        },
        {
            id: "medieval_buildings:chests/ship_chests",
            weight: 15
        }
    ]
}

// Replace Old eye by ...
LootJS.modifiers(event => {
    event.addTableModifier("minecraft:chests/desert_pyramid")
        .replaceLoot("endrem:old_eye", "garnished:amber_remnant", true)
    event.addTableModifier("minecraft:archaeology/desert_pyramid")
        .replaceLoot("endrem:old_eye", "minecraft:bread", true)
    // Add Eye fragments to loot tables
    event.addTableModifier("nova_structures:chests/lone_citadel/c_vault_boss")
        .randomChance(1.0)
        .addLoot("endrem:corrupted_eye")
})

// Add Eye fragments to loot tables
LootJS.lootTables(event => {
    for (let [eye, lootTables] of Object.entries(eyesLootTables)) {
        for (let lootTable of lootTables) {
            event.getLootTable(lootTable["id"])
                .firstPool()
                .addEntry(LootEntry.of("kubejs:" + eye + "_eye_fragment").withWeight(lootTable["weight"]))
        }
    }
})