import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600">Welcome to WeSports</h1>
          <p className="mt-4 text-gray-700">
            Connect, book courts, and enjoy your favorite sports with ease.
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <Link
              to="/courts"
              className="px-6 py-3 text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              Book a Court
            </Link>
            <Link
              to="/connect"
              className="px-6 py-3 text-green-600 border border-green-600 rounded-md hover:bg-green-600 hover:text-white"
            >
              Find Matches
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
