import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router";

const SideBar = () => {
  const data = [
    {
      title: "All tasks",
      icon: <CgNotes />,
      link:'/',
    },
    {
      title: "Important tasks",
      icon: <MdLabelImportant />,
      link:'/importantTasks',
    },
    {
      title: "Completed tasks",
      icon: <FaCheckDouble />,
      link:'/completedTasks',
    },
    {
      title: "Incompleted tasks",
      icon: <TbNotebookOff />,
      link:'/incompletedTasks',
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">Farhana Sharna</h2>
        <h4 className="mb-1 text-gray-400">farhana@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <Link
            to={items.link}
            key={i}
            className="my-2 flex items-center gap-3 hover:bg-gray-600 rounded p-2 transition-all duration-300"
          >
            <span>{items.icon}</span>
            {items.title}
          </Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 p-2 rounded w-full">Log Out</button>
      </div>
    </>
  );
};

export default SideBar;
