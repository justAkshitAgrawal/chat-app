import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={`flex items-start space-x-3 ${
        message.senderId === currentUser.uid && " flex-row-reverse"
      }`}
    >
      <div className="flex flex-col items-center space-y-2">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-10 h-10 rounded-full "
        />
        <span className="text-xs ">Just Now</span>
      </div>
      <div className=" bg-[#2c303d] rounded-r-lg rounded-bl-lg mt-2 max-w-sm">
        <h1 className="p-2">{message.text}</h1>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
}

export default Message;
