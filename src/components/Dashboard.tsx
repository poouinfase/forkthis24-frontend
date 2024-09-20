'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

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
    <div className="flex bg-black text-white h-screen overflow-hidden">
      <Head>
        <title>Dashboard</title>
      </Head>

      <aside className="w-64 p-5 bg-[rgba(10,12,14,1)] flex flex-col">
        <div className="mb-7 text-center">
          <Image src="/player1.png" alt="Player" width={50} height={50} />
          <p>Player 1</p>
          <p>pimla@gmail.com</p>
        </div>

        <div className="mt-5">
          <input type="text" placeholder="Search..." className="w-full p-2 rounded-md border-none bg-gray-700 text-white" />
        </div>

        <nav className="flex-1">
          <a href="#" className="block py-2 text-white">Dashboard</a>
          <a href="#" className="block py-2 text-white">Leaderboard</a>
          <a href="#" className="block py-2 text-white">Resources</a>
        </nav>

        <div className="text-left pt-5">
          <a href="#" className="text-white">Logout</a>
        </div>
      </aside>

      <main className="flex-1 p-2 overflow-y-auto flex flex-col">
        <section className="flex flex-col items-center mb-5">
          <div className="text-center">
            <h1 className="text-3xl mb-1">Time Left</h1>
            <p className="text-4xl">{timeLeft}</p>
          </div>

          <div className="w-full max-w-full border-2 border-white rounded-lg overflow-hidden bg-black mx-auto">
            <div className="p-4">
              <h2 className="text-xl mb-4">Repositories</h2>
              <div className="space-y-4">
                {repositories.map((repo) => (
                  <div key={repo.id} className="bg-black p-4 border border-gray-600 rounded-lg">
                    <div className="flex justify-between text-white">
                      <div className="bg-[rgba(99,95,95,1)] text-white p-2 rounded-md flex-1">{repo.id}</div>
                      <div className="bg-[rgba(99,95,95,1)] text-white p-2 rounded-md flex-1">{repo.name}</div>
                      <div className="bg-[rgba(99,95,95,1)] text-white p-2 rounded-md flex-1">{repo.tech}</div>
                      <div className="bg-[rgba(99,95,95,1)] text-white p-2 rounded-md flex-1">{repo.stars}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside className="w-64 p-4 bg-[rgba(10,12,14,1)] border-l-2 border-gray-900 flex flex-col h-full box-border">
        <div className="flex-1 bg-[rgba(10,12,14,1)] border-2 border-white rounded-lg p-4 mb-4 box-border">
          <h2 className="text-xl mb-1">Your Score</h2>
          <p className="text-lg">{score}</p>
          <Image src="/coins.png" alt="Coins" width={50} height={50} className="inline-block align-middle" />
        </div>

        <div className="flex-1 bg-[rgba(10,12,14,1)] border-2 border-white rounded-lg p-4 mb-4 box-border overflow-hidden">
          <h2 className="text-xl mb-1">Challenge Progress</h2>
          <p>Questions Solved:</p>
          <p>{questionsSolved}/15</p>
          <p>Fastest Solve:</p>
          <p>5 Min 30 Sec</p>
          <p>Longest Solve:</p>
          <p>25 Min 30 Sec</p>
        </div>

        <div className="flex-1 bg-[rgba(10,12,14,1)] border-2 border-white rounded-lg p-4 mb-4 box-border">
          <h2 className="text-xl mb-1">Report an issue</h2>
          <p>If you are facing any issue on this page please let us know.</p>
          <button className="bg-purple-900 text-white border-none rounded-md py-2 px-4 text-sm cursor-pointer">Click here</button>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
