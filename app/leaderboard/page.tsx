"use client";
import React, { useEffect, useState } from "react";
import LeaderboardBox from "../components/LeaderboardBox";
import Image from "next/image";
import axios from "axios";
import Cookie from "js-cookie";
import type { leaderboardType } from "@/lib/types";

interface userType {
  score: number | null;
  githubUsername: string | null;
  email: string | null;
  Issues: Array<string> | null;
  rank: number | null;
}

function Leaderboard() {
  const [leaderboard, setLeaderBoard] = useState<Array<leaderboardType> | null>(null);
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
    <div className="relative min-h-screen flex flex-col justify-between">
      <div className="brick-col w-full h-[20%] md:h-[25%] fixed bottom-0 right-0">
        <div className="flex-col absolute top-[-110%] left-40 hidden lg:flex">
          <Image
            src={"/LeaderBoard/Mario.webp"}
            width={600}
            height={400}
            alt="cloud"
            className="w-20 relative left-8 -bottom-2"
          />
          <Image
            src={"/LeaderBoard/Block.webp"}
            width={600}
            height={400}
            alt="cloud"
            className="w-40"
          />
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-4 left-4 w-[40%] lg:w-[35%]">
        <span className="text-black font-robotoslab font-bold text-xl lg:text-3xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
          <p>{user.score}</p>
          <p>{user.rank}</p>
        </span>
        <Image
          src={"/LeaderBoard/Cloud.webp"}
          width={600}
          height={400}
          alt="cloud"
          className="w-full"
        />
      </div>
      <LeaderboardBox leaderboardDate={leaderboard}/>
    </div>
  );
}

export default Leaderboard;
