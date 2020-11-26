import React from "react";
import { createPortal } from "react-dom";

const MODAL_STYLE_VISIBLE = {
  position: "fixed",
  opacity: 1,
  transition: "opacity 0.4s ease-in-out 0.4s",
  pointerEvents: "all",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1200,
};

const MODAL_STYLE_INVISIBLE = {
  position: "fixed",
  opacity: 0,
  transition: "opacity 0.4s ease-in-out 0s",
  pointerEvents: "none",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1200,
};

const BACKDROP_STYLE = {
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0, 0.85)",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 400,
};

const MODAL_CONTENT_STYLE = {
  color: "#fff",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: "5vw",
  margin: "0 auto",
  width: 700,
  zIndex: 500,
  fontSize: "180%",
};

const CLOSE_BUTTON_STYLE = {
  background: "none",
  border: "none",
  fontSize: "200%",
  cursor: "pointer",
  color: "inherit",
  fontFamily: "inherit",
  marginLeft: "auto",
};

export default function IntroModal({ open, onClose }) {
  const modal = (
    <div style={open ? MODAL_STYLE_VISIBLE : MODAL_STYLE_INVISIBLE}>
      <div style={BACKDROP_STYLE} />
      <div style={MODAL_CONTENT_STYLE}>
        <h3>Welcome to the Minecraft Advent Calendar!</h3>
        <p>
          Behind every door is a virtual Minecraft block to enjoy, but you can't
          open them all right away! Hope you have a very Merry Christmas.
        </p>
        <p style={{ marginLeft: 300 }}>love, bokkibear</p>
        <div style={{ display: "flex" }}>
          <button onClick={onClose} style={CLOSE_BUTTON_STYLE}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
  return createPortal(modal, document.body);
}
