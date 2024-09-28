"use client";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Faq: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const answers = [
    "No, there are no pre-requisites for the event. Everyone is welcome!",
    "Yes, the points earned can be redeemed for rewards at the end of the event.",
    "Please bring your ID, a notebook, and any required materials for workshops.",
    "Yes, participants need to report to the venue each day of the event.",
    "At the end of the 3 days, you will receive a participation certificate and swag!",
    "",
  ];
  const toggleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 mt-8 mb-16">
      <div className="border-2 md:border-4 border-dashed outline-1 md:outline-2 outline-dashed outline-white/70 ring-2 md:ring-4 ring-white/70 relative  border-white/70 rounded-lg  p-4 sm:p-6 lg:p-3">
        <h1 className="text-2xl sm:text-5xl lg:text-5xl p2p font-bold text-left mb-8 bg-black absolute -top-6 p-4 left-12 md:left-16">
          FAQs
        </h1>
        <div className="border-2 md:border-4 border-dashed outline-1 md:outline-2 outline-dashed outline-white/70 ring-2 md:ring-4 ring-white/70  border-white/70 rounded-sm overflow-hidden p-4 sm:p-6 lg:p-8">
          <div className="space-y-2 sm:space-y-2 mt-4 md:mt-8">
            {[
              "Are there any pre-requisites for the event?",
              "Are the points earned during the course of the event redeemable?",
              "What do we need to bring to the venue?",
              "Do we need to report to the venue throughout the three days of the event?",
              "What do we get at the end of the 3 days?",
              "",
            ].map((text, index) => (
              <div key={index} className={`${text === "" ? "hidden" : ""}`}>
                <div
                  className={`p-2 md:p-4 sm:p-5 flex justify-between items-center font-robotoslab cursor-pointer rounded-lg ${
                    expandedIndex === index
                      ? "bg-black border-[1px] md:border-2 border-white"
                      : "bg-black "
                  }`}
                  onClick={() => toggleExpand(index)}
                >
                  <p className="text-sm md:text-xl">{text}</p>
                  {text && (
                    <span className="text-xs md:text-xl">
                      {expandedIndex === index ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  )}
                </div>
                {expandedIndex === index && text && (
                  <div className="p-2 md:p-4 sm:p-5 text-xs md:text-lg font-robotoslab sm:text-xl lg:text-base bg-black border-[1px] md:border-2 border-white border-t-0 rounded-b-lg -mt-4 text-white/70">
                    {answers[index]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
