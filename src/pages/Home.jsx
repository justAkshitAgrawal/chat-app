import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="flex items-center justify-center h-screen font-poppins heropattern-charliebrown-slate-900 bg-[#272B36]">
      <div className="flex border-[1px] rounded-xl">
        <Sidebar />
        <Chat />
      </div>
      <div className="absolute bottom-5">
        <h1 className="p-2 text-sm text-gray-400 rounded-md bg-black/30 ">
          Made by{" "}
          <a
            href="https://akshitagrwal.dev"
            target="_blank"
            className="transition-all hover:underline"
            rel="noreferrer"
          >
            Akshit Agrawal
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Home;
