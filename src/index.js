import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Typography } from "@material-ui/core";

const CENTRE_STYLE = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

const ROOT = document.getElementById("root");

if (window.innerWidth < 1400 || window.innerHeight < 800) {
  ReactDOM.render(
    <div style={CENTRE_STYLE}>
      <Typography variant="h6" style={{ maxWidth: 500 }}>
        Sorry, the Calendar needs a bigger screen and doesn't work well on
        mobile devices. Your screen should be at least{" "}
        <strong>1400 x 800</strong>.
      </Typography>
    </div>,
    ROOT
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    ROOT
  );
}
