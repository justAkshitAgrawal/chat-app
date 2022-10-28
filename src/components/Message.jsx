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
      className={`flex items-start space-x-2 ${
        message.senderId === currentUser.uid && " flex-row-reverse gap-2"
      }`}
    >
      <div className="">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-10 h-10 rounded-full "
        />
      </div>
      <div className=" bg-[#2c303d] rounded-lg max-w-sm mx-2">
        <h1 className="px-3 py-2">{message.text}</h1>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
}

export default Message;
