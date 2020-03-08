import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import { Routes } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
