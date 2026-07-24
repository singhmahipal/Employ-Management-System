import React from "react";

const Header = (props) => {
  const LogOutUser = () => {
    localStorage.setItem("LoggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {props.data ? props.data.firstName : "Admin"} 👋
        </span>
      </h1>
      <button
        className="bg-red-600 py-2 px-5 font-medium text-base rounded-sm"
        onClick={LogOutUser}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
