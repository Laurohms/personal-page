import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import App from "./App.tsx";
import { CustomSystemThemeSelector } from "./components/CustomSystemThemeSelector.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomSystemThemeSelector>
      <App />
    </CustomSystemThemeSelector>
  </StrictMode>
);
