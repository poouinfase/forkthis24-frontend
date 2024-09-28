import Link from "next/link";
import React, { useState } from "react";
import Cookies from "js-cookie";
import {
  FaBars,
  FaBook,
  FaSignOutAlt,
  FaTachometerAlt,
  FaTrophy,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { userType } from "../dashboard/page";
const MainSidebar = ({ user }: { user: userType }) => {
  const [isNavbarOpen, setNavbar] = useState<boolean>(false);
  const router = useRouter();
  const toggleNavbar = () => {
    setNavbar(!isNavbarOpen);
  };
  const path = usePathname();
  return (
    <>
      <div className="lg:hidden p-4 bg-black flex justify-between items-center sticky top-0 left-0 w-full z-[100]">
        <h1 className="text-sm md:text-lg lg:text-xl font-p2p p2p">
          Dashboard
        </h1>
        <button
          onClick={toggleNavbar}
          className="text-white text-2xl"
          type="button"
        >
          {isNavbarOpen ? <IoMdClose /> : <FaBars />}
        </button>
      </div>
      <aside
        className={`lg:w-80 p-6 bg-[#1f1f22] flex flex-col lg:static absolute z-[90] font-press ${
          isNavbarOpen ? "top-0 pt-12 left-0 w-full sticky" : "hidden"
        } lg:block`}
      >
        <div className="mb-10 text-center flex items-center font-open">
          <Image
            src="/flower.png"
            alt="Avatar"
            width={150}
            height={150}
            className="w-20 h-auto"
          />
          <div className="text-left relative top-1">
            <p className="text-lg font-semibold">{user.name}Player 1</p>
            <p className="text-xs text-gray-400 mr-1 truncate w-full md:w-40">
              {user.email}keshav.aneja2022@vitstudent.ac.in
            </p>
          </div>
        </div>

        <nav className="flex-1 mb-1 font-open">
          <Link
            href="/dashboard"
            className={`py-2 p-6  text-md flex items-center  transition-colors duration-200 text-white/80 mb-3 hover:bg-black hover:text-white hover:border-white/80 border-[1px] border-transparent rounded-md ${
              path.includes("dashboard") && "bg-black text-white border-white"
            }`}
          >
            <FaTachometerAlt
              className={`mr-3  ${path.includes("dashboard") && "text-white"}`}
            />{" "}
            Dashboard
          </Link>
          <Link
            href="/leaderboard"
            className={`py-2 p-6  text-md flex items-center  transition-colors duration-200 text-white/80 mb-3 hover:bg-black hover:text-white hover:border-white/80 border-[1px] border-transparent rounded-md ${
              path.includes("leaderboard") && "bg-black text-white border-white"
            }`}
          >
            <FaTrophy
              className={`mr-3  ${
                path.includes("leaderboard") && "text-white"
              }`}
            />{" "}
            Leaderboard
          </Link>
          <Link
            href="/resources"
            className={`py-2 p-6  text-md flex items-center  transition-colors duration-200 mb-3 text-white/80 hover:bg-black hover:text-white hover:border-white/80 border-[1px] border-transparent rounded-md ${
              path.includes("resources") && "bg-black text-white "
            }`}
          >
            <FaBook
              className={`mr-3  ${path.includes("resources") && "text-white"}`}
            />{" "}
            Resources
          </Link>
        </nav>

        <div className="pt-10">
          <button
            className={`py-2 p-6  text-md flex items-center  transition-colors duration-200 mb-3 text-white/80 hover:bg-black hover:text-white hover:border-white/80 border-[1px] border-transparent rounded-md w-full`}
            onClick={() => {
              Cookies.remove("token");
              router.push("/");
            }}
          >
            <FaSignOutAlt className="mr-3 " />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default MainSidebar;
