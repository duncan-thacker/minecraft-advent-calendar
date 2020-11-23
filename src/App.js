import React, { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import DayWindow from "./DayWindow";
import { useLocalStorage } from "react-use";
import DIAMOND_TEXTURE_URL from "./textures/diamond.png";
import MinecraftBlock from "./MinecraftBlock";

const DAYS = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];

function DayModal({ dayNumber, onClose }) {
  const isVisible = Boolean(dayNumber);
  const modal = (
    <div
      style={{
        position: "fixed",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease-in-out",
        pointerEvents: isVisible ? "all" : "none",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1200,
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          inset: 0,
          zIndex: 400,
        }}
      />
      <div
        style={{
          color: "#fff",
          position: "absolute",
          inset: 0,
          padding: "10vw",
          zIndex: 500,
          fontSize: "180%",
        }}
      >
        <h2 style={{ fontSize: "400%", margin: "8px 0" }}>Oak planks</h2>
        <p>
          Planks are common blocks used in crafting recipes and are also the
          first thing that a player can craft in survival mode and adventure
          mode. Two categories of planks can be differentiated: flammable
          Overworld Planks made from tree logs, and nonflammable Nether Planks
          made from fungi stems.
        </p>
        <MinecraftBlock textureLocation={DIAMOND_TEXTURE_URL} />
      </div>
    </div>
  );
  return createPortal(modal, document.body);
}

export default function App() {
  const [openWindows = [], setOpenWindows, clearWindowState] = useLocalStorage(
    "minecraft-open-windows",
    []
  );

  const [blockModal, setBlockModal] = useState(0);

  const currentDayNumber = 10; //TODO get real number
  const handleWindowOpen = useCallback(
    (dayNumber) => {
      setBlockModal(dayNumber);
      setOpenWindows([...openWindows, dayNumber]);
    },
    [setOpenWindows, openWindows]
  );

  console.log(openWindows);
  return (
    <>
      <button onClick={clearWindowState} style={{ position: "absolute" }}>
        Clear
      </button>
      <DayModal dayNumber={blockModal} onClose={() => setBlockModal(false)} />
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#aaf",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        {DAYS.map((dayNumber) => (
          <DayWindow
            key={dayNumber}
            value={dayNumber}
            isOpen={openWindows.includes(dayNumber)}
            onOpen={handleWindowOpen}
            canOpen={dayNumber <= currentDayNumber}
          />
        ))}
      </div>
    </>
  );
}
