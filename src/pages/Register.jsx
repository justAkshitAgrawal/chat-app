import React, { useContext, useState } from "react";
import "./bg.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setError(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen font-poppins heropattern-hexagons-slate-800 bg-[#272B36]">
      <div className="flex flex-col space-y-5 items-center justify-center bg-[#2F3340] py-6 px-10 shadow-xl rounded-xl">
        <img src={logo} alt="" className="w-10 h-10" />
        <h1 className="text-4xl font-semibold text-white ">DevChat</h1>
        <h1 className="text-2xl font-semibold text-white ">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Display Name"
            required
            className="p-3 rounded-md outline-none min-w-[18vw] "
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="p-3 rounded-md outline-none "
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-3 rounded-md outline-none "
          />
          <input
            type="file"
            placeholder="Image"
            id="file"
            required
            className="hidden p-2 bg-white rounded-md outline-none "
          />
          <label
            htmlFor="file"
            className="flex items-center self-center pt-3 pb-3 gap-x-2"
          >
            {currentUser?.photoURL ? (
              <img
                src={currentUser?.photoURL}
                alt=""
                className="w-10 h-10"
              ></img>
            ) : (
              <FaRegUserCircle className="w-10 h-10 text-white cursor-pointer" />
            )}
            <span className="text-white cursor-pointer">Add an Avatar</span>
          </label>
          <button
            disabled={loading}
            className=" text-lg uppercase font-semibold text-white bg-[#3E4352] self-center py-2 px-4 rounded-md shadow-xl"
          >
            Sign Up
          </button>
          {loading && "Uploading and compressing the image. Please wait..."}
          {error && <span>Something went wrong!</span>}
        </form>
        <h1 className="text-white">
          Existing User?{" "}
          <Link to="/login" className="underline ">
            Login
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

export default Register;
