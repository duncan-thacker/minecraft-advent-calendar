import React from "react";
import { createPortal } from "react-dom";
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
  padding: "5vw",
  margin: "0 auto",
  width: 700,
  zIndex: 500,
  fontSize: "180%",
};

const CLOSE_BUTTON_STYLE = {
  ...BASE_BUTTON_STYLE,
  fontSize: "200%",
};

export default function AboutModal({ open, onClose }) {
  const modal = (
    <div style={open ? MODAL_STYLE_VISIBLE : MODAL_STYLE_INVISIBLE}>
      <div style={BACKDROP_STYLE} />
      <div style={MODAL_CONTENT_STYLE}>
        <p>
          Created by Duncan Thacker for non-commercial use. Please report any
          bugs or issues to me (
          <a href="mailto:duncan.thacker@gmail.com">duncan.thacker@gmail.com</a>
          ).
        </p>
        <p>
          I do not own any of this content or any of the copyright or trademarks
          associated with Minecraft. Block descriptions are adapted from the{" "}
          <a href="https://minecraft.gamepedia.com">Minecraft Wiki</a> and are
          allowed under the site's{" "}
          <a href="https://creativecommons.org/licenses/by-sa/3.0/">
            CC BY-SA 3.0 licence
          </a>
          . Block textures are adapted from the Minecraft Resource Pack Template
          for which no licence is explicitly specified.
        </p>
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
