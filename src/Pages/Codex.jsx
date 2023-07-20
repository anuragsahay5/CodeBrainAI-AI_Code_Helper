import React from "react";
import Navbar from "../Components/Navbar";
export default function Codex() {
  return (
    <>
    <Navbar showBan={1} />
    <iframe
      src="https://codex-iframe.netlify.app/"
      frameborder="0"
      className="w-100 h-screen"
    ></iframe>
    </>
  );
}
