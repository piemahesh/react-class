import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Pen } from "./Pen";
import Box, { MainBox } from "./Box";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Box />
  </StrictMode>
);
