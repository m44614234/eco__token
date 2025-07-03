"use client";
import React from "react";
import Desc from "../tools/Desc";
const Home = ({ setChoose }: { setChoose: (value: string) => void }) => {
  const handleChoose = (value: string) => {
    setChoose(value);
  };

  return (
    <div className="container_">
      <div className="flex flex-col  w-full items-center justify-top">
        <section>
          <img
            src={"/images/eco.jpg"}
            className="border  border-white w-20 h-20 rounded-full flex items-center justify-center"
          />
        </section>

        <section className="h-16  w-[1px] bg-white"></section>

        <section className="text-center w-full  flex flex-col text-white gap-4 py-8 border-y border-white">
          <p className="text-2xl md:text-4xl font-bold">ECO TOKEN</p>
        
          <Desc text=" Eco Token; Bridging Blockchain Innovation and Environmental
            Sustainability."/>
            <Desc text="Together, let's build a greener future!"/>
        </section>

        <section className="h-16  w-[1px] bg-white"></section>

        <section className="w-full md:w-2/3 mx-auto">
          <ul className="text-center flex flex-row-reverse justify-center  text-white ">
            <li className="li_" onClick={() => handleChoose("CONTACT")}>
              CONTACT
            </li>
            <li className="li_" onClick={() => handleChoose("ABOUT")}>
              ABOUT
            </li>
            <li className="li_" onClick={() => handleChoose("WORK")}>
              WORK
            </li>
            <li className="li_" onClick={() => handleChoose("INTRO")}>
              INTRO
            </li>
          </ul>
        </section>

        <section className="w-full md:w-2/3 mx-auto text-center text-lg text-white/80 mt-8">
          Design: MRHZS1376@yahoo.com , Built with: Next.js
        </section>
      </div>
    </div>
  );
};
export default Home;
