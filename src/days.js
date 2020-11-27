import DIAMOND_ORE from "./textures/diamond.png";
import GOLD_ORE from "./textures/gold-ore.png";
import IRON_ORE from "./textures/iron-ore.png";
import COAL_ORE from "./game-textures/coal_ore.png";
import NETHER_QUARTZ_ORE from "./game-textures/nether_quartz_ore.png";
import NETHER_GOLD_ORE from "./game-textures/nether_gold_ore.png";
import EMERALD_ORE from "./game-textures/emerald_ore.png";
import LAPIS_ORE from "./textures/lapis-ore.png";
import REDSTONE_ORE from "./textures/redstone-ore.png";
import DIRT_SNOW_SIDE from "./game-textures/grass_block_snow.png";
import SNOW_TOP from "./game-textures/snow.png";
import DIRT_GRASS from "./textures/dirt-grass.jpg";
import DIRT_BOTTOM from "./textures/dirt-bottom.png";
import SAND from "./game-textures/sand.png";
import SOUL_SAND from "./game-textures/soul_sand.png";
import DIRT_GRASS_TOP from "./textures/dirt-grass-top.jpg";
import PUMPKIN_TOP from "./textures/pumpkin-top.png";
import PUMPKIN_SIDE from "./textures/pumpkin-side.png";
import PUMPKIN_FACE from "./textures/pumpkin-face.png";
import TNT_TOP from "./textures/tnt-top.png";
import TNT_SIDE from "./textures/tnt-side.png";
import TNT_BOTTOM from "./textures/tnt-bottom.png";
import ANCIENT_DEBRIS_TOP from "./game-textures/ancient_debris_top.png";
import ANCIENT_DEBRIS_SIDE from "./game-textures/ancient_debris_side.png";
import OAK_LOG_SIDE from "./game-textures/oak_log.png";
import OAK_LOG_TOP from "./game-textures/oak_log_top.png";
import CRAFTING_TABLE_TOP from "./game-textures/crafting_table_top.png";
import CRAFTING_TABLE_SIDE from "./game-textures/crafting_table_side.png";
import CRAFTING_TABLE_FRONT from "./game-textures/crafting_table_front.png";
import CAKE_SIDE from "./game-textures/cake_side.png";
import CAKE_TOP from "./game-textures/cake_top.png";
import CAKE_BOTTOM from "./game-textures/cake_bottom.png";
import BOOKSHELF_SIDE from "./game-textures/bookshelf.png";
import OAK_PLANKS from "./game-textures/oak_planks.png";
import COBBLESTONE from "./game-textures/cobblestone.png";
import CARTOGRAPHY_TABLE_SIDE1 from "./game-textures/cartography_table_side1.png";
import CARTOGRAPHY_TABLE_SIDE2 from "./game-textures/cartography_table_side2.png";
import CARTOGRAPHY_TABLE_SIDE3 from "./game-textures/cartography_table_side3.png";
import CARTOGRAPHY_TABLE_TOP from "./game-textures/cartography_table_top.png";
import PRISMARINE from "./game-textures/prismarine.png";

const DIRT_WITH_GRASS_BLOCK = {
  title: "Grass Block",
  description:
    "A grass block is a natural block that generates abundantly across the surface of the Overworld. Grass blocks generate naturally in most biomes in the Overworld and as part of villages. Grass can spread to nearby dirt blocks, but not coarse dirt. Grass spreading without player intervention depends heavily on the time of day. The coloration of grass blocks is dependent on the biome they are in. A grass block always uses the color set to its location, regardless of how it was placed or of its source. Passive mobs tend to wander toward grass blocks - they also wander toward light.",
  texture: DIRT_GRASS,
  textureTop: DIRT_GRASS_TOP,
  textureBottom: DIRT_BOTTOM,
};

