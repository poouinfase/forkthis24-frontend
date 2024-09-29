"use client";
import React, { useEffect, useState } from "react";

import Cookie from "js-cookie";
import axios from "axios";
import Image from "next/image";

import DashboardInfographics from "../components/DashboardInfographics";
import RepositoryContent from "../components/RepositoryContent";
import MainSidebar from "../components/MainSidebar";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export interface userType {
  score: number | null;
  githubUsername: string | null;
  email: string | null;
  Issues: Array<string> | null;
  rank: number | null;
  name: string | null;
}

const targetDate = new Date("2024-10-01T23:59:59")
function timeSet() {
  const endDate = targetDate.getTime();
  const currDate = Date.now();
  return (endDate - +currDate);
}

function Dashboard() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
    const token = Cookies.get("token");
    if (!token) {
      router.push("/");
    }
  }, []);

  const [timeLeft, setTimeLeft] = useState<number>(
    timeSet()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(
        timeSet());
    }, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const hours = Math.floor((timeLeft) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const formatWithLeadingZero = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };
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
      <MainSidebar user={user} />
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
                {`${formatWithLeadingZero(hours)}:${formatWithLeadingZero(minutes)}:${formatWithLeadingZero(seconds)}`}
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
