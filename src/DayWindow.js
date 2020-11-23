import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

export default function DayWindow({
  day,
  isOpen,
  canOpen,
  onOpen,
  backgroundImage,
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef();
  const transformStyle = useSpring({
    transform: `rotate3d(0, 1, 0, ${isOpen ? "-110deg" : "0deg"})`,
  });
  const handleClick = useCallback(
    (clickEvent) => onOpen(day, clickEvent.clientX, clickEvent.clientY),
    [onOpen, day]
  );

  useEffect(() => {
    setOffset(windowRef.current.getBoundingClientRect());
    console.log(windowRef.current.getBoundingClientRect().x);
  }, []);

  return (
    <div
      ref={windowRef}
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
          transformOrigin: "left",
          fontFamily: "VT323",
          fontSize: "450%",
          ...transformStyle,
        }}
      >
        {day}
      </animated.button>
    </div>
  );
}
