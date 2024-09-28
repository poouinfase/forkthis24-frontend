"use client";
import Link from "next/link";
import Image from "next/image";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const loginUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/github/login`;
  return (
    <nav className=" --navbar h-fit py-4 px-6 md:px-12 fixed top-0 left-0 z-[100] w-full ">
      <div
        className={`flex transition-all duration-200 ease-linear flex-col md:flex-row md:justify-between md:items-center ${
          openMenu ? "h-40 md:h-fit" : "h-9 md:h-fit"
        } overflow-hidden`}
      >
        <div className="flex flex-col md:flex-row md:items-center space-x-0  md:space-x-4 p2p text-xs md:text-sm">
          <div className="logo-placeholder w-full flex items-center justify-between mb-8 md:mb-0 z-[1000]">
            <Image
              src="/logo.svg"
              alt="forkthis"
              width={100}
              height={100}
              className="w-8 md:w-12"
            />
            {openMenu ? (
              <IoMdClose
                className="text-3xl md:hidden z-[1000] relative"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              />
            ) : (
              <IoMdMenu
                className="text-3xl md:hidden z-[1000] relative"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              />
            )}
          </div>
          <Link
            href="/dashboard"
            className="text-white uppercase px-3 py-2 rounded hover:bg-white hover:text-black"
          >
            Dashboard
          </Link>
          <Link
            href="/leaderboard"
            className="text-white uppercase px-3 py-2 rounded hover:bg-white hover:text-black"
          >
            Leaderboard
          </Link>
          <Link
            href="/resources"
            className="text-white uppercase px-3 py-2 rounded hover:bg-white hover:text-black"
          >
            Resources
          </Link>
        </div>
        <div className="p2p text-sm hidden md:block">
          <Link
            href={loginUrl}
            className="text-white uppercase px-3 py-2 rounded hover:bg-white hover:text-black"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="w-full bg-white h-[2px] --nav-line absolute bottom-0 left-0"></div>
    </nav>
  );
};

export default Navbar;
