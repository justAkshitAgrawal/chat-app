import React from "react";
import "./bg.css";
import { FaRegUserCircle } from "react-icons/fa";

function Register() {
  return (
    <div className="flex items-center justify-center h-screen font-poppins heropattern-hexagons-slate-800 bg-[#272B36]">
      <div className="flex flex-col space-y-5 items-center justify-center bg-[#2F3340] py-6 px-10 shadow-xl rounded-xl">
        <h1 className="text-4xl font-semibold text-white ">DevChat</h1>
        <h1 className="text-2xl font-semibold text-white ">Register</h1>
        <form action="" className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Display Name"
            className="p-3 rounded-md outline-none min-w-[18vw] "
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md outline-none "
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md outline-none "
          />
          <input
            type="file"
            placeholder="Image"
            id="file"
            className="hidden p-2 bg-white rounded-md outline-none "
          />
          <label
            htmlFor="file"
            className="flex items-center self-center pt-3 pb-3 gap-x-2"
          >
            <FaRegUserCircle className="w-10 h-10 text-white cursor-pointer" />
            <span className="text-white cursor-pointer">Add an Avatar</span>
          </label>
          <button className=" text-lg uppercase font-semibold text-white bg-[#3E4352] self-center py-2 px-4 rounded-md shadow-xl">
            Sign Up
          </button>
        </form>
        <h1 className="text-white">Existing User? Sign In</h1>
      </div>
    </div>
  );
}

export default Register;
