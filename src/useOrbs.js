import React, { useCallback, useState } from "react";
import { useRafLoop } from "react-use";
import XP_ORB_IMG from "./img/ExperienceOrb.gif";
// eslint-disable-next-line import/no-webpack-loader-syntax
import LEVEL_UP_SOUND from "!url-loader!./sounds/levelup.mp3";
import useSound from "use-sound";

function preloadImage(filename) {
  const img = new Image();
  img.src = filename;
}

preloadImage(XP_ORB_IMG);

function randomUpTo(high) {
  return Math.random() * high;
}

const DEFAULT_ORB_STATE = {
  orbs: [],
  clock: 0,
  clockRunning: false,
};

export default function useOrbs() {
  const [orbState, setOrbState] = useState(DEFAULT_ORB_STATE);
  const [playLevelUp] = useSound(LEVEL_UP_SOUND);

  const createOrbs = useCallback(
    (initialX, initialY, numberOfOrbs) => {
      playLevelUp();
      const newOrbs = new Array(numberOfOrbs).fill(false).map((v, index) => ({
        id: index,
        initialX,
        initialY,
        velocityX: randomUpTo(6) - 3,
        velocityY: randomUpTo(6) - 7,
        fadeSpeed: randomUpTo(0.01),
        size: Math.floor(randomUpTo(24)) + 8,
        weight: 1,
      }));
      setOrbState({
        orbs: newOrbs,
        clock: 0,
        clockRunning: true,
      });
    },
    [playLevelUp]
  );

  const destroyAllOrbs = useCallback(() => setOrbState(DEFAULT_ORB_STATE), []);

  useRafLoop(() => {
    if (orbState.clockRunning) {
      if (orbState.clock < 5000) {
        setOrbState({ ...orbState, clock: orbState.clock + 1 });
      } else {
        destroyAllOrbs();
      }
    }
  });

  const opacity = 1 - orbState.clock * 0.009;
  const gravityTerm = 0.1 * orbState.clock * orbState.clock;

  return {
    createOrbs,
    destroyAllOrbs,
    orbLayer: (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1600,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {orbState.orbs.map((orb) => {
          const top =
            orb.initialY +
            orb.velocityY * orbState.clock +
            gravityTerm * orb.weight;
          const left = orb.initialX + orb.velocityX * orbState.clock;

          return (
            <img
              key={orb.id}
              alt="xp orb"
              src={XP_ORB_IMG}
              style={{ position: "absolute", top, left, opacity }}
              width={orb.size}
              height={orb.size}
            />
          );
        })}
      </div>
    ),
  };
}
