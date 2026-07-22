import React from "react";

const Header = ({data}) => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{data ? data.firstName : "Admin" } 👋</span>
      </h1>
      <button className="bg-red-600 py-2 px-5 font-medium text-base rounded-sm">
        Logout
      </button>
    </div>
  );
};

export default Header;
