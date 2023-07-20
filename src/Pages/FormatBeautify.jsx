import { useRef, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Button } from "antd";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import { AI_DATA_FAB, AI_URL } from "../secret";
export default function FormatBeautify() {
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
      const res = await axios.post(AI_URL, AI_DATA_FAB(inpCode), {
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
    <div className="AddComment h-screen flex flex-col text-white pb-2">
      {Toaster}
      <Navbar showIdx={2} showBan={0} />
      <h3 className="text-center py-2 bg-slate-800">
        Keep your code Clean and Readable by
        <span className="font-mono text-[#D95E90]"> Formatting </span> it.
      </h3>
      <Button
        title={isLoading ? "Formatting..." : "Click to format"}
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
        {isLoading ? "Abracadabara..." : "See Magic"}
      </Button>
      <Layout getCode={getCode} getLanguage={getLanguage} inpElem={inpElem} />
    </div>
  );
}
