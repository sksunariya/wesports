import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import { getAllMatches } from '../../api/apiLinks/match';

const Connect = () => {
  // Define state for API data, loading status, and error messages
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchMatches = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await getAllMatches(); 
        setMatches(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const handleJoin = (matchId) => {
    // Handle join logic
    alert(`Joined match ${matchId}`);
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container px-6 py-10 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-green-600">Open Matches</h2>
        {matches.length === 0 ? (
          <div className="text-center py-10">No data found</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {matches.map((match) => (
              <div
                key={match.id}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
              >
                <img
                  src={match.profileImage}
                  alt={match.teamName}
                  className="object-cover w-24 h-24 rounded-full"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{match.teamName}</h3>
                <p className="mt-2 text-gray-600 text-center">{match.description}</p>
                <button
                  onClick={() => handleJoin(match.id)}
                  className="px-4 py-2 mt-4 font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                >
                  Join Match
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Connect;
