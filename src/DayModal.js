import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import MinecraftBlock from "./MinecraftBlock";
import DAYS_INFO from "./days";
import Slider from "@material-ui/core/Slider";

export default function DayModal({ dayNumber, onClose }) {
  const isVisible = Boolean(dayNumber);
  const [dayState, setDayState] = useState({});

  const [rotationSpeed, setRotationSpeed] = useState(5);
  const handleRotationSpeedChange = useCallback((event, newValue) => {
    setRotationSpeed(newValue);
  }, []);
  const [viewAngle, setViewAngle] = useState(75);
  const handleViewAngleChange = useCallback((event, newValue) => {
    setViewAngle(newValue);
  }, []);
  const [ambientLight, setAmbientLight] = useState(50);
  const handleAmbientLightChange = useCallback((event, newValue) => {
    setAmbientLight(newValue);
  }, []);

  const [fov, setFov] = useState(25);
  const handleFovChange = useCallback((event, newValue) => {
    setFov(newValue);
  }, []);

  useEffect(() => {
    const dayInfo = DAYS_INFO.find((each) => each.day === dayNumber);
    if (dayInfo) setDayState(dayInfo);
  }, [dayNumber]);

  const modal = (
    <div
      style={{
        position: "fixed",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease-in-out",
        pointerEvents: isVisible ? "all" : "none",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1200,
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          inset: 0,
          zIndex: 400,
        }}
      />
      <div
        style={{
          color: "#fff",
          position: "absolute",
          inset: 0,
          padding: "5vw",
          zIndex: 500,
          fontSize: "180%",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "1 1 0" }}>
          <h2 style={{ fontSize: "400%", margin: "8px 0" }}>
            {dayState.title}
          </h2>
          <p>{dayState.description}</p>
        </div>
        <div style={{ flex: "0 0 600px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              alignItems: "center",
            }}
          >
            <div>Size</div>
            <Slider value={fov} onChange={handleFovChange} />
            <div>Rotation Speed</div>
            <Slider
              value={rotationSpeed}
              onChange={handleRotationSpeedChange}
            />
            <div>View Angle</div>
            <Slider value={viewAngle} onChange={handleViewAngleChange} />
            <div>Light</div>
            <Slider value={ambientLight} onChange={handleAmbientLightChange} />
          </div>
          <MinecraftBlock
            textureLocation={dayState.texture}
            textureLocationTop={dayState.textureTop}
            textureLocationBottom={dayState.textureLocationBottom}
            rotationSpeed={rotationSpeed / 500}
            viewAngle={(viewAngle - 50) / 60}
            ambientLight={ambientLight / 100}
            fov={125 / fov}
            style={{ height: 600, width: 600 }}
          />
        </div>
      </div>
    </div>
  );
  return createPortal(modal, document.body);
}
