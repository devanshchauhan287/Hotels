import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import HotelList from './components/HotelList';
import Loader from './components/Loader';

function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('https://demohotelsapi.pythonanywhere.com/hotels/');
        // Check if API returns an array directly or inside a 'data' key
        const hotelData = Array.isArray(response.data) ? response.data : response.data.hotels || [];
        setHotels(hotelData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch hotels. Please try again later.');
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  // Make it interactive by adding a search filter
  const filteredHotels = hotels.filter(hotel => {
    const hotelName = hotel.name ? hotel.name.toLowerCase() : '';
    return hotelName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Featured Hotels</h1>
          <input 
            type="text" 
            placeholder="Search hotels..." 
            className="w-full md:w-72 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading && <Loader />}
        {error && <div className="text-red-500 text-center bg-red-100 p-4 rounded-lg">{error}</div>}
        {!loading && !error && <HotelList hotels={filteredHotels} />}
      </main>
    </div>
  );
}

export default App;
