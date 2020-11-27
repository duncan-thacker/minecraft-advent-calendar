import React, { useCallback, useMemo, useState } from "react";
import DayWindow from "./DayWindow";
import { useLocalStorage } from "react-use";
import BACKGROUND_IMAGE from "./background.jpg";
import DAYS_INFO from "./days";
import DayModal from "./DayModal";
import useOrbs from "./useOrbs";
import IntroModal from "./IntroModal";
import { BASE_BUTTON_STYLE } from "./styles";
import AboutModal from "./AboutModal";

const DAY_WINDOWS_GRID_STYLE = {
  width: "100%",
  height: "100%",
  backgroundImage: `url('${BACKGROUND_IMAGE}')`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
};

const MENU_BUTTON_STYLE = {
  ...BASE_BUTTON_STYLE,
  fontSize: "150%",
};

const INITIAL_APP_STATE = {};

const NOW = new Date();
const IS_DECEMBER = NOW.getMonth() === 11;
const NOW_DAY_NUMBER = NOW.getDate();

function isDayUnlocked(dayNumber) {
  if (IS_DECEMBER && dayNumber > NOW_DAY_NUMBER) return false;
  return true;
}

export default function App() {
  const [appState, setAppState, clearAppState] = useLocalStorage(
    "minecraft-advent-app-state-1"
  );

  const [aboutModal, setAboutModal] = useState(false);
  const openAboutModal = useCallback(() => setAboutModal(true), []);
  const closeAboutModal = useCallback(() => setAboutModal(false), []);

  const [blockModal, setBlockModal] = useState(0);

  const { createOrbs, orbLayer } = useOrbs();

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
      <div
        style={{
          padding: 4,
          backgroundColor: "#000",
          position: "absolute",
          color: "#fff",
        }}
      >
        <button onClick={clearAppState} style={MENU_BUTTON_STYLE}>
          Reset
        </button>
        <button onClick={openAboutModal} style={MENU_BUTTON_STYLE}>
          About
        </button>
      </div>
      <DayModal dayNumber={blockModal} onClose={handleCloseDayModal} />
      <IntroModal open={!Boolean(appState)} onClose={handleInitialiseApp} />
      <AboutModal open={aboutModal} onClose={closeAboutModal} />
      {orbLayer}
      <div style={DAY_WINDOWS_GRID_STYLE}>
        {DAYS_INFO.map((dayInfo) => (
          <DayWindow
            key={dayInfo.day}
            {...dayInfo}
            isOpen={openWindows.includes(dayInfo.day)}
            onOpen={handleWindowOpen}
            canOpen={isDayUnlocked(dayInfo.day)}
            backgroundImage={BACKGROUND_IMAGE}
          />
        ))}
      </div>
    </>
  );
}
