import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WebShare from "./pages/WebShare";

function App() {
  return (
    <BrowserRouter basename="/mobileProtfilio">
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/share">
            <Route path=":id" element={<WebShare />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
