// This script adds new intermediate stages between iron and steel ingots

const stages = [
    'wrought_iron',
    'hardened_iron',
    'tempered_iron',
];

const roman = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const english = ['','once', 'twice', 'thrice', 'four times', 'five times', 'six times', 'seven times', 'eight times', 'nine times', 'ten times'];
const stageColor = {
    'wrought_iron':'#737383',
    'hardened_iron':'#A2A5AD',
    'tempered_iron':'#CDCED4'
};
let stageName = '';

StartupEvents.registry('item', event => {
    stages.forEach(stage => {
        for (let i = 0; i < 4; i++) {
            stageName = stage.replace(/_/g, ' ') // Replace underscores with spaces
                        .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) // Capitalize first letter of each word
                        + ' ' + roman[i] // Replace number with roman numeral
            let ingot = event.create(`kubejs:${stage}_ingot_${i}`)
            ingot.displayName(stageName) // Set display name to capitalized stage name
            if (stage === 'tempered_iron') {
                ingot.texture('samurai_dynasty:item/steel_ingot') // Set texture to steel ingot
            }
            else {
                ingot.texture('minecraft:item/iron_ingot') // Set texture to iron ingot
            }
            ingot.color(stageColor[stage]) // Set color to stage color
            if (i > 0) {
                ingot.tooltip(Text.gray('Folded ' + english[i])) // Set tooltip to "Folded once", "Folded twice", etc.
            }
            ingot.tag('c:ingots/iron')
        }
    })
})