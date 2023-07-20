import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import Layout from "../Components/Layout";
import { Button } from "antd";
import { AI_DATA_ADDCOMM, AI_URL } from "../secret";
export default function Addcomment() {
  const inpElem = useRef();
  const [isLoading, setLoading] = useState(0);
  const [getCode, setCode] = useState("");
  const [getLanguage, setLanguage] = useState("");

  const handleRequest = async () => {
    const inpCode = inpElem.current.value;
    if (!inpCode) {
      return;
    }
    setCode("");
    setLoading(1);
    try {
      const res = await axios.post(AI_URL, AI_DATA_ADDCOMM(inpCode), {
        headers: {
          "content-type": "application/json",
        },
      });

      const data = res.data.choices[0].message.content;
      const indexes = [...data.matchAll(new RegExp("```", "gi"))].map(
        (a) => a.index
      );

      let btwn = indexes[0] + 3;
      while (data[btwn++] != "\n");
      setLanguage(data.substring(indexes[0] + 3, btwn - 1));
      setCode(data.substring(btwn, indexes[1]));
      //   let i = btwn + 1;
      //   let intr = setInterval(() => {
      //     if (i >= indexes[1]) {
      //       clearInterval(intr);
      //     }
      //     setCode(data.substring(btwn + 1, Math.min(i, indexes[1])));
      //     i += 10;
      //   }, 50);
    } catch (error) {
      toast.error("Error Occured! Retry");
    }
    setLoading(0);
  };

  return (
    <div className=" main-frame AddComment h-screen flex flex-col text-white pb-5">
      {Toaster}
      <Navbar showIdx={1} showBan={0} />
      <h3 className="text-center py-2 bg-slate-800">
        Increase the Readibility and Understability of the code by adding
        <span className="font-mono text-green-500"> //Comments</span> in it
      </h3>
      <Button
        title={isLoading ? "Performing..." : "Click to add Comments"}
        loading={isLoading}
        className="font-semibold"
        onClick={handleRequest}
        style={{
          backgroundImage: "linear-gradient(225deg,#2A8DFF,#EA28EC)",
          border: "none",
          color: "white",
          width: "fit-content",
          margin: "10px auto 0 auto",
        }}
      >
        {isLoading ? "Adding Comments..." : "Add Comments"}
      </Button>
      <Layout
        isLoading={isLoading}
        getCode={getCode}
        getLanguage={getLanguage}
        inpElem={inpElem}
        handleRequest={handleRequest}
      />
    </div>
  );
}
