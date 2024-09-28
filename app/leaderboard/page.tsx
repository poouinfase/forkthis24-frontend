"use client";
import React, { Component, useEffect, useState } from "react";
import LeaderboardBox from "../components/LeaderboardBox";
import Image from "next/image";
interface leaderboardType {
  score: number;
  githubUsername: string;
  rank: number;
}

interface userType {
  score: number | null;
  githubUsername: string | null;
  email: string | null;
  Issues: Array<string> | null;
  rank: number | null;
}

function Leaderboard() {
  const [leaderboard, setLeaderBoard] = useState<Array<leaderboardType>>([]);
  useEffect(() => {
    const fetchLeaderBoardpage = async (
      limit: number = 1000,
      page: number = 0
    ) => {
      try {
        const backend = `${process.env.NEXT_PUBLIC_BACKEND_URL}/leaderboard?limit=${limit}&page=${page}`;

        const res = await fetch(backend, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });
        if (!res) {
          throw new Error("response not found");
        }
        const response = await res.json();
        setLeaderBoard(response.data);
      } catch (e: any) {
        console.log(e);
      }
    };
    fetchLeaderBoardpage();
  }, []);

  const [user, setUser] = useState<userType>(() => {
    return {
      score: null,
      githubUsername: null,
      email: null,
      Issues: null,
      rank: null,
    };
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const backend = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`;

        const res = await fetch(backend, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });
        if (!res) {
          throw new Error("response not found");
        }
        const response = await res.json();
        console.log(response);
        setUser(response);
      } catch (e: any) {
        console.log(e);
      }
    };
    fetchUser();
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
          <p>Score: 120</p>
          <p>Rank: 13</p>
        </span>
        <Image
          src={"/LeaderBoard/Cloud.webp"}
          width={600}
          height={400}
          alt="cloud"
          className="w-full"
        />
      </div>
      <LeaderboardBox />
    </div>
  );
}

export default Leaderboard;
