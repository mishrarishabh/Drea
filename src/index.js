import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalProvider } from "/src/ContextApi";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>
);
