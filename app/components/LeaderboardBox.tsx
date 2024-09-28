import type { leaderboardType } from "@/lib/types";
import Link from "next/link";
import React from "react";

interface LeaderboardBoxProps {
  leaderboardDate: leaderboardType[] | null
}

const LeaderboardBox = (props: LeaderboardBoxProps) => {
  return (
    <div className="w-[90%] md:w-[60%] h-[80vh] flex flex-col  gap-4  z-100 absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-5 top-5">
      <h1 className="text-6xl font-robotoslab font-bold text-center">
        LEADERBOARD
      </h1>
      <div className="bg-[#1C2023] border-2 border-white rounded-2xl p-4">
        <div className="grid grid-cols-4 gap-4">
          <span className="bg-[#494B56] px-4 py-2 rounded-lg text-2xl font-robotomono font-semibold text-center">
            Rank
          </span>
          <span className="bg-[#494B56] px-4 py-2 col-span-2 rounded-lg text-2xl font-robotomono font-semibold text-center">
            Name
          </span>
          <span className="bg-[#494B56] px-4 py-2 rounded-lg text-2xl font-robotomono font-semibold text-center">
            Score
          </span>
        </div>
        <div className="flex flex-col gap-4 h-[70vh] overflow-y-auto mt-4 inner-scroller">
          {props.leaderboardDate?.map((user) => (
            <Link
              href={`https://github.com/${user.githubUsername}`}
              className="bg-[#494B56] flex items-center mr-4 font-semibold font-robotomono justify-around py-4 rounded-lg"
              key={user.githubUsername}
            >
              <h1 className="min-w-[5%]">{user.rank}</h1>
              <h1 className="min-w-[60%] text-center">{user.githubUsername}</h1>
              <h1>{user.score}</h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardBox;
