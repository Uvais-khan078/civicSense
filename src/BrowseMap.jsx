import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BrowseMap = () => {
  const [filters, setFilters] = useState({
    category: 'All Categories',
    location: 'All Locations',
    priority: '',
    status: ''
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'All Categories',
      location: 'All Locations',
      priority: '',
      status: ''
    });
  };

  const applyFilters = () => {
    // Implement filter logic here
    console.log('Applying filters:', filters);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow mb-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-extrabold text-blue-600 text-2xl">CivicSense</Link>
            <span className="text-blue-600 font-medium">Browse Issues</span>
            <Link to="/report-issue" className="text-gray-700 hover:text-blue-600">Report Issue</Link>
            <Link to="/active-reports" className="text-gray-700 hover:text-blue-600">My Reports</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search issues or ticket ID..."
              className="rounded-md bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200 w-[250px]"
            />
            <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
              <svg width="20" height="20" className="text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            <button className="rounded-full bg-blue-600 text-white p-2 hover:bg-blue-700">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 15v-3"/>
                <circle cx="12" cy="9" r="1"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4 pb-8">
        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow p-6 w-full md:w-80 mb-2 md:mb-0">
          <h2 className="text-lg font-semibold mb-6">Filter Issues</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 text-sm">Category</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full bg-gray-100 border-none rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option>All Categories</option>
              <option>Potholes</option>
              <option>Streetlights</option>
              <option>Garbage</option>
              <option>Water/Sewage</option>
              <option>Parks</option>
              <option>Traffic</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 text-sm">Location</label>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full bg-gray-100 border-none rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option>All Locations</option>
              <option>Downtown</option>
              <option>Northside</option>
              <option>Southside</option>
              <option>Eastside</option>
              <option>Westside</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 text-sm">Priority</label>
            <div className="flex flex-col gap-1">
              {['High', 'Medium', 'Low'].map(priority => (
                <label key={priority} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="priority"
                    value={priority}
                    checked={filters.priority === priority}
                    onChange={(e) => handleFilterChange('priority', e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">{priority}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1 text-sm">Status</label>
            <div className="flex flex-col gap-1">
              {['Open', 'In Progress', 'Resolved'].map(status => (
                <label key={status} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value={status}
                    checked={filters.status === status}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">{status}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={clearFilters}
              className="flex-1 bg-gray-100 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-200"
            >
              Clear
            </button>
            <button
              onClick={applyFilters}
              className="flex-1 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 shadow"
            >
              Apply
            </button>
          </div>
        </aside>

        {/* Map Container */}
        <section className="relative flex-1 bg-white rounded-2xl shadow overflow-hidden min-h-[450px] h-[75vh]">
          {/* Replace this with your map library component (Leaflet, Mapbox, Google Maps etc.) */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-2xl">
            [Insert Map Here]
          </div>
          {/* Floating controls, optional */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <button className="bg-white shadow rounded-full p-2 hover:bg-blue-100 transition">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>
            <button className="bg-white shadow rounded-full p-2 hover:bg-blue-100 transition">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrowseMap;
