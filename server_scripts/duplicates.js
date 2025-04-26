//requires: create_compressed, create_ironworks, create_things_and_misc, cratedelight, expandeddelight, create_things_and_misc, create, simplyswords

// This script removes duplicate items and recipes from Not a Modpack

// Sturdy sheet blocks
const create_tm = 'create_things_and_misc:';
const ssb = 'create_ironworks:sturdy_sheet_block';
const pssb = 'create_compressed:sturdy_sheet_block';
const tssb = create_tm + 'sturdy_sheet_block'
const tss_slab = create_tm + 'sturdy_sheet_slab'
const tss_stairs = create_tm + 'sturdy_sheet_slab_stairs'

// Rose quartz blocks
const rq_sheet_block = 'create_ironworks:rose_quartz_block';
const rq_sheet = 'create_things_and_misc:rose_quartz_sheet';
const rq_armor = 'create_ironworks:rose_quartz_armor';
const armor_slots = ['helmet', 'chestplate', 'leggings', 'boots'];

// Salt items
const salt_bag = 'cratedelight:salt_bag';
const salt = 'expandeddelight:salt';
const salt_rock = 'expandeddelight:salt_rock';
const salt_ore = 'c:ores/salt';
const salt_compound = 'garnished:salt_compound';
const crushed_salt = 'garnished:crushed_salt';

// Simply Swords materials
const ss_materials = [
    'iron',
    'gold',
    'diamond',
    'netherite',
    'runic'
];

ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);   

    // Apple crates
    event.remove({output: "cratedelight:apple_crate"});
    // Sturdy sheet blocks
    event.remove({output: pssb});
    event.shaped(
        Item.of(pssb, 4),
            [
                'AA',
                'AA'
            ],
            {
                A : ssb
            }
        );
    event.stonecutting(pssb, ssb);
    event.stonecutting(ssb, pssb);
    // Rose Quartz Block
    event.remove({output: rq_sheet_block});
    for (const slot of armor_slots) {
        event.remove({output: rq_armor + '_' + slot});
    }
    event.shaped(
        Item.of(rq_sheet_block, 1),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A : rq_sheet
            }
        );
    event.shaped(
    Item.of(rq_armor + '_helmet', 1),
        [
            'AAA',
            'A A'
        ],
        {
            A : rq_sheet
        }
    );
    event.shaped(
        Item.of(rq_armor + '_chestplate', 1),
            [
                'A A',
                'AAA',
                'AAA'
            ],
            {
                A : rq_sheet
            }
        );
    event.shaped(
        Item.of(rq_armor + '_leggings', 1),
            [
                'AAA',
                'A A',
                'A A'
            ],
            {
                A : rq_sheet
            }
        );
    event.shaped(   
        Item.of(rq_armor + '_boots', 1),
            [
                'A A',
                'A A'
            ],
            {
                A : rq_sheet
            }
        );
    // Salt recipes
    event.remove({id: "expandeddelight:salt"});
    event.shapeless(
        Item.of(salt, 9), [salt_bag]
    );
    event.remove({output: salt_rock})
    event.recipes.create.milling(
        [
            salt_rock,
            withChance(salt, 0.18, 3),
            withChance("create:experience_nugget", 0.05)
        ],
        {tag: salt_ore}
    );
    event.recipes.create.milling(
        [
            Item.of(salt, 2),
            withChance(salt, 0.15)
        ],
        salt_rock
    );
    event.recipes.create.milling(
        [
            Item.of(salt, 2),
            withChance(salt, 0.1)
        ],
        crushed_salt
    );
    event.recipes.create.mixing(
        salt,
        {
            "type": "fluid_stack",
            "amount": 1000,
            "fluid": "minecraft:water"
        }
    ).heated()

    // Simply Swords spears
    for (const material of ss_materials) {
        event.remove({output: 'simplyswords:' + material + '_spear'});                           
    }
    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})

// Remove item from EMI/JEI/REI
RecipeViewerEvents.removeEntries('item', event => {
    event.remove('cratedelight:apple_crate')
    for (const material of ss_materials) {
        event.remove('simplyswords:' + material + '_spear')
    }
})

// Remove items from loot tables
// Spear filter that keeps sword on a stick in loot tables
const spearFilter = ItemFilter.allOf(
    '#simplyswords:spears',
    '!simplyswords:sword_on_a_stick'
);

LootJS.modifiers(event => {
    event.addTableModifier(LootType.CHEST).removeLoot(spearFilter)
})

// Remove tags from items
// ServerEvents.tags('item', event => {
//     for (const material of ['iron', 'gold', 'diamond']) {
//         event.removeAllTagsFrom('simplyswords:' + material + '_spear');
//     }
// });

