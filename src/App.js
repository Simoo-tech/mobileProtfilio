import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { WebShare } from "./pages/WebShare";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/mobile-protfilio" exact element={<Home />} />
          <Route path="/webshare" element={<WebShare />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
