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
    </div>
  );
}

export default Home;
