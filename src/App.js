import React, { useCallback, useMemo, useState } from "react";
import DayWindow from "./DayWindow";
import { useLocalStorage } from "react-use";
import BACKGROUND_IMAGE from "./background.jpg";
import DAYS_INFO from "./days";
import DayModal from "./DayModal";
import useOrbs from "./useOrbs";
import IntroModal from "./IntroModal";

const DAY_WINDOWS_GRID_STYLE = {
  width: "100%",
  height: "100%",
  backgroundImage: `url('${BACKGROUND_IMAGE}')`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
};

const INITIAL_APP_STATE = {};

export default function App() {
  const [appState, setAppState, clearAppState] = useLocalStorage(
    "minecraft-advent-app-state-1"
  );

  const [blockModal, setBlockModal] = useState(0);

  const { createOrbs, orbLayer } = useOrbs();

  const currentDayNumber = 45; //TODO get real number

  const openWindows = useMemo(() => appState?.openWindows || [], [appState]);

  const handleWindowOpen = useCallback(
    (dayNumber, x, y, alreadyOpened) => {
      setBlockModal(dayNumber);

      setAppState({
        ...appState,
        openWindows: [...openWindows, dayNumber],
      });
      if (!alreadyOpened) {
        createOrbs(x, y, 10);
      }
    },
    [appState, setAppState, openWindows, createOrbs]
  );

  const handleInitialiseApp = useCallback(
    () => setAppState(INITIAL_APP_STATE),
    [setAppState]
  );

  const handleCloseDayModal = useCallback(() => setBlockModal(false), []);

  return (
    <>
      <button onClick={clearAppState} style={{ position: "absolute" }}>
        Clear
      </button>
      <DayModal dayNumber={blockModal} onClose={handleCloseDayModal} />
      <IntroModal open={!Boolean(appState)} onClose={handleInitialiseApp} />
      {orbLayer}
      <div style={DAY_WINDOWS_GRID_STYLE}>
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
