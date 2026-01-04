import React from "react";
import ReactDom, { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App2 from "./App2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App2 />
  </StrictMode>
);
