import React from 'react';
import SideBar from '../components/Home/SideBar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div className='flex h-[98vh] gap-2'>
           <div className='border border-gray-500 rounded-xl p-4 w-1/6 flex flex-col justify-between'>
         <SideBar/>
            </div> 
            <div className='border border-gray-500 rounded-xl p-4 w-5/6'>
               <Outlet/>
            </div> 
        </div>
    );
};

export default Home;