"use client"
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
        "" 
    ];
    const toggleExpand = (index: number) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index)); 
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-16"> 
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-left mb-8">FAQs</h1>
            <div
                className="border-4 border-white rounded-lg overflow-hidden p-4 sm:p-6 lg:p-8"
                style={{ maxHeight: '80vh', overflowY: 'auto' }}
            >
                <div className="space-y-4 sm:space-y-6">
                    {[
                        "Are there any pre-requisites for the event?",
                        "Are the points earned during the course of the event redeemable?",
                        "What do we need to bring to the venue?",
                        "Do we need to report to the venue throughout the three days of the event?",
                        "What do we get at the end of the 3 days?",
                        "" 
                    ].map((text, index) => (
                        <div key={index} className={`${text === "" ? "hidden" : ""}`}>
                            <div
                                className={`p-4 sm:p-5 flex justify-between items-center cursor-pointer rounded-lg ${
                                    expandedIndex === index ? "bg-gray-700" : "bg-gray-800"
                                }`}
                                onClick={() => toggleExpand(index)} 
                            >
                                <p className="text-xl sm:text-2xl lg:text-3xl">{text}</p> 
                                {text && ( 
                                    <span className="text-xl sm:text-2xl">
                                        {expandedIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />} 
                                    </span>
                                )}
                            </div>
                            {expandedIndex === index && text && ( 
                                <div className="p-4 sm:p-5 text-lg sm:text-xl lg:text-2xl bg-gray-700 rounded-b-lg -mt-2">
                                    {answers[index]} 
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;