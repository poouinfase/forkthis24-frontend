"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Timeline2 = () => {
  return (
    <div className="w-full min-h-screen text-white relative pb-20">
      <div className="absolute w-full h-[2%] md:h-[8%] -top-3 md:top-0 left-0 z-[30] bg-gradient-to-b from-transparent to-black"></div>
      <div className="brick-col w-full h-[2%] md:h-[8%] -top-3 md:top-0 absolute  left-0 z-[20]"></div>

      <div className="pt-32 md:pt-52">
        <h1 className="text-2xl md:text-4xl text-center underline underline-offset-8  p2p mb-16">
          Timeline
        </h1>
        <section className="w-full px-12 flex flex-col gap-20 relative">
          <div className="w-[40vw] aspect-square bg-white/50 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[350px]"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="w-full "
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            >
              <span className="flex flex-col items-center text-lg md:text-xl text-center lg:text-2xl p2p">
                <h1>Opening Ceremony</h1>
                <p className="text-xs md:text-sm font-robotomono text-white/80">
                  22nd September 2023, 10:00 am onwards
                </p>
                <Image
                  src="/platform.png"
                  width={800}
                  height={800}
                  alt=""
                  className="w-[80%] md:w-[60%] h-auto"
                />
                <p className="text-xs md:text-sm font-robotomono w-full md:w-[60%] text-center text-[#C8BCF6] -mt-2">
                  <br />
                  Kickstarting Forkthis with a bang, setting the stage for
                  Git.Set.Fork!
                </p>
              </span>
            </motion.div>
            <div className="w-full hidden md:block"></div>
            <div className="w-full hidden md:block"></div>
            <motion.div
              className="w-full relative md:-top-24"
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            >
              <span className="flex flex-col items-center text-lg md:text-xl text-center lg:text-2xl p2p">
                <h1>Git Basics</h1>
                <p className="text-xs md:text-sm font-robotomono text-white/80">
                  22nd September 2023, 11:00 am onwards
                </p>
                <Image
                  src="/platform.png"
                  width={800}
                  height={800}
                  alt=""
                  className="w-[80%] md:w-[60%] h-auto"
                />
                <p className="text-xs md:text-sm font-robotomono w-full md:w-[60%] text-center text-[#C8BCF6] -mt-2">
                  <br />
                  Master the art of branching, committing, and merging in a
                  hands-on open source workshop.
                </p>
              </span>
            </motion.div>
            <motion.div
              className="w-full relative md:-top-24"
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            >
              <span className="flex flex-col items-center text-lg md:text-xl text-center lg:text-2xl p2p">
                <h1>Speaker Session</h1>
                <p className="text-xs md:text-sm font-robotomono text-white/80">
                  22nd September 2023, 2:00 pm onwards
                </p>
                <Image
                  src="/platform.png"
                  width={800}
                  height={800}
                  alt=""
                  className="w-[80%] md:w-[60%] h-auto"
                />
                <p className="text-xs md:text-sm font-robotomono w-full md:w-[60%] text-center text-[#C8BCF6] -mt-2">
                  <br />
                  Get inspired as industry experts share their Git journey and
                  insights.
                </p>
              </span>
            </motion.div>
            <div className="w-full hidden md:block"></div>
            <div className="w-full hidden md:block"></div>
            <motion.div
              className="w-full relative md:-top-48"
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            >
              <span className="flex flex-col items-center text-lg md:text-xl text-center lg:text-2xl p2p">
                <h1>Intro to Game</h1>
                <p className="text-xs md:text-sm font-robotomono text-white/80">
                  22nd September 2023, 4:30 pm onwards
                </p>
                <Image
                  src="/platform.png"
                  width={800}
                  height={800}
                  alt=""
                  className="w-[80%] md:w-[60%] h-auto"
                />
                <p className="text-xs md:text-sm font-robotomono w-full md:w-[60%] text-center text-[#C8BCF6] -mt-2">
                  <br />
                  Dive into the world of Git gamification, where learning meets
                  fun.
                </p>
              </span>
            </motion.div>
            <motion.div
              className="w-full relative md:-top-48"
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            >
              <span className="flex flex-col items-center text-lg md:text-xl text-center lg:text-2xl p2p">
                <h1>Online Competition</h1>
                <p className="text-xs md:text-sm font-robotomono text-white/80">
                  22nd September 2023, 6:00 pm onwards
                </p>
                <Image
                  src="/platform.png"
                  width={800}
                  height={800}
                  alt=""
                  className="w-[80%] md:w-[60%] h-auto"
                />
                <p className="text-xs md:text-sm font-robotomono w-full md:w-[60%] text-center text-[#C8BCF6] -mt-2">
                  <br />
                  Compete head-to-head in Git challenges, proving your skills in
                  real-time.
                </p>
              </span>
            </motion.div>
            <div className="w-full hidden md:block"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline2;