const DIRT_WITH_SNOW_BLOCK = {
  title: "Dirt with snow",
  description:
    "Snow is a ground cover block that is commonly caused by snowfall. Snow can be obtained using a shovel with the Silk Touch enchantment. Destroying snow with a non-silk-touch shovel yields one snowball per layer. If it is destroyed with anything other than a shovel, nothing is dropped (even if using a different Silk Touch tool). Explosions by TNT or creepers will also cause snow to yield a snowball. Snow naturally generates in snowy biomes – snowy tundra, ice spikes, frozen oceans, snowy taiga, frozen river and snowy beach – and in the mountains biome at high altitudes.",
  texture: DIRT_SNOW_SIDE,
  textureTop: SNOW_TOP,
  textureBottom: DIRT_BOTTOM,
};

const COBBLESTONE_BLOCK = {
  title: "Cobblestone",
  description:
    "Cobblestone is a common block, obtained from mining stone. Its texture resembles block of stone with a largely cracked surface. It is mainly used for crafting or as building block. Cobblestone requires a pickaxe to be mined, in which case it drops itself. If mined without a pickaxe, then the mining is slower and it drops nothing. Its hardness is greater than stone so it requires more time to break. Cobblestone occurs naturally in dungeons, jungle temples, pillager outposts, underwater ruins, strongholds, and woodland mansions. Cobblestone generates in all types of villages except desert. Silverfish can enter and hide in cobblestone, creating an infested block.",
  texture: COBBLESTONE,
};

const PRISMARINE_BLOCK = {
  title: "Prismarine",
  description:
    "Prismarine is a type of stone that appears underwater in ruins and ocean monuments. It periodically changes color between blue and green. Prismarine only drops itself when mined with a pickaxe. If mined by any other tool, it drops nothing. All types of prismarine naturally generate as the main blocks making up ocean monuments. Normal prismarine and its bricks are found in large amounts due to the size of the structure. Prismarine can be used for decoration or as a high blast resistance building block.",
  texture: PRISMARINE,
  isAnimated: true,
};

const ANCIENT_DEBRIS_BLOCK = {
  title: "Ancient Debris",
  description:
    "Ancient debris is an extremely rare ore found in the Nether, and is the main source of netherite scraps. Its high blast resistance makes it immune to normal explosions. In item form, it floats on lava and cannot be burned by any form of fire. Ancient debris generates in the Nether in the form of mineral veins. Ancient debris never generates naturally exposed to air and can replace only netherrack, basalt, and blackstone. Ancient debris drops as an item if mined by a diamond or netherite pickaxe. If mined by any other tool, it drops nothing. Ancient Debris can be smelted into Netherite Scrap using a furnace or blast furnace.",
  texture: ANCIENT_DEBRIS_SIDE,
  textureTop: ANCIENT_DEBRIS_TOP,
  textureBottom: ANCIENT_DEBRIS_TOP,
};

const SAND_BLOCK = {
  title: "Sand",
  description:
    "Sand is a block affected by gravity. Sand can be broken without tools, but a shovel is the fastest method of obtaining it. Sand generates naturally in many biomes of the Overworld near lakes or ponds, notably deserts, beaches, and rivers, generally in four-block-deep layers supported by stone and sandstone. Sand also generates as the ocean floor of lukewarm oceans, warm oceans, and their respective deep variants. Sand can be used in the construction of airlocks and mob suffocation traps. Being affected by gravity, it can be quickly and easily removed from ground level. ",
  texture: SAND,
};

const SOUL_SAND_BLOCK = {
  title: "Soul Sand",
  description:
    "Soul sand is a block found naturally only in the Nether. Soul sand usually slows down the movement of mobs and players standing on it. It is also used for growing nether wart and for constructing a Wither. Soul sand can generate in the Nether in the form of mineral veins. Soul sand can be mined with any tool (or none), but shovels are the quickest. Soul sand slows the movement of any mob or player and causes them to sink 2 pixels into the block while walking on it.",
  texture: SOUL_SAND,
};

