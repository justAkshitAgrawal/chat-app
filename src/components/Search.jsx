import React from "react";

function Search() {
  return (
    <div className="border-b-[1px]">
      <div className="p-4">
        <input
          type="text"
          placeholder="Find a Dev"
          className="w-full text-sm bg-transparent outline-none"
        />
      </div>
      <div className="p-4 flex items-center space-x-4 hover:bg-[#17191f] transition-all cursor-pointer">
        <img
          src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
          alt=""
          className="w-10 h-10 rounded-full "
        />
        <div>
          <span>Nitika</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
