import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

serviceWorker.unregister();
