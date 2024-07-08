import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CalProvider } from "./context/CalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CalProvider>
      <App />
    </CalProvider>
  </React.StrictMode>
);
