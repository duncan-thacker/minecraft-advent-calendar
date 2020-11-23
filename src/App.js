import React, { useCallback } from "react";
import DayWindow from "./DayWindow";
import { useLocalStorage } from "react-use";

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

export default function App() {
  const [openWindows = [], setOpenWindows, clearWindowState] = useLocalStorage(
    "minecraft-open-windows",
    []
  );

  const currentDayNumber = 10; //TODO get real number
  const handleWindowOpen = useCallback(
    (dayNumber) => {
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
