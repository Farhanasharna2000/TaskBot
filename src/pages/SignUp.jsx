import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className=" h-[98vh] flex justify-center items-center">
      <div className="w-2/6 p-4 rounded bg-gray-800">
        <h2 className="text-2xl font-semibold">Sign Up</h2>
        <input
          type="username"
          name="username"
          placeholder="username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="xyz@example.com"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
        />
        <div className="w-full flex justify-between items-center">
        <button className="text-xl font-semibold bg-blue-400 text-black px-3 py-2 rounded">
          Signup
        </button>
        <div className="flex items-center">

        <p className="text-gray-400">Already having an account?</p>
        <Link to='/login' className="text-gray-400 hover:text-gray-200 ml-1">Login</Link>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default SignUp;
