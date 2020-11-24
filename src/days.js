import DIAMOND_ORE_TEXTURE from "./textures/diamond.png";
import GOLD_ORE_TEXTURE from "./textures/gold-ore.png";
import IRON_ORE_TEXTURE from "./textures/iron-ore.png";
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
    ...DEFAULT,
  },
  {
    day: 9,
    ...DEFAULT,
  },
  {
    day: 10,
    ...DEFAULT,
  },
  {
    day: 11,
    ...DEFAULT,
  },
  {
    day: 12,
    ...DEFAULT,
  },
  {
    day: 13,
    ...DEFAULT,
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
