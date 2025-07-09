import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { UserProvider } from "./providers/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <UserProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UserProvider>
    </Provider>
  </StrictMode>
);
