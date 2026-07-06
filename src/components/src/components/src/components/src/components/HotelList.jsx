import React from 'react';
import HotelCard from './HotelCard';

const HotelList = ({ hotels }) => {
  if (!hotels || hotels.length === 0) {
    return <div className="text-center text-gray-500 mt-10">No hotels found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {hotels.map((hotel, index) => (
        <HotelCard key={hotel.id || index} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
