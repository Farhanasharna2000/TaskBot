import React from "react";
import { Link } from "react-router";

const LogIn = () => {
  return (
    <div className=" h-[98vh] flex justify-center items-center">
      <div className="w-2/6 p-4 rounded bg-gray-800">
        <h2 className="text-2xl font-semibold">Log In</h2>
        <input
          type="username"
          name="username"
          placeholder="username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
        />
      
        <input
          type="password"
          name="password"
          placeholder="password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
        />
      <div className="w-full flex justify-between items-center">
      <button className="text-xl font-semibold bg-blue-400 text-black px-3 py-2 rounded">
          Login
        </button>
        <div className="flex items-center">

        <p className="text-gray-400">Not having an account?</p>
        <Link to='/signup' className="text-gray-400 hover:text-gray-200 ml-1">Signup</Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LogIn;
