import DIAMOND_ORE_TEXTURE from "./textures/diamond.png";
import GOLD_ORE_TEXTURE from "./textures/gold-ore.png";
import IRON_ORE_TEXTURE from "./textures/iron-ore.png";
import COAL_ORE_TEXTURE from "./game-textures/coal_ore.png";
import EMERALD_ORE_TEXTURE from "./game-textures/emerald_ore.png";
import LAPIS_ORE_TEXTURE from "./textures/lapis-ore.png";
import REDSTONE_ORE_TEXTURE from "./textures/redstone-ore.png";
import DIRT_GRASS_TEXTURE from "./textures/dirt-grass.jpg";
import DIRT_BOTTOM_TEXTURE from "./textures/dirt-bottom.png";
import DIRT_GRASS_TOP_TEXTURE from "./textures/dirt-grass-top.jpg";
import PUMPKIN_TOP_TEXTURE from "./textures/pumpkin-top.png";
import PUMPKIN_SIDE_TEXTURE from "./textures/pumpkin-side.png";
import PUMPKIN_FACE_TEXTURE from "./textures/pumpkin-face.png";
import TNT_TOP_TEXTURE from "./textures/tnt-top.png";
import TNT_SIDE_TEXTURE from "./textures/tnt-side.png";
import TNT_BOTTOM_TEXTURE from "./textures/tnt-bottom.png";
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

const DEFAULT = {
  title: "Diamond Ore",
  description:
    "Planks are common blocks used in crafting recipes and are also the first thing that a player can craft in survival mode and adventure mode. Two categories of planks can be differentiated: flammable Overworld Planks made from tree logs, and nonflammable Nether Planks made from fungi stems.",
  texture: DIAMOND_ORE_TEXTURE,
};

const DAYS = [
  {
    day: 1,
    title: "Dirt with grass",
    description:
      "Planks are common blocks used in crafting recipes and are also the first thing that a player can craft in survival mode and adventure mode. Two categories of planks can be differentiated: flammable Overworld Planks made from tree logs, and nonflammable Nether Planks made from fungi stems.",
    texture: DIRT_GRASS_TEXTURE,
    textureTop: DIRT_GRASS_TOP_TEXTURE,
    textureBottom: DIRT_BOTTOM_TEXTURE,
  },
  {
    day: 2,
    title: "Gold ore",
    description:
      "Gold ore is one of the rarest types of mineral blocks found underground.",
    texture: GOLD_ORE_TEXTURE,
  },
  {
    day: 3,
    title: "Iron ore",
    description: "Iron ore is cool",
    texture: IRON_ORE_TEXTURE,
  },
  {
    day: 4,
    title: "Lapis Lazuli ore",
    description: "Lapis ore is cool",
    texture: LAPIS_ORE_TEXTURE,
  },
  {
    day: 5,
    title: "Redstone ore",
    description: "Redstone is cool",
    texture: REDSTONE_ORE_TEXTURE,
  },
  {
    day: 6,
    title: "Carved Pumpkin",
    description: "Spoooopy",
    texture: PUMPKIN_SIDE_TEXTURE,
    textureTop: PUMPKIN_TOP_TEXTURE,
    textureFront: PUMPKIN_FACE_TEXTURE,
  },
  {
    day: 7,
    title: "TNT",
    description: "KABOOM!",
    texture: TNT_SIDE_TEXTURE,
    textureTop: TNT_TOP_TEXTURE,
    textureBottom: TNT_BOTTOM_TEXTURE,
  },
  {
    day: 8,
    title: "Emerald ore",
    description: "Emerald is cool",
    texture: EMERALD_ORE_TEXTURE,
  },
  {
    day: 9,
    title: "Coal ore",
    description: "Coal is cool",
    texture: COAL_ORE_TEXTURE,
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
    ...DEFAULT,
  },
  {
    day: 15,
    ...DEFAULT,
  },
  {
    day: 16,
    ...DEFAULT,
  },
  {
    day: 17,
    ...DEFAULT,
  },
  {
    day: 18,
    ...DEFAULT,
  },
  {
    day: 19,
    ...DEFAULT,
  },
  {
    day: 20,
    ...DEFAULT,
  },
  {
    day: 21,
    ...DEFAULT,
  },
  {
    day: 22,
    ...DEFAULT,
  },
  {
    day: 23,
    ...DEFAULT,
  },
  {
    day: 24,
    ...DEFAULT,
  },
];

export default DAYS;
