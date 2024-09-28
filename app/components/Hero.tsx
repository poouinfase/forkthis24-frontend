import React from "react";
import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <div className="min-h-[90vh] md:min-h-screen bg-black flex flex-col justify-center items-center relative hero">
      <div className="bg-white/70 w-[50vw] aspect-square rounded-full absolute left-1/2 -translate-x-1/2 top-[-25vw] blur-[100px] md:blur-[300px]"></div>
      <p className="text-xl md:text-5xl p2p glow-text font-bold relative -top-20 z-[20] scroller">
        ForkThis&apos;24
      </p>
      <div className="w-full h-full absolute top-0 left-0 z-0 overflow-x-hidden ">
        <div className="bg-[rgba(0,0,0,0.3)] w-full h-full absolute top-0 left-0 z-[10] backdrop-blur-[2px]"></div>
        <Image
          src="/bush1.png"
          alt=""
          width={400}
          height={400}
          className="absolute bottom-[14%] w-20 md:w-32 z-[15] right-0"
        />
        <Image
          src="/bush1.png"
          alt=""
          width={400}
          height={400}
          className="absolute bottom-[14%] w-24  hidden md:block z-[5] right-48"
        />
        <Image
          src="/bush2.png"
          alt=""
          width={400}
          height={400}
          className="absolute bottom-[14%] w-12 md:w-24 z-[5] left-[35%] md:left-[28%] "
        />
        <Image
          src="/bush2.png"
          alt=""
          width={400}
          height={400}
          className="absolute bottom-[14%] w-16 md:w-32 z-[15] left-[20%]"
        />
        <Image
          src="/Timeline/tub.webp"
          alt=""
          width={400}
          height={400}
          className="absolute bottom-[14%] w-16 md:w-24 z-[12] left-1/4"
        />
        <Image
          src="/LeaderBoard/Mario.webp"
          alt=""
          width={400}
          height={400}
          className="absolute bottom-[14%] w-12 md:w-20 z-[12] left-3 md:left-10"
        />
        <Image
          src="/bush2.png"
          alt=""
          width={400}
          height={400}
          className="absolute bottom-[14%] w-48 z-[10] hidden md:block right-8 "
        />
        <Image
          src="/LeaderBoard/Cloud.webp"
          alt="Cloud"
          width={400}
          height={300}
          className="w-32 h-auto x1 absolute top-1/4 -translate-y-3/4 z-0 "
        />
        <Image
          src="/LeaderBoard/Cloud.webp"
          alt="Cloud"
          width={400}
          height={300}
          className="w-32 h-auto x1-delay -left-100 absolute top-3/4 -translate-y-1/4 z-0 "
        />
        <Image
          src="/LeaderBoard/Cloud.webp"
          alt="Cloud"
          width={400}
          height={300}
          className="w-[20%] x2-delay h-auto -left-100 absolute top-[30%] -translate-y-[70%] z-[10] "
        />
        <Image
          src="/LeaderBoard/Cloud.webp"
          alt="Cloud"
          width={400}
          height={300}
          className="w-[25%] x2 h-auto absolute top-[60%] -translate-y-[40%] z-[10] "
        />
        <Image
          src="/LeaderBoard/Cloud.webp"
          alt="Cloud"
          width={400}
          height={300}
          className="w-[25%] x3 h-auto absolute top-[55%] -translate-y-[45%] z-[10] "
        />
        <div className="brick-col w-full h-[15%] bottom-0 absolute  left-0 z-[20]"></div>
      </div>
    </div>
  );
};

export default Hero;
