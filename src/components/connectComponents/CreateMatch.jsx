import React, { useState } from 'react';
import { createMatch } from '../../api/apiLinks/match';
import { useNavigate } from 'react-router-dom';

const CreateMatch = () => {
  const [sport, setSport] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Prepare the data to send
    const matchData = {
      sport,
      location,
      time,
      description,
    };

    try {
      const token = localStorage.getItem('token');
      const response = await createMatch(matchData, token);
      setSuccess('Match created successfully!');
      setError('');
      
      
      navigate('/connect/see-available-matches'); 
    } catch (err) {
      setError(err.message || 'Failed to create match. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-600">Create a New Match</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sport</label>
            <input
              type="text"
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Soccer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Stadium A"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="datetime-local"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Match details"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          {success && <p className="text-sm text-green-500">{success}</p>}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none"
            >
              Create Match
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMatch;
