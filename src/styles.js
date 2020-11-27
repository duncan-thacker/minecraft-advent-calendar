export const MODAL_STYLE_VISIBLE = {
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

export const MODAL_STYLE_INVISIBLE = {
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

export const BACKDROP_STYLE = {
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0, 0.85)",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 400,
};

export const BASE_BUTTON_STYLE = {
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "inherit",
  fontFamily: "inherit",
  marginLeft: "auto",
};
