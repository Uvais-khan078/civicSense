import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ActiveReports = () => {
  const [ticketId, setTicketId] = useState('');

  const trackReport = () => {
    if (!ticketId.trim()) {
      alert('Please enter a valid Ticket ID!');
      return;
    }
    // Implement your fetch or navigation logic here
    alert('Tracking Ticket: ' + ticketId);
  };

  const scanQRCode = () => {
    // Integrate QR scan logic here or show a modal
    alert('Open QR scanner!');
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <nav className="bg-white shadow mb-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-extrabold text-blue-600 text-2xl">CivicSense</Link>
            <Link to="/map" className="text-gray-700 hover:text-blue-600">Browse Issues</Link>
            <Link to="/report-issue" className="text-gray-700 hover:text-blue-600">Report Issue</Link>
            <span className="text-blue-600 font-medium">My Reports</span>
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

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-50 to-blue-100 relative">
        <div className="max-w-4xl mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">Track Your Report</h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Enter your ticket ID to see the progress of your civic issue and stay informed about resolution updates.
          </p>
          <img
            src="https://svgshare.com/i/12bJ.svg"
            alt="Cityscape"
            className="mx-auto w-full max-w-2xl opacity-80"
          />
        </div>
      </header>

      {/* Ticket Tracker Card */}
      <main className="flex flex-1 justify-center items-center py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-center text-2xl font-semibold mb-2">Enter Ticket ID</h2>
          <p className="text-center text-gray-500 mb-6">Find your ticket ID in the confirmation email or SMS</p>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter your ticket ID (e.g., CS-2024-001234)"
              value={ticketId}
              onChange={(e) => setTicketId(e.target.value)}
              id="ticketInput"
            />
            <div className="flex space-x-2">
              <button
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition transform active:scale-95"
                onClick={trackReport}
              >
                Track Report
              </button>
              <button
                className="flex items-center gap-2 border border-gray-300 py-3 px-4 rounded-md hover:bg-gray-100 transition"
                onClick={scanQRCode}
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h4V2H2v6h2V4zm12 0v2h4V2h-6v2h2zm0 12h2v2h-4v4h6v-6h-2v2zm-12 0H2v6h6v-2H4v-4zm0-8h2v4H2v-4zm16 0h4v4h-4V8zm-8 8H8v-4h4v4zm0-8V4h4v4h-4zm0 8v4h-4v-4h4z" />
                </svg>
                Scan QR Code
              </button>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
};

export default ActiveReports;
