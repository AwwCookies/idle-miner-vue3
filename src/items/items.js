/**
 * Represents an item object.
 * @typedef {object} ItemObject
 * @property {number} chance - The chance of finding the item, as a percentage.
 * @property {number} value - The value of the item, in units of currency.
 * @property {string} icon - The URL of the item's icon image.
 * @property {string} description - A description of the item.
 * @property {string} name - The name of the item.
 * @property {string} type - The type of the item.
 */
export const items = {
    copperOre: { name: 'Copper Ore', type: 'ore', chance: 15, value: 8, icon: '/imgs/ore/copper.png', description: `A rusty old piece of copper ore. Not worth much, but it'll do.` },
    goldOre: { name: 'Gold Ore', type: 'ore', chance: 10, value: 20, icon: '/imgs/ore/gold.png', description: `A chunk of shiny gold ore. This one's worth a pretty penny.` },
    silverOre: { name: 'Silver Ore', type: 'ore', chance: 10, value: 15, icon: '/imgs/ore/silver.png', description: `A gleaming chunk of silver ore. It's not worth as much as gold, but it'll still fetch a good price.` },
    coal: { name: 'Coal', type: 'ore', chance: 20, value: 2, icon: '/imgs/ore/steel.png', description: `A lump of black coal. It's not worth much, but it'll keep you warm on a cold night.` },
    ironOre: { name: 'Iron Ore', type: 'ore', chance: 20, value: 5, icon: '/imgs/ore/iron.png', description: `A heavy piece of iron ore. It's not worth a lot, but it's good for making sturdy tools.` },
    fossil: { name: 'Fossil', type: 'misc', chance: 10, value: 10, icon: '/imgs/misc/feather_red.png', description: `A mysterious fossil. Who knows what kind of creature this belonged to?` },
    onyx: { name: 'Onyx', type: 'gem', chance: 10, value: 5, icon: '/imgs/gems/onyx.png', description: `A small, black gemstone. It's not very valuable, but it looks nice.` },
    amethyst: { name: 'Amethyst', type: 'gem', chance: 5, value: 15, icon: '/imgs/gems/amethyst.png', description: `A beautiful purple gemstone. This one's worth a decent amount.` },
    topaz: { name: 'Topaz', type: 'gem', chance: 5, value: 15, icon: '/imgs/gems/topaz.png', description: `A bright yellow gemstone. It might not be as valuable as some of the others, but it sure is pretty.` },
    diamond: { name: 'Diamond', type: 'gem', chance: 5, value: 100, icon: '/imgs/gems/diamond.png', description: `A sparkling diamond. This is the real deal, and it's worth a small fortune.` },
    ruby: { name: 'Ruby', type: 'gem', chance: 3, value: 150, icon: '/imgs/gems/ruby.png', description: `A deep red gemstone. This one's worth a lot, and it's sure to catch someone's eye.` },
    emerald: { name: 'Emerald', type: 'gem', chance: 3, value: 150, icon: '/imgs/gems/emerald.png', description: `A bright green gemstone. This one's worth a pretty penny.` },
    sapphire: { name: 'Sapphire', type: 'gem', chance: 3, value: 150, icon: '/imgs/gems/sapphire.png', description: `A bright blue gemstone. This one's worth a decent amount.` },
    platinum: { name: 'Platinum', type: 'ore', chance: 5, value: 50, icon: '/imgs/ore/platinum.png', description: `A chunk of platinum. It's not worth as much as gold, but it's still pretty valuable.` },
    aquamarine: { name: 'Aquamarine', type: 'gem', chance: 5, value: 50, icon: '/imgs/gems/aquamarine.png', description: `A pale blue gemstone. This one's worth a fair amount.` },
    garnet: { name: 'Garnet', type: 'gem', chance: 3, value: 100, icon: '/imgs/gems/garnet.png', description: `A deep red gemstone. This one's worth a good amount.` },
    morganite: { name: 'Morganite', type: 'gem', chance: 3, value: 100, icon: '/imgs/gems/morganite.png', description: `A pinkish gemstone. This one's worth a good amount.` },
    geode: { name: 'Geode', type: 'ore', chance: 5, value: 25, icon: '/imgs/misc/geode.png', description: `A round rock that's full of crystals. It's not worth much, but it looks cool.` },
    artifact: { name: 'Artifact', type: 'artifact', chance: 3, value: 75, icon: '/imgs/misc/dragon_eye.png', description: `An ancient artifact that's covered in strange markings. It's worth a decent amount, and it might be of historical significance.` },
    treasureChest: { name: 'Treasure Chest', type: 'treasure', chance: 1, value: 1000, icon: '/imgs/misc/treasure_chest.png', description: `A large wooden chest that's filled with gold, gems, and other valuable treasures. This is the jackpot!` }
};

/**
 * Returns the item object that matches the specified name, regardless of case.
 * @param {string} name - The name of the item to look up.
 * @returns {ItemObject} - The item object that matches the specified name.
 * @throws {Error} - If no item with the specified name is found.
 */
export function getItemByName(name) {
    const key = Object.keys(items).find(
        k => k.toLowerCase() === name.toLowerCase()
    );
    if (!key) {
        throw new Error(`Item '${name}' not found.`);
    }
    return items[key];
}