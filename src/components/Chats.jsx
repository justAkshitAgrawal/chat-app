import React from "react";

function Chats() {
  return (
    <div className="flex flex-col">
      <div className="p-4 flex items-center space-x-4 hover:bg-[#17191f] transition-all cursor-pointer">
        <img
          src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
          alt=""
          className="w-10 h-10 rounded-full "
        />
        <div className="flex flex-col items-start">
          <span>Nitika</span>
          <h1 className="text-xs">Hello</h1>
        </div>
      </div>
      <div className="p-4 flex items-center space-x-4 hover:bg-[#17191f] transition-all cursor-pointer">
        <img
          src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
          alt=""
          className="w-10 h-10 rounded-full "
        />
        <div className="flex flex-col items-start">
          <span>Nitika</span>
          <h1 className="text-xs">Hello</h1>
        </div>
      </div>
      <div className="p-4 flex items-center space-x-4 hover:bg-[#17191f] transition-all cursor-pointer">
        <img
          src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
          alt=""
          className="w-10 h-10 rounded-full "
        />
        <div className="flex flex-col items-start">
          <span>Nitika</span>
          <h1 className="text-xs">Hello</h1>
        </div>
      </div>
    </div>
  );
}

export default Chats;
