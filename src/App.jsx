import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addcomment from "./Pages/Addcomment";
import Refactor from "./Pages/Refactor";
import FormatBeautify from "./Pages/FormatBeautify";
import CodeX from "./Pages/Codex";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
      <div className="App h-screen flex flex-col ">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/addcomment" element={<Addcomment />} />
            <Route path="/refactor" element={<Refactor />} />
            <Route path="/format-beautify" element={<FormatBeautify />} />
            <Route path="/codex-online-compiler-and-ide" element={<CodeX />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="mt-5"><Footer /></div>
    </>
  );
}
