import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function DayWindow({ value }) {
  const [isClicked, setIsClicked] = useState(false);
  const transformStyle = useSpring({
    transform: `rotate3d(0, 1, 0, ${isClicked ? "-110deg" : "0deg"})`,
  });
  return (
    <div
      style={{
        cursor: "pointer",
        border: "8px solid #ccc",
        backgroundColor: "#642",
        borderRadius: 16,
        color: "#fff",
        margin: "3vw",
        fontFamily: "VT323",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <animated.button
        onClick={() => setIsClicked(true)}
        style={{
          position: "absolute",
          top: -8,
          left: -8,
          width: "calc(100% + 16px)",
          bottom: -8,
          cursor: "pointer",
          border: "8px solid #fff",
          boxSizing: "border-box",
          borderRadius: 16,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "#fff",
          transformOrigin: "left",
          fontFamily: "VT323",
          fontSize: "450%",
          ...transformStyle,
        }}
      >
        {value}
      </animated.button>
    </div>
  );
}
