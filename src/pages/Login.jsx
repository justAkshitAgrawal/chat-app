import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen font-poppins heropattern-hexagons-slate-800 bg-[#272B36]">
      <div className="flex flex-col space-y-5 items-center justify-center bg-[#2F3340] py-6 px-10 shadow-xl rounded-xl">
        <h1 className="text-4xl font-semibold text-white ">DevChat</h1>
        <h1 className="text-2xl font-semibold text-white ">Login</h1>
        <form action="" className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md outline-none min-w-[18vw] "
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md outline-none "
          />

          <button className=" text-lg uppercase font-semibold text-white bg-[#3E4352] self-center py-2 px-4 rounded-md shadow-xl">
            Sign In
          </button>
        </form>
        <h1 className="text-white">New User? Sign Up</h1>
      </div>
    </div>
  );
}

export default Login;
