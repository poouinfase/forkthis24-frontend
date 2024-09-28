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
} from "react-icons/fa";
import Link from "next/link";
import Cookie from "js-cookie";
import axios from "axios";
import { repositories } from "@/lib/repository";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
interface userType {
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
    <div className="flex flex-col lg:flex-row bg-black text-white h-screen">
      <div className="lg:hidden p-4 bg-black flex justify-between items-center">
        <h1 className="text-xl font-p2p">Dashboard</h1>
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
            className={`py-2 p-6 text-white text-md flex items-center  transition-colors duration-200 mb-3 hover:bg-purple-500 hover:text-white rounded-md ${
              path.includes("dashboard") && "bg-purple-500 text-white"
            }`}
          >
            <FaTachometerAlt
              className={`mr-3 text-[#C8BCF6] ${
                path.includes("dashboard") && "text-white"
              }`}
            />{" "}
            Dashboard
          </Link>
          <Link
            href="/leaderboard"
            className={`py-2 p-6 text-white text-md flex items-center  transition-colors duration-200 mb-3 hover:bg-purple-500 hover:text-white rounded-md ${
              path.includes("leaderboard") && "bg-purple-500 text-white"
            }`}
          >
            <FaTrophy
              className={`mr-3 text-[#C8BCF6] ${
                path.includes("leaderboard") && "text-white"
              }`}
            />{" "}
            Leaderboard
          </Link>
          <Link
            href="/resources"
            className={`py-2 p-6 text-white text-md flex items-center  transition-colors duration-200 mb-3 hover:bg-purple-500 hover:text-white rounded-md ${
              path.includes("resources") && "bg-purple-500 text-white"
            }`}
          >
            <FaBook
              className={`mr-3 text-[#C8BCF6] ${
                path.includes("resources") && "text-white"
              }`}
            />{" "}
            Resources
          </Link>
        </nav>

        <div className="pt-10">
          <button
            className="py-2 p-6 w-full text-white text-md flex items-center  transition-colors duration-200 mb-3 hover:bg-purple-500 hover:text-white rounded-md"
            onClick={() => {
              Cookies.remove("token");
              router.push("/");
            }}
          >
            <FaSignOutAlt className="mr-3 text-[#C8BCF6]" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-hidden">
        {" "}
        {/* Removed overflow-y-auto from here */}
        <section className="flex justify-center items-center mb-10">
          {isClient && (
            <div className="text-center p2p">
              <h1 className="text-5xl mb-2 font-press -mt-5">Time Left</h1>
              <p
                className="text-4xl font-bold leading-[30.5px] tracking-[0.5%] font-press"
                style={{ marginTop: "1rem" }}
              >
                {timeLeft}
              </p>
            </div>
          )}
          <div className="ml-4 -mt-4">
            <Image src="/mario.png" alt="Mario" width={70} height={100} />
          </div>
        </section>
        {/* Repositories Section */}
        <section className="w-full mx-auto max-w-4xl mb-5 -mt-5">
          <div className="border-2 border-gray-600 rounded-lg bg-black p-6">
            <h2 className="text-3xl mb-3 text-center font-press">
              Repositories
            </h2>
            <div className="space-y-4 max-h-[430px] overflow-y-auto repo-scrollbar">
              {repositories.map((repo, index) => (
                <div
                  key={repo.name}
                  className="bg-[rgba(25,25,25,1)] p-4 border border-gray-600 rounded-lg flex flex-col lg:flex-row justify-between items-center"
                >
                  <div className="text-white flex-1 text-left">{index + 1}</div>
                  <div className="text-white flex-1 text-left">{repo.name}</div>
                  <div className="text-white flex-1 text-left">{repo.tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <aside className="hidden lg:block w-[20%] p-8 bg-[rgba(10,12,14,1)] border-l-2 border-gray-900 flex-col overflow-y-auto">
        <div className="mb-8 p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
          <h2 className="text-xl mb-4 font-press">Your Score</h2>
          <div className="flex justify-center items-center space-x-4">
            <p className="text-lg font-bold">{user.score}</p>
            <img src="/coins.png" alt="Coins" width={64} height={64} />
          </div>
        </div>

        <div className="mb-8 p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
          <h2 className="text-xl mb-4 font-press">Challenge Progress</h2>
          <p className="text-lg">Questions Solved: {user.Issues?.length}</p>
          <p className="text-sm text-gray-400">Fastest Solve: 5 Min 30 Sec</p>
          <p className="text-sm text-gray-400">Longest Solve: 25 Min 30 Sec</p>
          <div className="flex justify-center mt-4">
            <img src="/clock.png" alt="Clock" width={48} height={48} />
          </div>
        </div>

        <div className="p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
          <h2 className="text-xl mb-4 font-press">Report an Issue</h2>
          <p className="mb-4 text-sm">
            If you are facing any issue on this page, please let us know.
          </p>
          <Link
            href="https://discord.gg/sSs5TCfu"
            className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-200"
            type="button"
          >
            Report on discord
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default Dashboard;
