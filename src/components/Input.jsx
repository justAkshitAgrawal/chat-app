import React from "react";
import { IoAttachOutline } from "react-icons/io5";
import { BiImageAdd } from "react-icons/bi";

function Input() {
  return (
    <div className="flex items-center p-4 bg-white/20 rounded-br-xl ">
      <input
        type="text"
        placeholder="Type something..."
        className="w-full bg-transparent outline-none"
      />
      <div className="flex items-center space-x-2 ">
        <IoAttachOutline className="w-6 h-6" />
        <input type="file" className="hidden " id="file" />
        <label htmlFor="file">
          <BiImageAdd className="w-6 h-6 cursor-pointer" />
        </label>
        <button className="px-2 py-1 rounded-lg bg-black/20">Send</button>
      </div>
    </div>
  );
}

export default Input;
