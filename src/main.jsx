import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { ThemeProvider } from "./providers/ThemeProvider";
import { ShopProvider } from "./providers/ShopProvider.jsx";
import { StoreProvider } from "./providers/StoreProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <ShopProvider>
          <App />
        </ShopProvider>
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>
);
