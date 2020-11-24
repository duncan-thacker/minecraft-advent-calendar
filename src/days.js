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
import BEACON from "./game-textures/beacon.png";
import CARTOGRAPHY_TABLE_SIDE1 from "./game-textures/cartography_table_side1.png";
import CARTOGRAPHY_TABLE_SIDE2 from "./game-textures/cartography_table_side2.png";
import CARTOGRAPHY_TABLE_SIDE3 from "./game-textures/cartography_table_side3.png";
import CARTOGRAPHY_TABLE_TOP from "./game-textures/cartography_table_top.png";
import PRISMARINE from "./game-textures/prismarine.png";

const DEFAULT = {
  title: "Diamond Ore",
  description:
    "Planks are common blocks used in crafting recipes and are also the first thing that a player can craft in survival mode and adventure mode. Two categories of planks can be differentiated: flammable Overworld Planks made from tree logs, and nonflammable Nether Planks made from fungi stems.",
  texture: DIAMOND_ORE,
};

const DAYS = [
  {
    day: 1,
    title: "Dirt with grass",
    description:
      "Planks are common blocks used in crafting recipes and are also the first thing that a player can craft in survival mode and adventure mode. Two categories of planks can be differentiated: flammable Overworld Planks made from tree logs, and nonflammable Nether Planks made from fungi stems.",
    texture: DIRT_GRASS,
    textureTop: DIRT_GRASS_TOP,
    textureBottom: DIRT_BOTTOM,
  },
  {
    day: 2,
    title: "Gold ore",
    description:
      "Gold ore is one of the rarest types of mineral blocks found underground.",
    texture: GOLD_ORE,
  },
  {
    day: 3,
    title: "Iron ore",
    description: "Iron ore is cool",
    texture: IRON_ORE,
  },
  {
    day: 4,
    title: "Lapis Lazuli ore",
    description: "Lapis ore is cool",
    texture: LAPIS_ORE,
  },
  {
    day: 5,
    title: "Redstone ore",
    description: "Redstone is cool",
    texture: REDSTONE_ORE,
  },
  {
    day: 6,
    title: "Carved Pumpkin",
    description: "Spoooopy",
    texture: PUMPKIN_SIDE,
    textureTop: PUMPKIN_TOP,
    textureFront: PUMPKIN_FACE,
  },
  {
    day: 7,
    title: "TNT",
    description: "KABOOM!",
    texture: TNT_SIDE,
    textureTop: TNT_TOP,
    textureBottom: TNT_BOTTOM,
  },
  {
    day: 8,
    title: "Emerald ore",
    description: "Emerald is cool",
    texture: EMERALD_ORE,
  },
  {
    day: 9,
    title: "Coal ore",
    description: "Coal is cool",
    texture: COAL_ORE,
  },
  {
    day: 10,
    title: "Ancient Debris",
    description: "Ooooh Netherite!!!",
    texture: ANCIENT_DEBRIS_SIDE,
    textureTop: ANCIENT_DEBRIS_TOP,
    textureBottom: ANCIENT_DEBRIS_TOP,
  },
  {
    day: 11,
    title: "Oak Log",
    description: "Chop it with an axe!",
    texture: OAK_LOG_SIDE,
    textureTop: OAK_LOG_TOP,
    textureBottom: OAK_LOG_TOP,
  },
  {
    day: 12,
    title: "Crafting Table",
    description: "Make stuff",
    texture: CRAFTING_TABLE_SIDE,
    textureTop: CRAFTING_TABLE_TOP,
    textureBottom: CRAFTING_TABLE_TOP,
    textureFront: CRAFTING_TABLE_FRONT,
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
    day: 14,
    title: "Bookshelf",
    description: "Read some books",
    texture: BOOKSHELF_SIDE,
    textureTop: OAK_PLANKS,
    textureBottom: OAK_PLANKS,
  },
  {
    day: 15,
    title: "Oak planks",
    description: "Make stuff!",
    texture: OAK_PLANKS,
  },
  {
    day: 16,
    title: "Dirt with smow",
    description:
      "Planks are common blocks used in crafting recipes and are also the first thing that a player can craft in survival mode and adventure mode. Two categories of planks can be differentiated: flammable Overworld Planks made from tree logs, and nonflammable Nether Planks made from fungi stems.",
    texture: DIRT_SNOW_SIDE,
    textureTop: SNOW_TOP,
    textureBottom: DIRT_BOTTOM,
  },
  {
    day: 17,
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
    day: 19,
    title: "Sand",
    description: "Rough and irritating, gets everywhere",
    texture: SAND,
  },
  {
    day: 20,
    title: "Soul Sand",
    description: "Rough and irritating, gets everywhere",
    texture: SOUL_SAND,
  },
  {
    day: 21,
    title: "Cobblestone",
    description: "Stone! Made of cobble!",
    texture: COBBLESTONE,
  },
  {
    day: 22,
    title: "Beacon",
    description: "Stone! Made of cobble!",
    texture: BEACON,
  },
  {
    day: 23,
    title: "Cartography Table",
    description: "Make maps",
    texture: CARTOGRAPHY_TABLE_SIDE3,
    textureTop: CARTOGRAPHY_TABLE_TOP,
    textureBottom: CARTOGRAPHY_TABLE_SIDE3,
    textureFront: CARTOGRAPHY_TABLE_SIDE1,
    textureLeft: CARTOGRAPHY_TABLE_SIDE2,
  },
  {
    day: 24,
    title: "Prismarine",
    description: "Prismarine",
    texture: PRISMARINE,
    isAnimated: true,
  },
];

export default DAYS;
