"use client";
import React, { useEffect, useState } from "react";
import LeaderboardBox from "../components/LeaderboardBox";
import Image from "next/image";
import axios from "axios";
import Cookie from "js-cookie";
import type { leaderboardType } from "@/lib/types";
import MainSidebar from "../components/MainSidebar";

interface userType {
  score: number | null;
  githubUsername: string | null;
  email: string | null;
  Issues: Array<string> | null;
  rank: number | null;
  name: string | null;
}

function Leaderboard() {
  const [leaderboard, setLeaderBoard] = useState<Array<leaderboardType> | null>(
    null
  );
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

  useEffect(() => {
    const fetchLeaderBoardpage = async (limit = 250, page = 0) => {
      try {
        const backend = `${process.env.NEXT_PUBLIC_BACKEND_URL}/leaderboard?limit=${limit}&page=${page}`;
        const leaderboardData = await axios.get(backend, {
          headers: {
            Authorization: `Bearer ${Cookie.get("token")}`,
          },
        });
        setLeaderBoard(leaderboardData.data.data);
      } catch (e: unknown) {
        console.log(e);
      }
    };
    fetchLeaderBoardpage();
  }, []);

  return (
    <div className="w-full overflow-x-hidden flex flex-col lg:flex-row bg-black text-white min-h-screen md:max-h-screen rela">
      <MainSidebar user={user} />
      <div className="brick-col w-full h-[20%] md:h-[25%] fixed bottom-0 right-0"></div>
      <div className="flex-col fixed bottom-[20%] md:bottom-[25%] left-6 md:left-[30%] lg:flex">
        <Image
          src={"/LeaderBoard/Mario.webp"}
          width={600}
          height={400}
          alt="cloud"
          className="w-10 md:w-20 relative left-4 md:left-8 md:-bottom-2"
        />
        <Image
          src={"/LeaderBoard/Block.webp"}
          width={600}
          height={400}
          alt="cloud"
          className="w-16  md:w-40"
        />
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-4 left-60 hidden lg:block lg:w-[35%]">
        <span className="text-black font-robotoslab font-bold text-xs lg:text-xl p2p absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
          <p>SCORE {user.score}230</p>
          <p>RANK {user.rank}22</p>
        </span>
        <Image
          src={"/LeaderBoard/Cloud.webp"}
          width={600}
          height={400}
          alt="cloud"
          className="w-full"
        />
      </div>
      <Image
        src={"/LeaderBoard/Cloud.webp"}
        width={600}
        height={400}
        alt="cloud"
        className="w-32 h-auto absolute top-1/2 -translate-y-1/2 right-0 lg:hidden"
      />
      <Image
        src={"/LeaderBoard/Cloud.webp"}
        width={600}
        height={400}
        alt="cloud"
        className="w-24 h-auto absolute top-[60%] -translate-y-[40%] right-20 lg:hidden"
      />
      <Image
        src={"/LeaderBoard/Cloud.webp"}
        width={600}
        height={400}
        alt="cloud"
        className="w-24 h-auto absolute top-[40%] -translate-y-[60%] left-12 lg:hidden"
      />
      <Image
        src={"/LeaderBoard/Cloud.webp"}
        width={600}
        height={400}
        alt="cloud"
        className="w-60 hidden md:block h-auto absolute top-1/2 -translate-y-1/2 right-32"
      />
      <LeaderboardBox leaderboardDate={leaderboard} />
    </div>
  );
}

export default Leaderboard;
