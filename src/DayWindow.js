import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

const UNDER_WINDOW_BUTTON_STYLE = {
  boxShadow: "inset 10px 10px 18px rgba(0,0,0,0.6)",
  cursor: "pointer",
  width: "100%",
  height: "100%",
  background: "none",
  border: "none",
  fontFamily: "inherit",
  color: "rgba(255, 255, 255, 0.6)",
  fontSize: "180%",
};

const DAY_WINDOW_CONTAINER_STYLE = {
  border: "8px solid #ccc",
  backgroundColor: "#642",
  borderRadius: 16,
  color: "#fff",
  margin: "3vw",
  fontFamily: "VT323",
  position: "relative",
  boxSizing: "border-box",
};

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

  const lidStyle = useMemo(() => {
    return {
      position: "absolute",
      top: -8,
      left: -8,
      width: "calc(100% + 16px)",
      bottom: -8,
      cursor: canOpen ? "pointer" : "not-allowed",
      border: "8px solid #fff",
      boxSizing: "border-box",
      borderRadius: 16,
      backgroundImage: `url('${backgroundImage}')`,
      backgroundPosition: `-${offset.x + 8}px -${offset.y + 8}px`,
      color: "#fff",
      WebkitTextStroke: canOpen ? "1px black" : "none",
      transformOrigin: "left",
      fontFamily: "inherit",
      fontSize: "5vw",
      ...transformStyle,
    };
  }, [offset, backgroundImage, transformStyle, canOpen]);

  return (
    <div ref={windowRef} style={DAY_WINDOW_CONTAINER_STYLE}>
      <animated.button
        disabled={!canOpen || isOpen}
        onClick={handleClick}
        style={lidStyle}
      >
        {day}
      </animated.button>
      <button onClick={handleOldClick} style={UNDER_WINDOW_BUTTON_STYLE}>
        {day}
        <br />
        {title}
      </button>
    </div>
  );
}
