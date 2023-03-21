export function getAchivements({inventory, stats, talents, gold}) {
    const achivements = [
        {
            name: "Example Achievement",
            description: "Example description",
            check: () => gold.get() >= 10,
        },
        {
            name: "Miner's Delight",
            description: "Collect 1000 pieces of ore.",
            check: () => inventory.getItemCount("Ore") >= 1000,
        },
        {
            name: "Gem Hunter",
            description: "Collect 500 gems.",
            check: () => inventory.getItemCount("Gem") >= 500,
        },
        {
            name: "Precious Metals",
            description: "Collect 100 pieces of precious metals.",
            check: () => inventory.getItemCount("Precious Metal") >= 100,
        },
        {
            name: "Coal Collector",
            description: "Collect 1000 pieces of coal.",
            check: () => inventory.getItemCount("Coal") >= 1000,
        },
        {
            name: "Fossil Finder",
            description: "Collect 50 fossils.",
            check: () => inventory.getItemCount("Fossil") >= 50,
        },
        {
            name: "Mineral Maven",
            description: "Collect 100 minerals.",
            check: () => inventory.getItemCount("Mineral") >= 100,
        },
        {
            name: "Rare Earths",
            description: "Collect 50 rare earth metals.",
            check: () => inventory.getItemCount("Rare Earth Metal") >= 50,
        },
        {
            name: "Geode Gatherer",
            description: "Collect 25 geodes.",
            check: () => inventory.getItemCount("Geode") >= 25,
        },
        {
            name: "Artifacts Galore",
            description: "Collect 10 artifacts.",
            check: () => inventory.getItemCount("Artifact") >= 10,
        },
        {
            name: "Treasure Trove",
            description: "Find 5 hidden treasure chests.",
            check: () => stats.treasureChestsFound >= 5,
        },
        {
            name: "Mining Novice",
            description: "Reach level 10 in mining efficiency talent.",
            check: () => talents.getMiningEfficiencyLevel() >= 10,
        },
        {
            name: "Mining Apprentice",
            description: "Reach level 25 in mining efficiency talent.",
            check: () => talents.getMiningEfficiencyLevel() >= 25,
        },
        {
            name: "Mining Master",
            description: "Reach level 50 in mining efficiency talent.",
            check: () => talents.getMiningEfficiencyLevel() >= 50,
        },
        {
            name: "Fast Miner",
            description: "Reach level 25 in speed mining talent.",
            check: () => talents.getSpeedMiningLevel() >= 25,
        },
        {
            name: "Pickaxe Pro",
            description: "Reach level 25 in pickaxe durability talent.",
            check: () => talents.getPickaxeDurabilityLevel() >= 25,
        },
        {
            name: "Geode Genius",
            description: "Reach level 25 in geode mastery talent.",
            check: () => talents.getGeodeMasteryLevel() >= 25,
        },
        {
            name: "Treasure Hunter Extraordinaire",
            description: "Reach level 25 in treasure hunter talent.",
            check: () => talents.getTreasureHunterLevel() >= 25,
        },
        {
            name: "Fossil Fanatic",
            description: "Reach level 25 in fossil expertise talent.",
            check: () => talents.getFossilExpertiseLevel() >= 25,
        },
        {
            name: "Gem Guru",
            description: "Reach level 25 in gemology talent.",
            check: () => talents.getGemologyLevel() >= 25,
        },
        {
            name: "Archaeology Ace",
            description: "Reach level 25 in archaeology talent.",
            check: () => talents.getArchaeologyLevel() >= 25,
        },
        {
            name: "Wealth Accumulator",
            description: "Reach a total wealth of 10,000 coins.",
            check: () => gold.get() >= 10000,
        },
        {
            name: "Expert Crafter",
            description: "Craft 50 items from the materials collected in the mine.",
            check: () => stats.itemsCrafted >= 50,
        },
        {
            name: "Mining Tycoon",
            description: "Reach a total wealth of 100,000 coins.",
            check: () => gold.get() >= 100000,
        },
        {
            name: "Geology Genius",
            description: "Collect at least one of every type of mineral.",
            check: () => inventory.hasAllMinerals(),
        },
        {
            name: "Rare Earth Expert",
            description: "Collect at least one of every type of rare earth metal.",
            check: () => inventory.hasAllRareEarthMetals(),
        },
        {
            name: "Gem Collector",
            description: "Collect at least one of every type of gem.",
            check: () => inventory.hasAllGems(),
        },
        {
            name: "Artifact Aficionado",
            description: "Collect at least one of every type of artifact.",
            check: () => inventory.hasAllArtifacts(),
        },
        {
            name: "Treasure Hunter Supreme",
            description: "Find 25 hidden treasure chests.",
            check: () => stats.treasureChestsFound >= 25,
        },
        {
            name: "Pickaxe Perfection",
            description: "Reach level 50 in pickaxe durability talent.",
            check: () => talents.getPickaxeDurabilityLevel() >= 50,
        },
        {
            name: "Super Speed Miner",
            description: "Reach level 50 in speed mining talent.",
            check: () => talents.getSpeedMiningLevel() >= 50,
        },
        {
            name: "Geode Guru",
            description: "Reach level 50 in geode mastery talent.",
            check: () => talents.getGeodeMasteryLevel() >= 50,
        },
        {
            name: "Treasure Hunter Champion",
            description: "Reach level 50 in treasure hunter talent.",
            check: () => talents.getTreasureHunterLevel() >= 50,
        },
        {
            name: "Fossil Fan",
            description: "Collect 100 fossils.",
            check: () => inventory.getItemCount("Fossil") >= 100,
        },
        {
            name: "Mineral Master",
            description: "Collect 500 minerals.",
            check: () => inventory.getItemCount("Mineral") >= 500,
        },
        {
            name: "Gemologist Extraordinaire",
            description: "Reach level 50 in gemology talent.",
            check: () => talents.getGemologyLevel() >= 50,
        },
        {
            name: "Archaeology Expert",
            description: "Collect 50 artifacts.",
            check: () => inventory.getItemCount("Artifact") >= 50,
        },
        {
            name: "Precious Metals Pro",
            description: "Collect 500 pieces of precious metals.",
            check: () => inventory.getItemCount("Precious Metal") >= 500,
        },
        {
            name: "Coal Connoisseur",
            description: "Collect 10,000 pieces of coal.",
            check: () => inventory.getItemCount("Coal") >= 10000,
        },
        {
            name: "Wealthy Baron",
            description: "Reach a total wealth of 1,000,000 coins.",
            check: () => gold.get() >= 1000000,
        },
        {
            name: "Mining Legend",
            description: "Reach the maximum level in all talents.",
            check: () => talents.isMaxLevel(),
        }
    ]

    return achivements;
}