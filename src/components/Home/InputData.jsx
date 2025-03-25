import React from "react";
import { RxCross2 } from "react-icons/rx";
const InputData = ({ inputDiv, setInputDiv }) => {
  return (
    <>
      <div
        className={`${inputDiv} top-0 left-0 bg-gray-800 opacity-50 h-screen w-full`}
      ></div>

      <div
        className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-2/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button onClick={() => setInputDiv("hidden")} className="text-2xl">
              <RxCross2 />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
          />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            placeholder="Description...... "
            className="px-3 py-2 my-3 rounded w-full bg-gray-700"
          ></textarea>
          <button className="px-3 py-2 text-black rounded text-xl font-semibold bg-blue-400">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
