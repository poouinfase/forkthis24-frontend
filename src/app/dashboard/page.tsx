'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaTachometerAlt, FaTrophy, FaBook, FaSignOutAlt, FaSearch } from 'react-icons/fa'; // Importing the icons
import Link from 'next/link';
/* eslint-disable @typescript-eslint/no-unused-vars */
const Dashboard: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState('05:05:05');
  const [score, setScore] = useState(5763);
  const [questionsSolved, setQuestionsSolved] = useState(7);
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'FFCS Planner', tech: 'Next.js Express MySQL', stars: 5 },
    { id: 2, name: 'FFCS Planner', tech: 'Next.js Express MySQL', stars: 5 },
    { id: 3, name: 'FFCS Planner', tech: 'Next.js Express MySQL', stars: 5 },
    { id: 4, name: 'FFCS Planner', tech: 'Next.js Express MySQL', stars: 5 },
    { id: 5, name: 'FFCS Planner', tech: 'Next.js Express MySQL', stars: 5 },
    { id: 6, name: 'FFCS Planner', tech: 'Next.js Express MySQL', stars: 5 },
  ]);

  return (
    <div className="flex bg-black text-white h-screen overflow-hidden font-roboto-mono">
      <Head>
        <title>Dashboard</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Left Sidebar */}
      <aside className="w-64 p-6 bg-[rgba(10,12,14,1)] flex flex-col">
        <div className="mb-10 text-center">
          <div className="mb-2 flex items-center justify-center space-x-4">
            <Image src="/flower.png" alt="Avatar" width={64} height={64} className="rounded-full" />
            <div>
              <p className="text-lg">Player 1</p>
              <p className="text-sm text-gray-400">pimla@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center bg-gray-700 p-2 rounded-md">
            <FaSearch className="text-gray-400 mr-2" />
            <input type="text" placeholder="Search..." className="w-full bg-transparent text-white outline-none" />
          </div>
        </div>

        <nav className="flex-1">
          <Link href="/dashboard" className="block py-3 text-white text-lg flex items-center">
            <FaTachometerAlt className="mr-3 text-[#C8BCF6]" /> Dashboard
          </Link>
          <Link href="/leaderboard" className="block py-3 text-white text-lg flex items-center">
            <FaTrophy className="mr-3 text-[#C8BCF6]" /> Leaderboard</Link>
          {/* <a href="#" className="block py-3 text-white text-lg flex items-center">
            <FaBook className="mr-3 text-[#C8BCF6]" /> Resources
          </a> */}
        </nav>

        <div className="pt-10">
          <a href="#" className="text-white text-lg flex items-center">
            <FaSignOutAlt className="mr-3 text-[#C8BCF6]" />
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Timer Section */}
        <section className="flex justify-center items-center mb-12">
          <div className="text-center">
            <h1 className="text-3xl mb-2">Time Left</h1>
            <p className="text-6xl font-bold leading-tight tracking-wider">{timeLeft}</p>
          </div>
          <div className="ml-5">
            <Image src="/mario.png" alt="Mario" width={100} height={100} />
          </div>
        </section>

        {/* Repository Section */}
        <section className="w-full mx-auto max-w-4xl mb-6">
          <div className="border-2 border-gray-600 rounded-lg bg-black p-6">
            <h2 className="text-3xl mb-3 text-center">Repositories</h2>
            <div className="space-y-4">
              {repositories.map((repo) => (
                <div key={repo.id} className="bg-[rgba(25,25,25,1)] p-4 border border-gray-600 rounded-lg flex justify-between items-center">
                  <div className="text-white flex-1 text-left">{repo.id}</div>
                  <div className="text-white flex-1 text-left">{repo.name}</div>
                  <div className="text-white flex-1 text-left">{repo.tech}</div>
                  <div className="text-white flex-1 text-left">{repo.stars}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="w-[18rem] p-8 bg-[rgba(10,12,14,1)] border-l-2 border-gray-900 flex flex-col overflow-y-auto">
        {/* Score Section */}
        <div className="mb-8 p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
          <h2 className="text-2xl mb-4">Your Score</h2>
          <div className="flex justify-center items-center space-x-4">
            <p className="text-lg font-bold">{score}</p>
            <Image src="/coins.png" alt="Coins" width={48} height={48} />
          </div>
        </div>

        {/* Challenge Progress Section */}
        <div className="mb-8 p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
          <h2 className="text-2xl mb-4">Challenge Progress</h2>
          <p className="text-lg">Questions Solved: {questionsSolved}/15</p>
          <p className="text-sm text-gray-400">Fastest Solve: 5 Min 30 Sec</p>
          <p className="text-sm text-gray-400">Longest Solve: 25 Min 30 Sec</p>
          <div className="flex justify-center mt-4">
            <Image src="/clock.png" alt="Clock" width={48} height={48} />
          </div>
        </div>

        {/* Report Issue Section */}
        <div className="p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
          <h2 className="text-2xl mb-4">Report an Issue</h2>
          <p className="mb-4 text-sm">If you are facing any issue on this page, please let us know.</p>
          <button className="bg-purple-900 text-white py-2 px-4 rounded-md">Click here</button>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;