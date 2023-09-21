import React from "react";
import TipsContent from "./TipsContent";

const SecurityTips = () => {
  return (
    <>
      <div className="shadow-lg w-10/12 mt-5 bg-beige px-2 py-7 md:px-5 mb-7 md:mb-15">
        <h1 className="font-bold text-xl py-3 md:text-2xl md:py-5 lg:text-4xl mx-2">
          3 Essential Financial Cybersecurity Practices
        </h1>
        <p className="py-3 md:py-5 md:text-lg mx-2 mb-2">
          Protecting yourself against cybercriminals from accessing your
          personal finance information is extremely vital. Here are the 3 most
          important tips one should follow.
        </p>
        <div className="lg:ml-6 lg:relative w-full flex flex-col space-y-5 lg:grid lg:grid-cols-3 lg:space-x-4 lg:space-y-0 lg:items-stretch justify-center items-center">
          <TipsContent />
        </div>
      </div>
    </>
  );
};

export default SecurityTips;
