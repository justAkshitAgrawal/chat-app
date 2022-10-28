import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { AiOutlineLogout } from "react-icons/ai";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className=" font-poppins bg-[#17191f] rounded-tl-xl p-4 flex items-center justify-between">
      <span className="font-bold ">Dev Chat</span>
      <div className="flex items-center space-x-3">
        <img
          src={currentUser.photoURL}
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <span className="text-base ">{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>
          <AiOutlineLogout className="w-5 h-5 " />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
