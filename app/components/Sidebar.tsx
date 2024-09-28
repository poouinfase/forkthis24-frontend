import React from "react";
import { AiOutlineHome } from "react-icons/ai"; // Importing the icon
import { BsFileBarGraph, BsBox2 } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5"; // Import the Logout icon
import Image from "next/image";
const Sidebar: React.FC = () => {
  return (
    <aside className="w-80 p-5 bg-[rgba(10,12,14,1)] flex flex-col font-p2p">
      <div className="mb-20 text-center flex flex-col items-center">
        <div className="flex items-center space-x-0 mb-10">
          <Image
            src="/flower.png"
            alt="Player"
            width={150}
            height={150}
            className="rounded-full -ml-5"
          />
          <div className="text-left">
            <p className="text-lg">Player 1</p>
            <p className="text-[rgba(140,142,143,1)] text-sm">
              pimla@gmail.com
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2 mt-20">
        <button className="w-full text-white py-2 text-left bg-transparent hover:bg-gray-700 flex items-center space-x-3 text-xl ml-2">
          <AiOutlineHome />
          <span>Dashboard</span>
        </button>
        <button className="w-full text-white py-2 text-left bg-transparent hover:bg-gray-700 flex items-center space-x-3 text-xl ml-2">
          <BsFileBarGraph />
          <span>Leaderboard</span>
        </button>
        <button className="w-full text-white py-2 text-left bg-transparent hover:bg-gray-700 flex items-center space-x-3 text-xl ml-2">
          <BsBox2 />
          <span>Resources</span>
        </button>
      </nav>

      <div className="text-left pt-5">
        <button className="w-13/4 text-white py-2 text-center bg-transparent hover:bg-gray-700 flex items-center space-x-4 text-xl ml-10 mt-64">
          <IoLogOutOutline />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
