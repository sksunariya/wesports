import React from 'react';
import { useNavigate } from 'react-router-dom';

const sports = [
  {
    name: 'Football',
    image: '/assets/images/football.jpg',
  },
  {
    name: 'Padel',
    image: '/assets/images/padel.jpg',
  },
  // Add more sports as needed
];

const SportsChoice = () => {
  const navigate = useNavigate();

  const handleSportSelection = (sport) => {
    // Save selected sport to state or context
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {sports.map((sport) => (
          <div
            key={sport.name}
            onClick={() => handleSportSelection(sport.name)}
            className="cursor-pointer group"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={sport.image}
                alt={sport.name}
                className="object-cover w-full h-48 transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-center text-gray-800 group-hover:text-green-600">
              {sport.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsChoice;
