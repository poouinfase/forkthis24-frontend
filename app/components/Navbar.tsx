"use client";
import Link from "next/link";
import Image from "next/image";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useEffect, useState, Fragment } from "react";
import Cookie from "js-cookie";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [islogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (Cookie.get("token")) {
      setIsLogged(true);
    }
  }, []);

  const handleSignOut = () => {
    Cookie.remove("token");
    setIsLogged(false);
  };

  const loginUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/github/login`;
  return (
    <nav className=" --navbar h-fit py-4 px-6 md:px-12 fixed top-0 left-0 z-[100] w-full ">
      <div
        className={`flex transition-all duration-200 ease-linear flex-col md:flex-row md:justify-between md:items-center ${
          openMenu ? "h-40 md:h-fit" : "h-9 md:h-fit"
        } overflow-hidden`}
      >
        <div className="flex flex-col md:flex-row md:items-center space-x-0  md:space-x-4 p2p text-xs md:text-sm">
          <div className="logo-placeholder w-full flex items-center justify-between mb-8 md:mb-0 z-[1000]">
            <Image
              src="/logo.svg"
              alt="forkthis"
              width={100}
              height={100}
              className="w-8 md:w-12"
            />
            {openMenu ? (
              <IoMdClose
                className="text-3xl md:hidden z-[1000] relative"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              />
            ) : (
              <IoMdMenu
                className="text-3xl md:hidden z-[1000] relative"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              />
            )}
          </div>
          <Link
            href="https://discord.gg/PtBPMhtf3f"
            className="text-white uppercase px-3 py-2 rounded hover:bg-white hover:text-black transition-all duration-200 ease-linear whitespace-nowrap"
          >
            Join Discord!
          </Link>
          {islogged && (
            <Fragment>
              <Link
                href="/dashboard"
                className="text-white uppercase px-3 py-2 rounded hover:bg-white hover:text-black transition-all duration-200 ease-linear"
              >
                Dashboard
              </Link>
              <Link
                href="/leaderboard"
                className="text-white uppercase px-3 py-2 rounded hover:bg-white hover:text-black transition-all duration-200 ease-linear"
              >
                Leaderboard
              </Link>
              <Link
                href="/resources"
                className="text-white uppercase px-3 py-2 rounded hover:bg-white hover:text-black transition-all duration-200 ease-linear"
              >
                Resources
              </Link>
              <Link
                href={
                  "https://low-liver-2c4.notion.site/Forkthis-session-110842d8956780dcac5dc6fb4c3389d0"
                }
                className="text-white uppercase px-3 py-2 rounded hover:bg-white hover:text-black transition-all duration-200 ease-linear mr-4"
              >
                Session
              </Link>
            </Fragment>
          )}
        </div>
        <div className="p2p text-sm hidden md:block">
          <Link
            href={
              "https://low-liver-2c4.notion.site/Forkthis-session-110842d8956780dcac5dc6fb4c3389d0?pvs=25"
            }
            className="text-white uppercase px-3 py-2 rounded hover:bg-white hover:text-black transition-all duration-200 ease-linear mr-4"
          >
            Session
          </Link>
          {!islogged ? (
            <Link
              href={loginUrl}
              className=" uppercase px-3 py-2 rounded bg-white text-black transition-all duration-200 ease-linear"
            >
              Login
            </Link>
          ) : (
            <button
              type="submit"
              className="text-white uppercase px-3 py-2 rounded hover:bg-white hover:text-black transition-all duration-200 ease-linear"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          )}
        </div>
      </div>
      <div className="w-full bg-white h-[2px] --nav-line absolute bottom-0 left-0" />
    </nav>
  );
};

export default Navbar;
