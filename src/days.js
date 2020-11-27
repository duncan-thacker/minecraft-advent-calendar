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

const SAND_BLOCK = {
  title: "Sand",
  description:
    "Sand is a block affected by gravity. Sand can be broken without tools, but a shovel is the fastest method of obtaining it. Sand generates naturally in many biomes of the Overworld near lakes or ponds, notably deserts, beaches, and rivers, generally in four-block-deep layers supported by stone and sandstone. Sand also generates as the ocean floor of lukewarm oceans, warm oceans, and their respective deep variants. Sand can be used in the construction of airlocks and mob suffocation traps. Being affected by gravity, it can be quickly and easily removed from ground level. ",
  texture: SAND,
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
  description: "Iron ore is a mineral block found underground. It is smelted into iron ingots, which are used to make tools and armor. Iron ore must be mined with a stone pickaxe or higher, or else it drops nothing. Unlike most ores, iron ore always drops itself, regardless of whether the player used Silk Touch. Iron ore can generate in the Overworld in the form of mineral veins.",
  texture: IRON_ORE,
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

const CARVED_PUMPKIN_BLOCK = {
  title: "Carved Pumpkin",
  description:
    "A carved pumpkin is a carved version of a pumpkin that can be worn or used to spawn golems. It can be made by using shears on a pumpkin placed in the world. Zombies, zombie villagers, skeletons, wither skeletons, drowned, husks, strays, and zombified piglins have a chance of wearing a carved pumpkin if they spawn during Halloween (October 31). If a mob wearing a carved pumpkin is killed using a tool enchanted with Looting, there is a chance equivalent to the level of Looting used to drop the carved pumpkin, up to a maximum of a 3% chance of a drop. A carved pumpkin can be equipped as a helmet without any actual armor value.",
  texture: PUMPKIN_SIDE,
  textureTop: PUMPKIN_TOP,
  textureFront: PUMPKIN_FACE,
};

const OAK_PLANKS_BLOCK = {
  title: "Oak planks",
  description:
    "Planks are common blocks used in crafting recipes and are also the first thing that a player can craft in survival mode and adventure mode. Planks can be broken by hand, but using an axe speeds up the process. Oak planks generate as part of: Mineshafts, Plains villages, Strongholds, Woodland mansions, and Shipwrecks.",
  texture: OAK_PLANKS,
};

const DAYS = [
  {
    day: 22,
    title: "Gold ore",
    description:
      "Gold ore is one of the rarest types of mineral blocks found underground.",
    texture: GOLD_ORE,
  },
  {
    day: 6,
    ...CRAFTING_TABLE_BLOCK,
  },
  {
    day: 12,
    title: "Soul Sand",
    description: "Rough and irritating, gets everywhere",
    texture: SOUL_SAND,
  },
  {
    day: 17,
    title: "Lapis Lazuli ore",
    description: "Lapis ore is cool",
    texture: LAPIS_ORE,
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
    title: "TNT",
    description: "KABOOM!",
    texture: TNT_SIDE,
    textureTop: TNT_TOP,
    textureBottom: TNT_BOTTOM,
  },
  {
    day: 23,
    title: "Emerald ore",
    description: "Emerald is cool",
    texture: EMERALD_ORE,
  },
  {
    day: 5,
    ...COAL_ORE_BLOCK,
  },
  {
    day: 20,
    title: "Ancient Debris",
    description: "Ooooh Netherite!!!",
    texture: ANCIENT_DEBRIS_SIDE,
    textureTop: ANCIENT_DEBRIS_TOP,
    textureBottom: ANCIENT_DEBRIS_TOP,
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
    title: "Cake",
    description: "yum yum",
    texture: CAKE_SIDE,
    textureTop: CAKE_TOP,
    textureBottom: CAKE_BOTTOM,
    height: 0.6,
  },
  {
    day: 8,
    ...OAK_PLANKS_BLOCK,
  },
  {
    day: 15,
    title: "Bookshelf",
    description: "Read some books",
    texture: BOOKSHELF_SIDE,
    textureTop: OAK_PLANKS,
    textureBottom: OAK_PLANKS,
  },
  {
    day: 21,
    title: "Redstone ore",
    description: "Redstone is cool",
    texture: REDSTONE_ORE,
  },
  {
    day: 24,
    title: "Nether Gold ore",
    description:
      "Gold ore is one of the rarest types of mineral blocks found underground.",
    texture: NETHER_GOLD_ORE,
  },
  {
    day: 18,
    title: "Nether Quartz ore",
    description:
      "Gold ore is one of the rarest types of mineral blocks found underground.",
    texture: NETHER_QUARTZ_ORE,
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
    title: "Diamond Ore",
    description: "Stone! Made of cobble!",
    texture: DIAMOND_ORE,
  },
  {
    day: 14,
    title: "Cartography Table",
    description: "Make maps",
    texture: CARTOGRAPHY_TABLE_SIDE3,
    textureTop: CARTOGRAPHY_TABLE_TOP,
    textureBottom: CARTOGRAPHY_TABLE_SIDE3,
    textureFront: CARTOGRAPHY_TABLE_SIDE1,
    textureLeft: CARTOGRAPHY_TABLE_SIDE2,
  },
  {
    day: 11,
    title: "Prismarine",
    description: "Prismarine",
    texture: PRISMARINE,
    isAnimated: true,
  },
];

export default DAYS;
