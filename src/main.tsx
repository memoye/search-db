import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SearchDbContextProvider } from "./context/search-db-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchDbContextProvider>
      <App />
    </SearchDbContextProvider>
  </React.StrictMode>
);
