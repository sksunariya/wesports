import React from 'react';
import Navbar from '../common/Navbar';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-green-600">My Profile</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value="John Doe"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                value="john.doe@example.com"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Sport</label>
              <select className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option>Football</option>
                <option>Padel</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Skill Level</label>
              <select className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
