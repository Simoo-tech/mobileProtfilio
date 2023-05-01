import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { WebShare } from "./pages/WebShare";

function App() {
  return (
    <>
      <Router basename="/mobile-protfilio">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/webshare" element={<WebShare />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
