import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <div className="relative left-0 ml-10" style={{ marginTop: '2rem', padding: '2rem' }}>
            <img 
                src="/Leaderboard/bg(1).webp" 
                alt="Background"
                className="absolute inset-0 object-cover w-full h-full" 
                style={{ zIndex: -1 }} 
            />
            <div className="flex flex-col items-start space-y-4 relative z-10"> 
                <div className="flex items-center">
                    <div className="flex items-center" style={{ marginRight: '14.25rem' }}>
                        <span className="mr-4">
                            <FaInstagram size={40} />
                        </span>
                        <span className="text-xl">@csivitu</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-4">
                            <FaFacebook size={40} />
                        </span>
                        <span className="text-xl">@csivitu</span>
                    </div>
                    <div className="flex items-center" style={{ marginLeft: '18rem' }}>
                        <span className="mr-4">
                            <FaLinkedin size={40} />
                        </span>
                        <span className="text-xl" style={{ marginRight: '12rem' }}>Computer Society of India</span>
                        <span className="mr-2 ml-4">
                            <FaXTwitter size={40} />
                        </span>
                        <span className="text-xl">@csivitu</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center mr-48">
                        <span className="mr-4">
                            <FaInstagram size={40} />
                        </span>
                        <span className="text-xl">@vellore_vit</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-4">
                            <FaFacebook size={40} />
                        </span>
                        <span className="text-xl">@vituniversity</span>
                    </div>
                    <div className="flex items-center" style={{ marginLeft: '15rem' }}>
                        <span className="mr-4">
                            <FaLinkedin size={40} />
                        </span>
                        <span className="text-xl" style={{ marginRight: '10rem' }}>Vellore Institute of Technology</span>
                        <span className="mr-2 ml-4">
                            <FaXTwitter size={40} />
                        </span>
                        <span className="text-xl">@VIT_univ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
