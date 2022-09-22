import React from "react";
import { HiVideoCamera, HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoPersonAdd } from "react-icons/io5";
import Input from "./Input";
import Messages from "./Messages";

function Chat() {
  return (
    <div className="text-white flex flex-col justify-between font-poppins h-[70vh] w-[38vw] bg-[#373d4d] rounded-r-xl">
      <div className=" bg-[#2c303d] p-4 rounded-tr-xl flex items-center justify-between">
        <span>Nitika</span>
        <div className="flex items-center space-x-3">
          <HiVideoCamera className="w-6 h-6 cursor-pointer " />
          <IoPersonAdd className="w-5 h-5 cursor-pointer " />
          <HiOutlineDotsHorizontal className="w-6 h-6 cursor-pointer " />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