const OAK_LOG_BLOCK = {
  title: "Oak Log",
  description:
    "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used to create planks. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped. A stripped log or stripped stem is a variant obtained by using an axe on a log or a stem respectively. Logs and stems can be broken by hand, but using an axe speeds up the process. Logs drop themselves when broken with any tool. Oak logs generate as part of houses in plains villages, and as supporting beams of swamp huts. Using an axe on a log or stem turns it into a stripped log or a stripped stem, which act the same as regular logs.",
  texture: OAK_LOG_SIDE,
  textureTop: OAK_LOG_TOP,
  textureBottom: OAK_LOG_TOP,
};

const COAL_ORE_BLOCK = {
  title: "Coal ore",
  description:
    "Coal ore is a mineral block that drops coal when mined. Coal ore can generate in the Overworld in the form of mineral veins. Coal ore is also found in small amounts alongside underground fossils. Coal ore must be mined with any pickaxe, or else it drops nothing. If mined with a pickaxe, coal ore drops 1 coal (or more with Fortune).",
  texture: COAL_ORE,
};

const IRON_ORE_BLOCK = {
  title: "Iron ore",
  description:
    "Iron ore is a mineral block found underground. It is smelted into iron ingots, which are used to make tools and armor. Iron ore must be mined with a stone pickaxe or higher, or else it drops nothing. Unlike most ores, iron ore always drops itself, regardless of whether the player used Silk Touch. Iron ore can generate in the Overworld in the form of mineral veins.",
  texture: IRON_ORE,
};

const REDSTONE_ORE_BLOCK = {
  title: "Redstone ore",
  description:
    "Redstone ore is the ore block from which redstone is obtained. Redstone ore can generate in the Overworld in the form of mineral veins. Redstone ore can be mined with an iron pickaxe or higher, or it drops nothing. Redstone ore produces light and red particles when clicked, updated, or contacted by any mob (exceptions being a sneaking player and spiders).",
  texture: REDSTONE_ORE,
};

const GOLD_ORE_BLOCK = {
  title: "Gold ore",
  description:
    "Gold ore is one of the rarest types of mineral blocks found underground. Gold ore can generate in the Overworld in the form of mineral veins. Gold ore drops as an item if mined by an iron pickaxe or higher. If mined by any other tool, it drops nothing. Unlike most ores, gold ore does not require Silk Touch to be obtained, and instead always drops itself. Piglins become hostile toward players who mine gold ore, even if the player is wearing golden armor. Piglins also run toward any gold ores on the ground, and inspect it for 6 to 8 seconds before putting it in their inventory.",
  texture: GOLD_ORE,
};

const LAPIS_LAZULI_ORE_BLOCK = {
  title: "Lapis Lazuli ore",
  description:
    "Lapis lazuli ore is the ore block from which lapis lazuli is obtained. Lapis lazuli ore can generate in the Overworld in the form of mineral veins. Lapis lazuli ore can be mined with a stone pickaxe or higher. To obtain the block itself, the player must use Silk Touch; otherwise, the block drops several lapis lazuli. When mined with a Fortune enchanted pickaxe, there is a chance for the drops to be multiplied by between 2 and the level plus 1, up to a maximum of 2 to 4 at level III (for a maximum of 36 lapis lazuli dropped).",
  texture: LAPIS_ORE,
};

const EMERALD_ORE_BLOCK = {
  title: "Emerald ore",
  description:
    "Emerald ore is the rarest mineral block in the game. It drops emeralds when mined, or itself if mined with a pickaxe with the Silk Touch enchantment. Emerald ore can be mined with an iron pickaxe or higher. Otherwise it drops nothing. Emerald ore can generate in Overworld in the form of mineral veins.",
  texture: EMERALD_ORE,
};

const DIAMOND_ORE_BLOCK = {
  title: "Diamond Ore",
  description:
    "Diamond ore is a rare ore that generates deep underground, and is the only reliable source of diamonds. Diamond ore can generate in the Overworld in the form of mineral veins. The diamond ore block itself (rather than its diamond drops) can be obtained by mining it with an iron, diamond or netherite pickaxe with the Silk Touch enchantment. When mined without Silk Touch, diamond ore drops a single diamond. The maximum amount of diamonds dropped can be increased with the Fortune enchantment.",
  texture: DIAMOND_ORE,
};

