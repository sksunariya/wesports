import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import { getAllCourts } from '../../api/apiLinks/court';

const Courts = () => {
  const [courts, setCourts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await getAllCourts();
        console.log("response.data: ", response);
        // const jsonData = await response.data.json();
        // console.log("jsonData:", jsonData);
        setCourts(response);
      } catch (err) {
        setError('Failed to load courts. Please try again later.');
      }
    };

    fetchCourts();
  }, []);

  const handleBooking = async (courtId) => {
    try {
    //   PENDING: make an api call to book a court.
      alert(`Court ${courtId} booked successfully!`);
    } catch (err) {
      alert('Failed to book the court. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container px-6 py-10 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-green-600">Available Courts</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="space-y-8">
          {courts.map((court) => (
            <div
              key={court.id}
              className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md md:flex-row"
            >
              <img
                src={court.imageUrl}
                alt={court.name}
                className="object-cover w-full h-64 md:w-1/2 md:h-auto"
              />
              <div className="flex flex-col justify-between p-6 md:w-1/2">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{court.name}</h3>
                  <p className="mt-4 text-gray-600">{court.description}</p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => handleBooking(court.id)}
                    className="w-full px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courts;
