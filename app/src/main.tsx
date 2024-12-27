import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "@styles/global.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
