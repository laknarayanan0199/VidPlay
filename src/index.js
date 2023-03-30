import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./components/features/api/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
