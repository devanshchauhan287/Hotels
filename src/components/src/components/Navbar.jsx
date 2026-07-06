import React from 'react';
import { FaHotel } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold">
          <FaHotel />
          <span>DemoHotels</span>
        </div>
        <div className="hidden md:flex gap-4">
          <a href="#" className="hover:text-blue-200 transition">Home</a>
          <a href="#" className="hover:text-blue-200 transition">About</a>
          <a href="#" className="hover:text-blue-200 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
