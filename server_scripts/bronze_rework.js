ServerEvents.tags("item", event => {
    event.add("kubejs:hammer", "handcrafted:hammer")
})

ServerEvents.tags("block", event =>{
    event.remove("minecraft:needs_iron_tool", "create:zinc_ore")
    event.add("minecraft:needs_stone_tool", "create:zinc_ore")
})

ServerEvents.recipes(event => {
    event.shaped(
        "create:whisk",
        [
            " A ",
            "BAB",
            "BBB"
        ],
        {
            "A": 'create:andesite_alloy',
            "B": "create_ironworks:tin_sheet"
        }
    )
    event.shaped(
        'handcrafted:hammer',
        [
            " AB",
            " BA",
            "B  "
        ],
        {
            "A": 'minecraft:smooth_stone',
            "B": "minecraft:stick"
        }
    )
    event.recipes.shapeless(
        "create_ironworks:tin_sheet",
        [
            "create_ironworks:tin_ingot", 
            "handcrafted:hammer"
        ]
    ).keepIngredient("handcrafted:hammer")
})