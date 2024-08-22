import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex space-x-4">
        <Link to="/home" className="hover:text-gray-200">Home</Link>
        <Link to="/courts" className="hover:text-gray-200">Courts</Link>
        <Link to="/connect" className="hover:text-gray-200">Connect</Link>
      </div>
      <div>
        <Link to="/profile">
          <FaUserCircle size={28} className="hover:text-gray-200" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
