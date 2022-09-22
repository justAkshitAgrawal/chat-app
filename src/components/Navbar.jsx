import React from "react";

function Navbar() {
  return (
    <div className=" font-poppins bg-[#17191f] rounded-tl-xl p-4 flex items-center justify-between">
      <span className="font-bold ">Dev Chat</span>
      <div className="flex items-center space-x-2">
        <img src="" alt="" />
        <span className="text-sm ">Akshit</span>
        <button className=" bg-[#272B36] px-2 text-sm">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
