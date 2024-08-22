import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';

const ConnectActions = () => {
  const navigate = useNavigate();

  const handleSeeAvailableCourts = () => {
    navigate('/connect/see-available-matches');
  };

  const handleRegisterNewCourt = () => {
    navigate('/connect/createMatch');
  };

  return (
    <div>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
    
      <button
        onClick={handleSeeAvailableCourts}
        className="px-6 py-3 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        See Available Matches
      </button>
      <button
        onClick={handleRegisterNewCourt}
        className="px-6 py-3 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Create New Match
      </button>
    </div>
    </div>
  );
};

export default ConnectActions;