const NETHER_QUARTZ_ORE_BLOCK = {
  title: "Nether Quartz ore",
  description:
    "Nether quartz ore is ore found in the Nether, and is a source of quartz. Nether quartz ore can generate in the Nether in the form of mineral veins. Nether quartz ore can be mined with any pickaxe, or it drops nothing. If mined with Silk Touch, the block drops itself. Otherwise, it drops 1 nether quartz (or more with the Fortune enchantment). ",
  texture: NETHER_QUARTZ_ORE,
};

const NETHER_GOLD_ORE_BLOCK = {
  title: "Nether Gold ore",
  description:
    "Nether gold ore is a variant of gold ore found only in the Nether. Nether gold ore generates in the Nether in the form of mineral veins. Nether gold ore requires a pickaxe to be mined. Nether gold ore drops 2-6 gold nuggets when mined with any pickaxe.",
  texture: NETHER_GOLD_ORE,
};

const CRAFTING_TABLE_BLOCK = {
  title: "Crafting Table",
  description:
    "A crafting table allows the player to craft a variety of blocks and items. Crafting tables naturally generate in witch huts and the basement of igloos. Crafting tables generate in woolen tents outside pillager outposts and in some small village houses. Pressing use on a crafting table opens the 3×3 crafting grid that allows the player to craft many more items than are available with the crafting grid in the inventory, which is only 2×2. A crafting table can be used to repair damaged tools, weapons, and armor. When two damaged items of the same material are combined side-by-side in the crafting grid they produce a new item with the sum of the durabilities plus a 5% bonus, with a maximum total of 100% durability for that item. Using this method does not require any experience, but removes any enchantments on either or both items.",
  texture: CRAFTING_TABLE_SIDE,
  textureTop: CRAFTING_TABLE_TOP,
  textureBottom: CRAFTING_TABLE_TOP,
  textureFront: CRAFTING_TABLE_FRONT,
};

const CARTOGRAPHY_TABLE_BLOCK = {
  title: "Cartography Table",
  description:
    "A cartography table is a cartographer's job site block that generates in villages. It is used for cloning, zooming out and locking maps. A cartography table can be obtained with any tool, including the player's hand, although using an axe is most efficient. Cartography tables can generate naturally inside cartographer houses in villages. Cartography tables can also be used for adding pointers to maps, creating empty maps and renaming maps.‌",
  texture: CARTOGRAPHY_TABLE_SIDE3,
  textureTop: CARTOGRAPHY_TABLE_TOP,
  textureBottom: CARTOGRAPHY_TABLE_SIDE3,
  textureFront: CARTOGRAPHY_TABLE_SIDE1,
  textureLeft: CARTOGRAPHY_TABLE_SIDE2,
};

const BOOKSHELF_BLOCK = {
  title: "Bookshelf",
  description:
    "Bookshelves are decorative blocks that primarily serve to enhance enchanting with an enchanting table. Bookshelves can be broken fairly easily by hand, but can be broken faster by using an axe. In either case, they drop 3 books when broken, allowing the reconstruction of the bookshelf with the addition of six wood planks. Bookshelves generate in village libraries, some village houses, strongholds and woodland mansions. Having bookshelves in the proper position near the table allows the table to apply higher-level enchantments.",
  texture: BOOKSHELF_SIDE,
  textureTop: OAK_PLANKS,
  textureBottom: OAK_PLANKS,
};

const CARVED_PUMPKIN_BLOCK = {
  title: "Carved Pumpkin",
  description:
    "A carved pumpkin is a carved version of a pumpkin that can be worn or used to spawn golems. It can be made by using shears on a pumpkin placed in the world. Zombies, zombie villagers, skeletons, wither skeletons, drowned, husks, strays, and zombified piglins have a chance of wearing a carved pumpkin if they spawn during Halloween (October 31). If a mob wearing a carved pumpkin is killed using a tool enchanted with Looting, there is a chance equivalent to the level of Looting used to drop the carved pumpkin, up to a maximum of a 3% chance of a drop. A carved pumpkin can be equipped as a helmet without any actual armor value.",
  texture: PUMPKIN_SIDE,
  textureTop: PUMPKIN_TOP,
  textureFront: PUMPKIN_FACE,
};

