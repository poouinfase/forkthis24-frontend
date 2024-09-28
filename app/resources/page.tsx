"use client";
import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

function Resources() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const renderSection = (title: string, color: string, borderColor: string) => (
        <>
            <p className="text-2xl md:text-3xl mb-4 text-left w-full pl-4 font-press text-[rgba(140,142,143,1)]">
                {title}
            </p>
            <div className="flex overflow-x-auto pb-4 mb-8 px-4 hide-scrollbar">
                {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="button-dashed-border flex-shrink-0 w-[80%] sm:w-[60%] md:w-[40%] mr-4 last:mr-0 mt-2 p-4">
                        <div className="bg-[rgba(10,12,14,1)] rounded-lg overflow-hidden shadow-lg flex flex-col sm:flex-row h-auto sm:h-48">
                            <div className="relative w-full sm:w-1/3 h-32 sm:h-auto">
                                <img
                                    src="/Resources/sideImage.webp"
                                    alt="Card Image"
                                />
                            </div>
                            <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                                <div>
                                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold font-press ${color} mb-2 mt-2 sm:-mt-4`}>
                                        Fireship
                                    </h2>
                                    <p className="text-white text-xs sm:text-sm md:text-base font-roboto-mono">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit metus
                                    </p>
                                </div>
                                <button className={`w-full sm:w-3/4 px-2 py-1 ${color} text-white hover:opacity-80 font-press text-xs ${borderColor} mt-4 sm:-mb-4`}>
                                    View Report
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4">
                <div className="cursor-pointer" onClick={toggleSidebar}>
                    <VscThreeBars size={28} color="white" />
                </div>
                <h1 className="text-3xl font-press">Resources</h1>
            </div>

            <div className="flex-1 flex">
                {sidebarOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>
                )}
                <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0`}>
                    <Sidebar />
                </div>
                <div className="flex-1 overflow-y-auto hide-scrollbar">
                    <div className="p-4 md:p-6 text-white">
                        <h1 className="text-4xl md:text-7xl mb-8 text-center font-press md:block hidden">Resources</h1>
                        {/* Sections */}
                        {renderSection("YouTube", "text-[rgba(28,194,34,1)]", "border-4 border-[rgba(1,55,6,1)]")}
                        {renderSection("Articles", "text-[rgba(50,69,236,1)]", "border-4 border-[rgba(23,33,121,1)]")}
                        {renderSection("Github", "text-[rgba(233,38,32,1)]", "border-4 border-[rgba(141,26,22,1)]")}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;