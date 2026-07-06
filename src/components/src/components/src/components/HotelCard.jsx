import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col">
      <img 
        src={hotel.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'} 
        alt={hotel.name || 'Hotel Image'} 
        className="h-48 w-full object-cover"
      />
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{hotel.name || 'Unnamed Hotel'}</h3>
          <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">
            <FaStar className="text-yellow-500" />
            <span>{hotel.rating || 'N/A'}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <FaMapMarkerAlt className="mr-1" />
          <span>{hotel.location || hotel.address || 'Location unavailable'}</span>
        </div>
        
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-gray-900">${hotel.price || '0'}</span>
            <span className="text-gray-500 text-sm"> / night</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
