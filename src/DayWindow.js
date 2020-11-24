import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

export default function DayWindow({
  day,
  title,
  isOpen,
  canOpen,
  onOpen,
  backgroundImage,
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef();
  const transformStyle = useSpring({
    transform: `rotate3d(0, 1, 0, ${isOpen ? "-130deg" : "0deg"})`,
  });
  const handleClick = useCallback(
    (clickEvent) => onOpen(day, clickEvent.clientX, clickEvent.clientY),
    [onOpen, day]
  );
  const handleOldClick = useCallback(
    (clickEvent) => onOpen(day, clickEvent.clientX, clickEvent.clientY, true),
    [onOpen, day]
  );

  useEffect(() => {
    setOffset(windowRef.current.getBoundingClientRect());
  }, []);

  return (
    <div
      ref={windowRef}
      style={{
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
        disabled={!canOpen}
        onClick={handleClick}
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
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: `-${offset.x}px -${offset.y}px`,
          color: "#fff",
          WebkitTextStroke: "1px black",
          transformOrigin: "left",
          fontFamily: "inherit",
          fontSize: "5vw",
          ...transformStyle,
        }}
      >
        {day}
      </animated.button>
      <button
        onClick={handleOldClick}
        style={{
          boxShadow: "inset 10px 10px 18px rgba(0,0,0,0.6)",
          cursor: "pointer",
          width: "100%",
          height: "100%",
          background: "none",
          border: "none",
          fontFamily: "inherit",
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "180%",
        }}
      >
        {day}
        <br />
        {title}
      </button>
    </div>
  );
}
