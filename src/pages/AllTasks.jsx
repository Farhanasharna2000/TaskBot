import React from 'react';
import Cards from '../components/Home/Cards';
import { IoAddCircleSharp } from 'react-icons/io5';

const AllTasks = () => {
    return (
        <div>
            <div className='flex justify-end w-full px-4 py-2'>
                <button>
            <IoAddCircleSharp className="text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300" />

                </button>
            </div>
          <Cards/>
        </div>
    );
};

export default AllTasks;