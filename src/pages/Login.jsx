import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../logo.png";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="flex items-center h-screen justify-center font-poppins heropattern-hexagons-slate-800 bg-[#272B36]">
      <div className="flex flex-col space-y-5 items-center justify-center bg-[#2F3340] py-6 px-10 shadow-xl rounded-xl">
        <img src={logo} alt="" className="w-10 h-10" />
        <h1 className="text-4xl font-semibold text-white ">DevChat</h1>
        <h1 className="text-2xl font-semibold text-white ">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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
          {err && <span>Something went wrong</span>}
        </form>
        <h1 className="text-white">
          New User?{" "}
          <Link to="/register" className="underline ">
            Register
          </Link>
        </h1>
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

export default Login;
