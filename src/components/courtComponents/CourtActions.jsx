import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';

const CourtActions = () => {
  const navigate = useNavigate();

  const handleSeeAvailableCourts = () => {
    navigate('/courts/see-available-courts');
  };

  const handleRegisterNewCourt = () => {
    navigate('/createCourt');
  };

  return (
    <div>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
    
      <button
        onClick={handleSeeAvailableCourts}
        className="px-6 py-3 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        See Available Courts
      </button>
      <button
        onClick={handleRegisterNewCourt}
        className="px-6 py-3 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Register New Court
      </button>
    </div>
    </div>
  );
};

export default CourtActions;
