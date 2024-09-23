import React from "react";
import Image from 'next/image';

const Leaderboard: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-between">
            {/* Container for the Block and Mario images, along with the cloud image and text */}
            <div className="relative ml-[13rem] mr-[3rem] mt-[24.5rem]">
                {/* Cloud Image */}
                <div className="absolute -top-[22rem] left-[9rem] transform -translate-x-1/2">
                    <Image 
                        src="/LeaderBoard/Cloud.webp" 
                        alt="Left Image"
                        width={500}
                        height={500}
                        className="h-auto"
                    />
                </div>

                {/* Text for score and rank */}
                <div 
                    className="absolute -top-[15.5rem] left-[9rem] transform -translate-x-1/2 text-black text-center font-jersey"
                >
                    <div className="text-[34px] font-bold">
                        Your score: 230
                    </div>
                    <div className="text-[34px] font-bold mt-0">
                        Your rank: 13
                    </div>
                </div>

                {/* Next.js Image component for Mario.webp */}
                <div className="absolute -top-[5rem] left-[5rem]">
                    <Image
                        src="/LeaderBoard/Mario.webp"
                        alt="Second Image"
                        width={75}
                        height={75}
                        className="w-[75px] h-[90px]"
                    />
                </div>

                {/* Next.js Image component for Block.webp */}
                <Image
                    src="/LeaderBoard/Block.webp"
                    alt="Third Image"
                    width={140}
                    height={100}
                    className="w-[140px] h-auto absolute left-[3rem]"
                />
            </div>

            {/* Leaderboard text */}
            <div className="relative ml-auto mr-36 text-[110px] font-bold font-roboto-slab text-white text-right -mt-[36rem] z-10">
                Leaderboard
            </div>

            {/* White div underneath leaderboard */}
            <div 
                className="absolute top-0 left-0 right-0 mx-auto z-0 w-full h-[248px] mt-[30rem] brick-col"
            ></div>

            {/* New content below the leaderboard text */}
            <div 
                className="relative z-20 -top-[2rem] w-full max-w-[53%] h-[550px] bg-[rgba(28,32,35,1)] mt-[-10rem] ml-auto mr-[4.5rem] rounded-[20px] p-[20px] border-[4px] border-white flex flex-col justify-start"
            >
                {/* Row of 3 divs */}
                <div className="flex justify-around items-center mb-[10px]">
                    {['Rank', 'Team Name', 'Score'].map((header, index) => (
                        <div key={index} className="w-[250px] h-[80px] bg-[rgba(73,75,86,1)] rounded-[15px] flex justify-center items-center text-white font-['Roboto_Mono'] text-[30px] border-[3px] border-black">
                            {header}
                        </div>
                    ))}
                </div>

                {/* Column of 6 divs */}
                <div className="flex flex-col gap-[15px] overflow-hidden">
                    {['1 CodeCrafters 431', '1 CodeCrafters 431', '1 CodeCrafters 431', '1 CodeCrafters 431', '1 CodeCrafters 431', '1 CodeCrafters 431'].map((text, index) => {
                        const [rank, teamName, score] = text.split(' ');
                        return (
                            <div key={index} className={`w-full max-w-[755px] h-[55px] ${index === 3 ? 'bg-[rgba(21,184,121,1)]' : 'bg-[rgba(77,72,72,1)]'} rounded-[15px] flex justify-around items-center text-white font-['Roboto_Mono'] text-[25px]`}>
                                <div className="w-1/3 text-center">{rank}</div>
                                <div className="w-1/3 text-center">{teamName}</div>
                                <div className="w-1/3 text-center">{score}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
