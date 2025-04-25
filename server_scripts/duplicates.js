//requires: create_compressed, create_ironworks, cratedelight

// This script removes duplicate items and recipes from Not a Modpack

const create_tm = 'create_things_and_misc:';
const ssb = 'create_ironworks:sturdy_sheet_block';
const pssb = 'create_compressed:sturdy_sheet_block';
const tssb = create_tm + 'sturdy_sheet_block'
const tss_slab = create_tm + 'sturdy_sheet_slab'
const tss_stairs = create_tm + 'sturdy_sheet_slab_stairs'

ServerEvents.recipes(event => {
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
})

// Remove item from EMI/JEI/REI
RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('createdelight:apple_crate')
})

// Change sturdy sheet block duplicate to Polished sturdy sheet block
ItemEvents.modifyTooltips(event => {
    event.modify(pssb, tooltip => {
        // Remove block title
        tooltip.removeLine(0)
        // Insert text at top of list
        tooltip.insert(0, Text.of('Polished Sturdy Sheet Block'))
    }) // Note: this doesn't change the name of the item in wthit or EMI
    event.modify(tssb, tooltip => {
        // Remove block title
        tooltip.removeLine(0)
        // Insert text at top of list
        tooltip.insert(0, Text.of('Train Block'))
    }) // Note: this doesn't change the name of the item in wthit or EMI
    event.modify(tss_slab, tooltip => {
        // Remove block title
        tooltip.removeLine(0)
        // Insert text at top of list
        tooltip.insert(0, Text.of('Train Block Slab'))
    }) // Note: this doesn't change the name of the item in wthit or EMI
    event.modify(tss_stairs, tooltip => {
        // Remove block title
        tooltip.removeLine(0)
        // Insert text at top of list
        tooltip.insert(0, Text.of('Train Block Stairs'))
    }) // Note: this doesn't change the name of the item in wthit or EMI
})