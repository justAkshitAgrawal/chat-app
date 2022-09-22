import React from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

function Sidebar() {
  return (
    <div className="text-white font-poppins h-[70vh] w-[18vw] rounded-l-xl bg-[#20232b]">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

export default Sidebar;
