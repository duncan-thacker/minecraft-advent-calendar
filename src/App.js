import React, { useCallback, useState } from "react";
import DayWindow from "./DayWindow";
import { useLocalStorage } from "react-use";
import BACKGROUND_IMAGE from "./background.jpg";
import DAYS_INFO from "./days";
import DayModal from "./DayModal";

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
          backgroundImage: `url('${BACKGROUND_IMAGE}')`,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        {DAYS_INFO.map((dayInfo) => (
          <DayWindow
            key={dayInfo.day}
            {...dayInfo}
            isOpen={openWindows.includes(dayInfo.day)}
            onOpen={handleWindowOpen}
            canOpen={dayInfo.day <= currentDayNumber}
            backgroundImage={BACKGROUND_IMAGE}
          />
        ))}
      </div>
    </>
  );
}
