import DIAMOND_ORE_TEXTURE from "./textures/diamond.png";
import DIRT_GRASS_TEXTURE from "./textures/dirt-grass.jpg";
import DIRT_BOTTOM_TEXTURE from "./textures/dirt-bottom.png";
import DIRT_GRASS_TOP_TEXTURE from "./textures/dirt-grass-top.jpg";

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
    ...DEFAULT,
  },
  {
    day: 3,
    ...DEFAULT,
  },
  {
    day: 4,
    ...DEFAULT,
  },
  {
    day: 5,
    ...DEFAULT,
  },
  {
    day: 6,
    ...DEFAULT,
  },
  {
    day: 7,
    ...DEFAULT,
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
    day: 23,
    ...DEFAULT,
  },
  {
    day: 24,
    ...DEFAULT,
  },
];

export default DAYS;