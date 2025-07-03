"use client";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Home from "@/components/pages/Home";
import Intro from "@/components/pages/Intro";
import Work from "@/components/pages/Work";
import React, { useEffect, useState } from "react";
const Main = () => {
  const [choose, setChoose] = useState<string>("");

  // تابع برای انتخاب کامپوننت
  const renderComponent = () => {
    switch (choose) {
      case "CONTACT":
        return <Contact setChoose={setChoose} />;
      case "ABOUT":
        return <About setChoose={setChoose} />;
      case "WORK":
        return <Work setChoose={setChoose} />;
      case "INTRO":
        return <Intro setChoose={setChoose} />;
      default:
        return <Home setChoose={setChoose} />;
    }
  };

  return <div>{renderComponent()}</div>;
};
export default Main;
