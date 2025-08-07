import React, { useState } from 'react';

// The base URL for your backend API
const API_URL = 'http://localhost:8000/api';

const AIPlanner = () => {
  // State for form inputs and API response
  const [formData, setFormData] = useState({
    destination: '',
    duration: '',
    budget: '',
    interests: [],
  });
  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, options } = e.target;
    if (name === 'interests') {
      const selected = Array.from(options)
        .filter(opt => opt.selected)
        .map(opt => opt.value);
      setFormData(prev => ({ ...prev, interests: selected }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setItinerary(null);
    setLoading(true);

    try {
      // You'll need to get the userId from your auth state, for this example, we'll use a placeholder
      const userId = 'placeholder-user-id'; // Replace with a real user ID from your auth context/state

      const response = await fetch(`${API_URL}/ai/plan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Assuming you have an authentication token
          // 'Authorization': Bearer ${localStorage.getItem('token')}
        },
        body: JSON.stringify({
          userId,
          ...formData,
          // interests need to be a simple array of strings for the backend
          interests: formData.interests,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate itinerary');
      }

      // The backend returns the saved itinerary object, so we access the itineraryData
      setItinerary(data.itineraryData); 

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5 md:p-10 font-sans bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">Virtual Travel Assistant</h1>
      <p className="text-center text-gray-600 mb-8">Enter your travel details and get a personalized itinerary in seconds.</p>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="destination" className="font-semibold text-gray-700 mb-2">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder="e.g. Paris"
              required
              value={formData.destination}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="duration" className="font-semibold text-gray-700 mb-2">Duration (in days):</label>
            <input
              type="number"
              id="duration"
              name="duration"
              min="1"
              required
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="budget" className="font-semibold text-gray-700 mb-2">Budget (e.g. $1500):</label>
            <input
              type="text"
              id="budget"
              name="budget"
              placeholder="e.g. Low, Medium, High"
              required
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="interests" className="font-semibold text-gray-700 mb-2">Interests (choose multiple):</label>
            <select
              id="interests"
              name="interests"
              multiple
              required
              value={formData.interests}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            >
              <option value="food">Food</option>
              <option value="history">History</option>
              <option value="nature">Nature</option>
              <option value="art">Art</option>
              <option value="shopping">Shopping</option>
              <option value="adventure">Adventure</option>
              <option value="relaxation">Relaxation</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
        >
          {loading ? 'Generating...' : 'Generate Itinerary'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 text-center text-red-700 bg-red-100 border border-red-200 rounded-md">
          {error}
        </div>
      )}

      {itinerary && (
        <div className="itinerary bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Travel Itinerary</h2>
          {itinerary.itinerary.map((day, index) => (
            <div key={index} className="day-section mb-6 pb-6 border-b border-gray-200 last:border-b-0">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Day {day.day}</h3>
              <div className="space-y-3">
                <p><strong>Attractions:</strong> {day.activities.attractions}</p>
                <p><strong>Restaurants:</strong> {day.activities.restaurants}</p>
                <p><strong>Tips:</strong> {day.activities.tips}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default AIPlanner;