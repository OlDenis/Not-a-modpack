# This scripts aim to generate a json file that contains 
# the mapping of duplicate names items to their new names
# the json file generated can then be added to the Rename
# Compat Project

import json, os
def new_dir(directory_name):
    try:
        os.mkdir(directory_name)
        print(f"Directory '{directory_name}' created successfully.")
    except FileExistsError:
        print(f"Directory '{directory_name}' already exists.")
    except PermissionError:
        print(f"Permission denied: Unable to create '{directory_name}'.")
    except Exception as e:
        print(f"An error occurred: {e}")

def build_dir(path):
    folder_list = path.split('/')
    current_path = ''
    for folder in folder_list:
        current_path += folder + '/'
        if not os.path.exists(current_path):
            new_dir(current_path)
            

# path of the folder where the json file will be created
path = r'C:\Users\olivi\AppData\Roaming\ModrinthApp\profiles\Not a Modpack\resourcepacks\Not-RCP-1.2\assets'

"""
RPG series renames
Unique weapons :
'longsword','twinblades','rapier',
'katana','sai','warglaive','cutlass',
'greataxe','chakram','scythe','halberd'

Should be removed : 
'simplyswords:spear',
"""
# materials
materials = [
    'wooden',
    'stone',
    'iron',
    'golden',
    'diamond',
    'netherite',
    'aether'
]

# weapons
weapons = {
    'paladins': [ # From paladins n priests
        'claymore',
        'great_hammer',
    ],
    'rogues': [ # From rogues n warriors
        'glaive'
    ]
}

names = {
    'paladins': "Paladin",
    'rogues': "Warrior",
}

for mod, weapons_list in weapons.items():
    mod_dict = {}
    for weapon in weapons_list:
        for material in materials:
            key = f'item.{mod}.{material}_{weapon}'
            value = f'{material.capitalize()} {names[mod]} {weapon.replace("_", " ").title()}'
            mod_dict[key] = value
    build_dir(f'{path}/{mod}/lang')
    with open(f'{path}/{mod}/lang/en_us.json', 'w') as f:
        json.dump(mod_dict, f, indent=4)

"""
Create: Ironworks renames
"""
mod = 'create_ironworks'
# Rose Quartz rename
ironworks_dict = {
    "block.create_ironworks.rose_quartz_block": "Rose Quartz Sheet Block"
}

# Industrial steel
ironworks_dict["block.create_ironworks.steel_block"] = "Industrial Steel Block"
# armor pieces
armor = [
    'helmet',
    'chestplate',
    'leggings',
    'boots'
]

tools = [
    'pickaxe',
    'axe',
    'shovel',
    'sword',
    'hoe',
    'hammer',
    'paxel'
]

items = [
    'ingot',
    'nugget',
    'sheet'
]
# add tools and armor pieces to the items list
items += tools
for piece in armor:
    items.append(f'armor_{piece}')

# add the items to the dictionary
for item in items:
    ironworks_dict[f'item.create_ironworks.steel_{item}'] = f'Industrial Steel {item.replace("armor_", "").title()}'

# write the dict to a json file
build_dir(f'{path}/{mod}/lang')
with open(f'{path}/{mod}/lang/en_us.json', 'w') as f:
    json.dump(ironworks_dict, f, indent=4)
