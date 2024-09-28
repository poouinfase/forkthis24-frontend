import { repositories } from "@/lib/repository";
import Link from "next/link";
import React from "react";
import GlowCard from "./GlowCard";
import { IoMdArrowForward } from "react-icons/io";

const RepositoryContent = () => {
  return (
    <>
      <section className="w-full mx-auto max-w-4xl mb-5 -mt-2 ">
        <GlowCard className="border-2 hidden md:block border-gray-600 rounded-lg  p-6">
          <h2 className="text-lg lg:text-xl mb-3 text-center p2p">
            Repositories
          </h2>
          <div className="space-y-4">
            <div className="bg-black p-2 md:p-4 py-2 border border-white/30 rounded-lg flex mt-4 flex-row justify-between items-center  relative group md:mr-3 text-xs md:text-base ">
              <div className="text-white/60 flex-1 text-left hidden md:block">
                S.No.
              </div>
              <div className="text-white/60 flex-1 text-left">
                Repository name
              </div>
              <div className="text-white/60 flex-1 text-left">Tech Stack</div>
            </div>
            <div className="space-y-4 h-full md:max-h-[45vh] lg:max-h-[350px] overflow-y-auto repo-scrollbar inner-scroller pb-2">
              {repositories.map((repo, index) => (
                <Link
                  href={repo.url}
                  key={repo.name}
                  className="bg-[rgba(25,25,25,1)] p-4 border border-gray-600 rounded-lg flex flex-row justify-between items-center hover:bg-black hover:border-white relative group mr-2 text-xs md:text-base"
                >
                  <div className="text-white/80 flex-1 text-left hidden md:block">
                    {index + 1}
                  </div>
                  <div className="text-white/80 flex-1 text-left">
                    {repo.name}
                  </div>
                  <div className="text-white/80 flex-1 text-left">
                    {repo.tech}
                  </div>
                  <div className="absolute top-0 right-2 h-full w-1/2 bg-gradient-to-r from-[rgba(0,0,0,0)] to-black opacity-0 group-hover:opacity-100 ease-linear duration-200 group">
                    <IoMdArrowForward className="-rotate-45 absolute top-1/2 -translate-y-1/2 right-2 text-3xl" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </GlowCard>
        <div className="md:hidden">
          <h2 className="text-lg lg:text-xl mb-3 text-center p2p">
            Repositories
          </h2>
          <div className="space-y-4">
            <div className="bg-black p-2 md:p-4 py-2 border border-white/30 rounded-lg flex mt-4 flex-row justify-between items-center  relative group md:mr-3 text-xs md:text-base ">
              <div className="text-white/60 flex-1 text-left hidden md:block">
                S.No.
              </div>
              <div className="text-white/60 flex-1 text-left">
                Repository name
              </div>
              <div className="text-white/60 flex-1 text-left">Tech Stack</div>
            </div>
            <div className="space-y-4 h-full pb-2">
              {repositories.map((repo, index) => (
                <Link
                  href={repo.url}
                  key={repo.name}
                  className="bg-[rgba(25,25,25,1)] p-4 border border-gray-600 rounded-lg flex flex-row justify-between items-center hover:bg-black hover:border-white relative group text-xs md:text-base"
                >
                  <div className="text-white/80 flex-1 text-left hidden md:block">
                    {index + 1}
                  </div>
                  <div className="text-white/80 flex-1 text-left">
                    {repo.name}
                  </div>
                  <div className="text-white/80 flex-1 text-left">
                    {repo.tech}
                  </div>
                  <div className="absolute top-0 right-2 h-full w-1/2 bg-gradient-to-r from-[rgba(0,0,0,0)] to-black opacity-0 group-hover:opacity-100 ease-linear duration-200 group">
                    <IoMdArrowForward className="-rotate-45 absolute top-1/2 -translate-y-1/2 right-2 text-3xl" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RepositoryContent;
