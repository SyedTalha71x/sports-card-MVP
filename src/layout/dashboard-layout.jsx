/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/sidebar';
import ProfileSVG from '../../public/PROFILE.svg'

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col lg:mt-[8%] mt-[15%]">
    <div className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-5xl hero_h1 text-center flex justify-center items-center flex-col mb-2"> <img src={ProfileSVG} alt="" />My Account</h1>
      <p className="text-center text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 min-h-[calc(100vh-300px)]">
        <DashboardSidebar />
        <main className="flex-1 h-full  overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  </div>
  );
};

export default DashboardLayout