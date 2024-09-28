"use client";
import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import MainSidebar from "../components/MainSidebar";

function Resources() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Filter the resources by their type
  const youtubeResources = resourceData.filter(
    (resource) => resource.type === "youtube video"
  );
  const articleResources = resourceData.filter(
    (resource) => resource.type !== "youtube video"
  );

  const renderSection = (
    title: string,
    color: string,
    borderColor: string,
    resources: any[]
  ) => (
    <>
      <p className="text-2xl md:text-3xl mb-4 text-left w-full pl-4 font-press text-[rgba(140,142,143,1)]">
        {title}
      </p>
      <div className="flex overflow-x-auto pb-4 mb-8 px-4 hide-scrollbar">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="button-dashed-border flex-shrink-0 w-[80%] sm:w-[60%] md:w-[40%] mr-4 last:mr-0 mt-2 p-4"
          >
            <div className="bg-[rgba(10,12,14,1)] rounded-lg overflow-hidden shadow-lg flex flex-col sm:flex-row h-auto sm:h-48">
              <div className="relative w-full sm:w-1/3 h-32 sm:h-auto">
                <img src={resource.image_url} alt="Resource Image" />
              </div>
              <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl font-bold font-press ${color} mb-2 mt-2 sm:-mt-4`}
                  >
                    {resource.title}
                  </h2>
                  <p className="text-white text-xs sm:text-sm md:text-base font-roboto-mono">
                    {resource.description}
                  </p>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`w-full sm:w-3/4 px-2 py-1 ${color} text-white hover:opacity-80 font-press text-xs ${borderColor} mt-4 sm:-mb-4`}
                  >
                    View {title === "YouTube" ? "Video" : "Resource"}
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4">
        <div className="cursor-pointer" onClick={toggleSidebar}>
          <VscThreeBars size={28} color="white" />
        </div>
        <h1 className="text-3xl font-press">Resources</h1>
      </div>

      <div className="flex-1 flex">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
        <MainSidebar />
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <div className="p-4 md:p-6 text-white">
            <h1 className="text-3xl md:text-5xl mb-8 text-center font-press md:block hidden p2p">
              Resources
            </h1>
            {/* YouTube Section */}
            {renderSection(
              "YouTube",
              "text-[rgba(28,194,34,1)]",
              "border-4 border-[rgba(1,55,6,1)]",
              youtubeResources
            )}
            {/* Articles Section */}
            {renderSection(
              "Articles",
              "text-[rgba(50,69,236,1)]",
              "border-4 border-[rgba(23,33,121,1)]",
              articleResources
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;

const resourceData = [
  {
    title: "Learn Git in 20 Minutes",
    description:
      "A YouTube tutorial on learning Git, covering all essential commands and concepts in just 20 minutes.",
    url: "https://youtu.be/8JJ101D3knE?si=cgv0C2J2eU9WTn6j",
    type: "youtube video",
    image_url: "https://i.ytimg.com/vi/8JJ101D3knE/maxresdefault.jpg",
  },
  {
    title: "GitHub Tutorial For Beginners",
    description:
      "A complete guide to using GitHub for version control and collaboration on code.",
    url: "https://youtu.be/zTjRZNkhiEU?si=7g8YMabzfFSoKvPy",
    type: "youtube video",
    image_url: "https://i.ytimg.com/vi/zTjRZNkhiEU/maxresdefault.jpg",
  },
  {
    title: "Git & GitHub Crash Course For Beginners",
    description:
      "A beginner-friendly crash course on Git and GitHub, perfect for newcomers.",
    url: "https://youtu.be/Ez8F0nW6S-w?si=1v7IcnBJ0ZCK6RqT",
    type: "youtube video",
    image_url: "https://i.ytimg.com/vi/Ez8F0nW6S-w/maxresdefault.jpg",
  },
  {
    title: "Git and GitHub Documentation",
    description:
      "Comprehensive documentation on Git and GitHub provided by Chaicode.",
    url: "https://docs.chaicode.com/git-and-github/",
    type: "docs",
    image_url: "https://docs.chaicode.com/assets/images/favicon.ico",
  },
  {
    title: "GitLab Git Cheat Sheet",
    description:
      "A downloadable PDF cheat sheet for Git commands, provided by GitLab.",
    url: "https://about.gitlab.com/images/press/git-cheat-sheet.pdf",
    type: "pdf",
    image_url: "https://about.gitlab.com/images/press/git-logo.png",
  },
  {
    title: "Git and GitHub for Beginners – FreeCodeCamp",
    description:
      "A beginner's guide to understanding Git and GitHub, focusing on version control and collaboration.",
    url: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
    type: "article",
    image_url:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2020/11/cover-photo.png",
  },
];
