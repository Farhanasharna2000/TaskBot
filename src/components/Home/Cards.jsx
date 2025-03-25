import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";

const Cards = ({ home,setInputDiv }) => {
  const data = [
    {
      title: "The Best Coding Channel",
      description:
        "I have to create my channel the best ever coding channel in Hindi for those who do not understand English properly.",
      status: "In Complete",
    },
    {
      title: "CPP concepts",
      description:
        "I need to clear basics of Cpp. Topics: Abstraction, Inheritance, Polymorphism, virtual functions etc.",
      status: "Complete",
    },
    {
      title: "Assignment",
      description: "My assignment on 20 March. I have to complete it.",
      status: "In Complete",
    },
    {
      title: "Projects",
      description:
        "For Project I need to see tutorials of the Code Master YouTube channel.",
      status: "In Complete",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data &&
        data.map((items, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-sm p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold">{items.title}</h3>
              <p className="text-gray-300 my-2">{items.description}</p>
            </div>
            <div className="mt-4 w-full flex items-center">
              <button
                className={`${
                  items.status === "In Complete" ? "bg-red-400" : "bg-green-700"
                } p-2 rounded`}
              >
                {items.status}
              </button>
              <div className="text-white w-3/6 flex justify-around text-2xl font-semibold p-2">
                <button>
                  <CiHeart />
                </button>
                <button>
                  <FaEdit />
                </button>
                <button>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      {home === "true" && (
        <button
        onClick={()=>setInputDiv("fixed")}
          className="bg-gray-800 rounded-sm p-4 flex flex-col justify-center items-center text-gray-300 
            hover:scale-105 hover:cursor-pointer transition-all duration-300"
        >
          <IoAddCircleSharp className="text-5xl" />
          <h2 className="text-2xl mt-4">Add Task</h2>
        </button>
      )}
    </div>
  );
};

export default Cards;
