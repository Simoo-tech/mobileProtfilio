import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WebShare } from "./WebShare";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/mobile-protfilio">
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/webshare" element={<WebShare />} />
    </Routes>
  </Router>
);

reportWebVitals();
