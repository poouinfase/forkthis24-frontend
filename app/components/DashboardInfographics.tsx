import React from "react";
import GlowCard from "./GlowCard";
import Image from "next/image";
import { userType } from "../dashboard/page";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
const DashboardInfographics = ({
  user,
  vertical = true,
}: {
  user: userType;
  vertical?: boolean;
}) => {
  if (!vertical) {
    return (
      <>
        <aside className=" w-full h-full  bg-transparent  gap-4 hidden md:flex">
          <GlowCard
            className="mb-8 p-6 bg-[rgba(25,25,25,1)] border min-h-fit border-gray-700 rounded-lg text-center after:bg-[rgba(25,25,25,1)]"
            style={{ height: "9rem", width: "30%" }}
          >
            <h2 className="text-xs mb-4 p2p">Your Score</h2>
            <div className="flex justify-center items-center space-x-4">
              <p className="text-lg font-bold p2p">{user.score}1450</p>
              <Image src="/coins.png" alt="Coins" width={64} height={64} />
            </div>
          </GlowCard>

          <GlowCard
            className="mb-8 p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center after:bg-[rgba(25,25,25,1)]"
            style={{ height: "9rem", width: "40%" }}
          >
            <h2 className="text-xs p2p mb-4 font-press">Challenge Progress</h2>
            <p className="text-2xl p2p text-gray-400">
              {user.Issues?.length}/15
            </p>
            <p className="text-xs p2p mt-4">Questions Solved</p>
          </GlowCard>

          <GlowCard
            className="p-3 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center after:bg-[rgba(25,25,25,1)]"
            style={{ height: "9rem", width: "30%" }}
          >
            <p className="mb-4 text-[0.5rem] p2p">
              If you are facing any issue on this page, please let us know.
            </p>
            <Link
              href="https://discord.gg/sSs5TCfu"
              className="bg-white/80 flex items-center gap-2 justify-center p2p text-[0.65rem] text-black py-1 lg:py-2 px-4 rounded-lg hover:bg-white transition-colors duration-200"
              type="button"
            >
              <p>Report on</p>
              <FaDiscord className="text-black text-2xl" />
            </Link>
          </GlowCard>
        </aside>
        <aside className=" w-full h-full  bg-transparent flex gap-4 md:hidden overflow-x-scroll">
          <div
            className="mb-8 p-3 bg-[rgba(25,25,25,1)] border min-w-[200px]  border-gray-700 rounded-lg text-center after:bg-[rgba(25,25,25,1)] flex flex-col justify-between"
            style={{ height: "8rem" }}
          >
            <h2 className="text-xs mb-4 p2p">Your Score</h2>
            <div className="flex justify-center items-center space-x-4">
              <p className="text-sm md:text-lg font-bold p2p">
                {user.score}1450
              </p>
              <Image
                src="/coins.png"
                alt="Coins"
                width={64}
                height={64}
                className="w-12"
              />
            </div>
          </div>

          <div
            className="mb-8 p-2 min-w-[250px] bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center after:bg-[rgba(25,25,25,1)] flex justify-between flex-col"
            style={{ height: "8rem" }}
          >
            <h2 className="text-xs p2p mb-4 font-press">Challenge Progress</h2>
            <p className="text-base md:text-2xl p2p text-gray-400">
              {user.Issues?.length}/15
            </p>
            <p className="text-[0.5rem] p2p mt-4">Questions Solved</p>
          </div>

          <div
            className="p-3 bg-[rgba(25,25,25,1)] border min-w-[250px] border-gray-700 rounded-lg text-center after:bg-[rgba(25,25,25,1)] flex flex-col justify-between"
            style={{ height: "8rem" }}
          >
            <p className="mb-4 text-[0.5rem] p2p">
              If you are facing any issue on this page, please let us know.
            </p>
            <Link
              href="https://discord.gg/sSs5TCfu"
              className="bg-white/80 flex items-center gap-2 justify-center p2p text-[0.65rem] text-black py-1 lg:py-2 px-4 rounded-lg hover:bg-white transition-colors duration-200"
              type="button"
            >
              <p>Report on</p>
              <FaDiscord className="text-black text-2xl" />
            </Link>
          </div>
        </aside>
      </>
    );
  }
  return (
    <aside className=" w-full h-full p-8 bg-transparent  flex-row lg:flex-col ">
      <GlowCard
        className="mb-8 p-6 bg-[rgba(25,25,25,1)] border min-h-fit border-gray-700 rounded-lg text-center after:bg-[rgba(25,25,25,1)]"
        style={{ height: "25%" }}
      >
        <h2 className="text-sm mb-4 p2p">Your Score</h2>
        <div className="flex justify-center items-center space-x-4">
          <p className="text-xl font-bold p2p">{user.score}1450</p>
          <Image src="/coins.png" alt="Coins" width={64} height={64} />
        </div>
      </GlowCard>

      <GlowCard
        className="mb-8 p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center after:bg-[rgba(25,25,25,1)]"
        style={{ height: "35%" }}
      >
        <h2 className="text-sm p2p mb-4 font-press">Challenge Progress</h2>
        <div className="flex justify-center">
          <Image
            src="/clock.png"
            alt="Clock"
            width={100}
            height={100}
            className="w-20"
          />
        </div>
        <div>
          <p className="text-lg p2p text-gray-400">7/15</p>
          <p className="text-[0.6rem] p2p">
            Questions Solved {user.Issues?.length}
          </p>
        </div>
      </GlowCard>

      <GlowCard
        className="p-3 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center after:bg-[rgba(25,25,25,1)]"
        style={{ height: "30%", padding: "5px" }}
      >
        <h2 className="text-sm mb-4 font-press p2p">Report an Issue</h2>
        <p className="mb-4 text-[0.5rem] p2p">
          If you are facing any issue on this page, please let us know.
        </p>
        <Link
          href="https://discord.gg/sSs5TCfu"
          className="bg-white/80 flex items-center gap-2 justify-center p2p text-[0.65rem] text-black py-2 px-4 rounded-lg hover:bg-white transition-colors duration-200"
          type="button"
        >
          <p>Report on</p>
          <FaDiscord className="text-black text-2xl" />
        </Link>
      </GlowCard>
    </aside>
  );
};

export default DashboardInfographics;
