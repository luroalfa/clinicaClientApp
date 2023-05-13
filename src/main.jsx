import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./routes/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
