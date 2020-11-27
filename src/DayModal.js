import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import MinecraftBlock from "./MinecraftBlock";
import DAYS_INFO from "./days";
import Slider from "@material-ui/core/Slider";
import {
  BASE_BUTTON_STYLE,
  MODAL_STYLE_INVISIBLE,
  MODAL_STYLE_VISIBLE,
  BACKDROP_STYLE,
} from "./styles";

const MODAL_CONTENT_STYLE = {
  color: "#fff",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: "5vh auto",
  width: "90vw",
  maxWidth: 1800,
  zIndex: 500,
  fontSize: "180%",
  display: "flex",
  alignItems: "flex-start",
};

const FLEX_EXPAND_STYLE = {
  flex: "1 1 0",
};

const CLOSE_BUTTON_STYLE = {
  ...BASE_BUTTON_STYLE,
  fontSize: "200%",
};

const BLOCK_SIDEBAR_STYLE = { flex: "0 0 600px", marginLeft: 40 };

const SLIDERS_STYLE = {
  display: "grid",
  gridTemplateColumns: "200px 1fr",
  alignItems: "center",
};

const BLOCK_CANVAS_STYLE = { height: 600, width: 600 };

export default function DayModal({ dayNumber, onClose }) {
  const isVisible = Boolean(dayNumber);
  const [dayState, setDayState] = useState({});

  const [rotationSpeed, setRotationSpeed] = useState(55);
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
    if (dayInfo) {
      setDayState(dayInfo);
    }
  }, [dayNumber]);

  const modal = (
    <div style={isVisible ? MODAL_STYLE_VISIBLE : MODAL_STYLE_INVISIBLE}>
      <div style={BACKDROP_STYLE} />
      <div style={MODAL_CONTENT_STYLE}>
        <div style={FLEX_EXPAND_STYLE}>
          <h2 style={{ fontSize: "400%", margin: "8px 0", letterSpacing: 5 }}>
            {dayState.title}
          </h2>
          <p style={{ fontSize: "110%" }}>{dayState.description}</p>
          <div style={{ textAlign: "right" }}>
            <button onClick={onClose} style={CLOSE_BUTTON_STYLE}>
              Close
            </button>
          </div>
        </div>
        <div style={BLOCK_SIDEBAR_STYLE}>
          <MinecraftBlock
            textureLocation={dayState.texture}
            textureLocationTop={dayState.textureTop}
            textureLocationBottom={dayState.textureBottom}
            textureLocationFront={dayState.textureFront}
            textureLocationLeft={dayState.textureLeft}
            isAnimated={dayState.isAnimated}
            height={dayState.height}
            rotationSpeed={(rotationSpeed - 50) / 400}
            viewAngle={(viewAngle - 50) / 60}
            ambientLight={ambientLight / 50}
            fov={125 / (fov + 5)}
            style={BLOCK_CANVAS_STYLE}
          />
          <div style={SLIDERS_STYLE}>
            <div>Zoom</div>
            <Slider value={fov} onChange={handleFovChange} color="secondary" />
            <div>Rotation</div>
            <Slider
              color="secondary"
              value={rotationSpeed}
              onChange={handleRotationSpeedChange}
            />
            <div>View Angle</div>
            <Slider
              value={viewAngle}
              onChange={handleViewAngleChange}
              color="secondary"
            />
            <div>Light</div>
            <Slider
              value={ambientLight}
              onChange={handleAmbientLightChange}
              color="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
  return createPortal(modal, document.body);
}
