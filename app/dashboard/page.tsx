"use client";
import React, { Component, useEffect, useState } from 'react';
import Head from 'next/head';
import { FaTachometerAlt, FaTrophy, FaBook, FaSignOutAlt, FaBars } from 'react-icons/fa';

// interface DashboardState {
//     timeLeft: string;
//     score: number;
//     questionsSolved: number;
//     isNavbarOpen: boolean;
// }

interface userType {
    score: number | null;
    githubUsername: string | null;
    email: string | null;
    Issues: Array<string> | null;
    rank: number | null;
    name: string | null;
}

interface repoInterface {
    _id: string;
    name: string;
    tech: string;
    stars: number;
    repourl: string;
    issueNumber: number;
};

function Dashboard() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const logoutUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`
    console.log("HAKJSD")
    const [isNavbarOpen, setNavbar] = useState<boolean>(false)
    const toggleNavbar = () => {
        setNavbar(!isNavbarOpen);
    };

    const [timeLeft, setTimeLeft] = useState<string>(new Date().toLocaleTimeString("en-in", { hourCycle: 'h23' }));
    useEffect(() => {
        const interval = setInterval(() => {
            const endDate = new Date();
            endDate.setFullYear(2024, 9, 31);
            endDate.setHours(23, 59, 59);
            const currDate = new Date();
            setTimeLeft(new Date(+endDate - +currDate).toLocaleTimeString("en-in", { hourCycle: 'h23' }));
        }, 1000); // Update every second
        return () => clearInterval(interval); // Cleanup on unmount
    }, [])

    const [repositories, setRepositories] = useState<Array<repoInterface>>([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const backend = `${process.env.NEXT_PUBLIC_BACKEND_URL}/repo`;

                let res = await fetch(backend,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    }
                );
                if (!res) {
                    throw new Error("response not found");
                }
                const response = await res.json()
                setRepositories(response.data)
            }
            catch (e: any) {
                console.log(e)
            }
        }
        fetchUser()
    }, [])

    const [user, setUser] = useState<userType>(() => {
        return {
            score: null,
            githubUsername: null,
            email: null,
            Issues: null,
            rank: null,
            name: null,
        }
    })

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const backend = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`;

                let res = await fetch(backend,
                    {
                        method: "GET",
                        credentials: "include",
                        headers: { "Content-Type": "application/json" },
                    }
                );
                if (!res) {
                    throw new Error("response not found");
                }
                const response = await res.json()
                console.log(response)
                setUser(response)
            }
            catch (e: any) {
                console.log(e)
            }
        }
        fetchUser()
    }, [])

    return (
        <div className="flex flex-col lg:flex-row bg-black text-white h-screen">
            <Head>
                <title>Dashboard</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <aside className={`lg:w-80 p-6 bg-[rgba(10,12,14,1)] flex flex-col lg:static absolute font-press ${isNavbarOpen ? 'top-0 left-0 w-full' : 'hidden'} lg:block`}>
                <div className="mb-10 text-center lg:flex lg:flex-col lg:items-center">
                    <div className="mb-28 flex items-center justify-center space-x-0">
                        <img src="/flower.png" alt="Avatar" width={150} height={150} className="rounded-full -mr-4" />
                        <div>
                            <p className="text-lg">{user.name}</p>
                            <p className="text-sm text-gray-400 mr-1">{user.email}</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 mb-1">
                    <a href="#" className="py-3 p-6 text-white text-lg flex items-center hover:text-purple-500 transition-colors duration-200 mb-3">
                        <FaTachometerAlt className="mr-3 text-[#C8BCF6]" /> Dashboard
                    </a>
                    <a href="#" className="py-3 p-6 text-white text-lg flex items-center hover:text-purple-500 transition-colors duration-200 mb-3">
                        <FaTrophy className="mr-3 text-[#C8BCF6]" /> Leaderboard
                    </a>
                    <a href="#" className="py-3 p-6 text-white text-lg flex items-center hover:text-purple-500 transition-colors duration-200 mb-44">
                        <FaBook className="mr-3 text-[#C8BCF6]" /> Resources
                    </a>
                </nav>

                <div className="pt-10">
                    <a href={logoutUrl} className="p-6 text-white text-lg flex items-center hover:text-purple-500 transition-colors duration-200">
                        <FaSignOutAlt className="mr-3 text-[#C8BCF6]" />
                        Logout
                    </a>
                </div>
            </aside>

            <div className="lg:hidden p-4 bg-black flex justify-between items-center">
                <h1 className="text-2xl">Dashboard</h1>
                <button onClick={toggleNavbar} className="text-white text-2xl">
                    <FaBars />
                </button>
            </div>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-hidden"> {/* Removed overflow-y-auto from here */}
                <section className="flex justify-center items-center mb-10">
                    {isClient && <div className="text-center">
                        <h1 className="text-5xl mb-2 font-press -mt-5">Time Left</h1>
                        <p className="text-4xl font-bold leading-[30.5px] tracking-[0.5%] font-press" style={{ marginTop: '1rem' }}>{timeLeft}</p>
                    </div>}
                    <div className="ml-4 -mt-4">
                        <img src="/mario.png" alt="Mario" width={70} height={100} />
                    </div>
                </section>

                {/* Repositories Section */}
                <section className="w-full mx-auto max-w-4xl mb-5 -mt-5">
                    <div className="border-2 border-gray-600 rounded-lg bg-black p-6">
                        <h2 className="text-3xl mb-3 text-center font-press">Repositories</h2>
                        <div className="space-y-4 max-h-[430px] overflow-y-auto repo-scrollbar"> {/* Restricted the height and added overflow-y-auto */}
                            {repositories.map((repo, index) => (
                                <div
                                    className="bg-[rgba(25,25,25,1)] p-4 border border-gray-600 rounded-lg flex flex-col lg:flex-row justify-between items-center">
                                    <div className="text-white flex-1 text-left">{index + 1}</div>
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
            <aside className="hidden lg:block w-[20%] p-8 bg-[rgba(10,12,14,1)] border-l-2 border-gray-900 flex-col overflow-y-auto">
                <div className="mb-8 p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
                    <h2 className="text-xl mb-4 font-press">Your Score</h2>
                    <div className="flex justify-center items-center space-x-4">
                        <p className="text-lg font-bold">{user.score}</p>
                        <img src="/coins.png" alt="Coins" width={64} height={64} />
                    </div>
                </div>

                <div className="mb-8 p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
                    <h2 className="text-xl mb-4 font-press">Challenge Progress</h2>
                    <p className="text-lg">Questions Solved: {user.Issues?.length}</p>
                    <p className="text-sm text-gray-400">Fastest Solve: 5 Min 30 Sec</p>
                    <p className="text-sm text-gray-400">Longest Solve: 25 Min 30 Sec</p>
                    <div className="flex justify-center mt-4">
                        <img src="/clock.png" alt="Clock" width={48} height={48} />
                    </div>
                </div>

                <div className="p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
                    <h2 className="text-xl mb-4 font-press">Report an Issue</h2>
                    <p className="mb-4 text-sm">If you are facing any issue on this page, please let us know.</p>
                    <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-200">
                        Report
                    </button>
                </div>
            </aside>
        </div>
    );
}

export default Dashboard;
