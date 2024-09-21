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
        <div className="ml-14 mt-4"> 
            <h1 className="text-6xl font-bold text-left">FAQs</h1>
            <div
                className="mt-4 p-6 border-4 border-white" 
                style={{ width: "1425px", height: '550px', overflowY: 'auto' }} 
            >
                <div className="mb-2"></div> 
                {[
                    "Are there any pre-requisites for the event?",
                    "Are the points earned during the course of the event redeemable?",
                    "What do we need to bring to the venue?",
                    "Do we need to report to the venue throughout the three days of the event?",
                    "What do we get at the end of the 3 days?",
                    "" 
                ].map((text, index) => (
                    <div key={index}>
                        <div
                            className={`mb-2 p-4 flex justify-between items-center cursor-pointer ${expandedIndex === index ? "rounded-t-lg" : ""}`} // Added rounded top corners on open
                            style={{
                                width: "100%",
                                height: "64px",
                                borderTop: "2px solid rgba(46, 46, 46, 1)",
                                borderBottom: "2px solid rgba(46, 46, 46, 1)",
                                backgroundColor: text === "" 
                                    ? 'black'  
                                    : expandedIndex === index 
                                        ? 'rgba(74, 72, 80, 1)' 
                                        : 'black' 
                            }}
                            onClick={() => toggleExpand(index)} 
                        >
                            <p className="text-3xl">{text}</p> 
                            {text && ( 
                                <span className="text-2xl">
                                    {expandedIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />} 
                                </span>
                            )}
                        </div>
                        {expandedIndex === index && text && ( 
                            <div className="p-4 text-2xl rounded-b-lg" style={{ backgroundColor: 'rgba(74, 72, 80, 1)', marginTop: '-.85rem'}}>
                                {answers[index]} 
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