const CAKE_BLOCK = {
  title: "Cake",
  description:
    "Cake is a food block that can be eaten by the player. Once the cake is placed, it cannot be recollected even with the use of Silk Touch. Unlike most food, cake cannot be eaten as an item in the hotbar. Before being eaten, it must first be placed on top of a solid block. Some pandas move toward a dropped cake to pick up and eat it. Some may not, depending on the cake's location.",
  texture: CAKE_SIDE,
  textureTop: CAKE_TOP,
  textureBottom: CAKE_BOTTOM,
  height: 0.6,
};

const OAK_PLANKS_BLOCK = {
  title: "Oak planks",
  description:
    "Planks are common blocks used in crafting recipes and are also the first thing that a player can craft in survival mode and adventure mode. Planks can be broken by hand, but using an axe speeds up the process. Oak planks generate as part of: Mineshafts, Plains villages, Strongholds, Woodland mansions, and Shipwrecks.",
  texture: OAK_PLANKS,
};

const TNT_BLOCK = {
  title: "TNT",
  description:
    "TNT is an explosive block that can be primed to generate an explosion. TNT can be broken instantly with any tool, or without a tool. TNT blocks can be activated by: using a flint and steel or a fire charge, using any item enchanted with Fire Aspect, a powered redstone current, being hit with any flaming projectile, coming into contact with fire or lava, or being in the blast radius of a nearby explosion.",
  texture: TNT_SIDE,
  textureTop: TNT_TOP,
  textureBottom: TNT_BOTTOM,
};

const DAYS = [
  {
    day: 22,
    ...NETHER_GOLD_ORE_BLOCK,
  },
  {
    day: 6,
    ...CRAFTING_TABLE_BLOCK,
  },
  {
    day: 12,
    ...SOUL_SAND_BLOCK,
  },
  {
    day: 17,
    ...LAPIS_LAZULI_ORE_BLOCK,
  },
  {
    day: 3,
    ...SAND_BLOCK,
  },
  {
    day: 9,
    ...DIRT_WITH_SNOW_BLOCK,
  },
  {
    day: 19,
    ...TNT_BLOCK,
  },
  {
    day: 23,
    ...EMERALD_ORE_BLOCK,
  },
  {
    day: 5,
    ...COAL_ORE_BLOCK,
  },
  {
    day: 20,
    ...ANCIENT_DEBRIS_BLOCK,
  },
  {
    day: 1,
    ...DIRT_WITH_GRASS_BLOCK,
  },
  {
    day: 4,
    ...OAK_LOG_BLOCK,
  },
  {
    day: 13,
    ...REDSTONE_ORE_BLOCK,
  },
  {
    day: 8,
    ...OAK_PLANKS_BLOCK,
  },
  {
    day: 15,
    ...PRISMARINE_BLOCK,
  },
  {
    day: 21,
    ...BOOKSHELF_BLOCK,
  },
  {
    day: 24,
    ...DIAMOND_ORE_BLOCK,
  },
  {
    day: 18,
    ...NETHER_QUARTZ_ORE_BLOCK,
  },
  {
    day: 7,
    ...CARVED_PUMPKIN_BLOCK,
  },
  {
    day: 2,
    ...COBBLESTONE_BLOCK,
  },
  {
    day: 10,
    ...IRON_ORE_BLOCK,
  },
  {
    day: 16,
    ...GOLD_ORE_BLOCK,
  },
  {
    day: 14,
    ...CARTOGRAPHY_TABLE_BLOCK,
  },
  {
    day: 11,
    ...CAKE_BLOCK,
  },
];

export default DAYS;
