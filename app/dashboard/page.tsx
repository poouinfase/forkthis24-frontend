"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import {
  FaTachometerAlt,
  FaTrophy,
  FaBook,
  FaSignOutAlt,
  FaBars,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";
import Cookie from "js-cookie";
import axios from "axios";
import { repositories } from "@/lib/repository";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowForward, IoMdClose } from "react-icons/io";
import GlowCard from "../components/GlowCard";
import DashboardInfographics from "../components/DashboardInfographics";
import RepositoryContent from "../components/RepositoryContent";
export interface userType {
  score: number | null;
  githubUsername: string | null;
  email: string | null;
  Issues: Array<string> | null;
  rank: number | null;
  name: string | null;
}

function Dashboard() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [isNavbarOpen, setNavbar] = useState<boolean>(false);
  const toggleNavbar = () => {
    setNavbar(!isNavbarOpen);
  };

  const [timeLeft, setTimeLeft] = useState<string>(
    new Date().toLocaleTimeString("en-in", { hourCycle: "h23" })
  );
  useEffect(() => {
    const interval = setInterval(() => {
      const endDate = new Date();
      endDate.setFullYear(2024, 9, 31);
      endDate.setHours(23, 59, 59);
      const currDate = new Date();
      setTimeLeft(
        new Date(+endDate - +currDate).toLocaleTimeString("en-in", {
          hourCycle: "h23",
        })
      );
    }, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const [user, setUser] = useState<userType>({} as userType);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const backend = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`;
        const userData = await axios.get(backend, {
          headers: {
            Authorization: `Bearer ${Cookie.get("token")}`,
          },
        });
        setUser(userData.data);
      } catch (e: unknown) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-black text-white min-h-screen md:max-h-screen">
      <div className="lg:hidden p-4 bg-black flex justify-between items-center">
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
        className={`lg:w-80 p-6 bg-[#1f1f22] flex flex-col lg:static absolute font-press ${
          isNavbarOpen ? "top-0 left-0 w-full" : "hidden"
        } lg:block`}
      >
        <IoMdClose
          className="absolute top-6 right-6 lg:hidden text-2xl cursor-pointer"
          onClick={toggleNavbar}
        />
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
            className={`py-2 p-6  text-md flex items-center  transition-colors text-white/80 duration-200 mb-3 hover:bg-black hover:text-white hover:border-white/80 border-[1px]  rounded-md ${
              path.includes("dashboard") && "bg-black text-white"
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
              path.includes("leaderboard") && "bg-black text-white"
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

      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-hidden">
        <section className="flex justify-center items-center mb-10 p2p">
          {isClient && (
            <div className="text-center">
              <h1 className="text-xl md:text-3xl mb-2 font-press -mt-5 p2p">
                Time Left
              </h1>
              <p
                className="text-xl md:text-3xl font-bold leading-[30.5px] tracking-[0.5%] font-press"
                style={{ marginTop: "1rem" }}
              >
                {timeLeft}
              </p>
            </div>
          )}
          <div className="ml-4 -mt-4">
            <Image
              src="/mario.png"
              alt="Mario"
              width={70}
              height={100}
              className="w-12 md:w-16"
            />
          </div>
        </section>
        <div className="w-full mb-8 lg:hidden">
          <DashboardInfographics vertical={false} user={user} />
        </div>
        {/* Repositories Section */}
        <RepositoryContent />
      </main>
      <div className="w-[20%] h-screen hidden lg:block">
        <DashboardInfographics user={user} />
      </div>
    </div>
  );
}

export default Dashboard;
