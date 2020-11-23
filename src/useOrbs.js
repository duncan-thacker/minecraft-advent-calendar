import React, { useCallback, useState } from "react";
import { useRafLoop } from "react-use";
import XP_ORB_IMG from "./img/ExperienceOrb.webp";

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

  const createOrbs = useCallback((initialX, initialY, numberOfOrbs) => {
    const newOrbs = new Array(numberOfOrbs).fill(false).map((v, index) => ({
      id: index,
      initialX,
      initialY,
      velocityX: randomUpTo(6) - 3,
      velocityY: randomUpTo(1.5) - 2,
      fadeSpeed: randomUpTo(0.01),
      size: Math.floor(randomUpTo(24)) + 8,
      weight: 1,
    }));
    setOrbState({
      orbs: newOrbs,
      clock: 0,
      clockRunning: true,
    });
  }, []);

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

  const opacity = 1 - orbState.clock * 0.005;
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


