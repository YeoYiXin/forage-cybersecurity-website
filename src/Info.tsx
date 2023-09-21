import React from "react";
import pagePic from "./Images/pagePic.png";
import SecurityTips from "./SecurityTips";
import Footer from "./Footer";

const Info = () => {
  return (
    <>
      <div className="">
        <div className="relative w-screen lg:h-[35rem] overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img
            src={pagePic}
            alt="Page Picture"
            className="w-full object-cover h-full lg:object-fill"
          />
          <div className="w-1/2 ml-7 flex flex-col absolute inset-0 justify-center items-center md:ml-15 lg:ml-20">
            <h1 className="text-white text-3xl font-bold mb-2 md:text-5xl lg:text-7xl ">
              Protecting Your Finances
            </h1>
            <p className="text-white text-md font-bold md:text-3xl lg:text-5xl">
              3 Essential Tips for Stronger Cybersecurity
            </p>
          </div>
        </div>
        <div className="w-screen bg-darkerWhite flex justify-center items-center mb-3">
          <SecurityTips />
        </div>
        <div >
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Info;
