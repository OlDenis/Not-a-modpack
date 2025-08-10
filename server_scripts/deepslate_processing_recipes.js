// requires: create, rechiseled
// priority: 2

// This script adds crushing recipes for deepslate blocks

const crushed_ds = "kubejs:crushed_deepslate";
const ds_chunk = "kubejs:deepslate_chunk";
const cobbled_ds = "minecraft:cobbled_deepslate";
const ds = "minecraft:deepslate";

// Edit Rechiseled Deepstone tooltip
ItemEvents.modifyTooltips(event => {
    event.add('#kubejs:connecting', Text.gray('Connecting'));
    event.add('kubejs:deepstone_bricks_connecting', Text.gray('Connecting'));
})