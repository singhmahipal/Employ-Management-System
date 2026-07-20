import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          action=""
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="outline-none border-2 rounded-full border-emerald-600 bg-transparent text-xl px-3 py-5 placeholder:text-grey-400"
            placeholder="enter your email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="outline-none border-2 rounded-full mt-3 border-emerald-600 bg-transparent text-xl px-3 py-5 placeholder:text-grey-400"
            placeholder="enter password"
            required
          />
          <button className="w-full border-none bg-emerald-600 mt-5 outline-none rounded-full text-xl px-3 py-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
