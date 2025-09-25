import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    photo: null,
    category: '',
    location: '',
    description: '',
    priority: '',
    name: '',
    phone: ''
  });

  const photoInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      photo: file
    }));
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData(prev => ({
          ...prev,
          location: `Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`
        }));
      });
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category || !formData.location) {
      alert('Please fill required fields');
      return;
    }
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Report submitted successfully!');
    // Reset form
    setFormData({
      photo: null,
      category: '',
      location: '',
      description: '',
      priority: '',
      name: '',
      phone: ''
    });
    if (photoInputRef.current) {
      photoInputRef.current.value = null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow mb-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-extrabold text-blue-600 text-2xl">CivicSense</Link>
            <Link to="/map" className="text-gray-700 hover:text-blue-600">Browse Issues</Link>
            <span className="text-blue-600 font-medium">Report Issue</span>
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

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8">
        <div className="container mx-auto px-4">
        <div className="bg-white border border-gray-200 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="p-6">
            <h2 className="text-xl font-semibold">Report an Issue</h2>
            <p className="text-sm text-gray-600">Help us improve your community</p>
          </div>
          <div className="p-6 pt-0">
            <form id="report-form" className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Photo/Video</label>
                <div className="border-2 border-dashed border-gray-300 p-8 text-center rounded-lg cursor-pointer" onClick={() => photoInputRef.current && photoInputRef.current.click()}>
                  <div className="text-4xl mb-4">📷</div>
                  <p className="text-gray-500 mb-4">{formData.photo ? formData.photo.name : 'Click to upload media'}</p>
                  <input
                    type="file"
                    id="photo-input"
                    accept="image/*,video/*"
                    className="hidden"
                    ref={photoInputRef}
                    onChange={handlePhotoChange}
                  />
                  <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-md text-sm font-medium" onClick={() => photoInputRef.current && photoInputRef.current.click()}>
                    Choose File
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Issue Type *</label>
                <select
                  id="category"
                  name="category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select category</option>
                  <option value="pothole">Potholes</option>
                  <option value="streetlight">Streetlights</option>
                  <option value="garbage">Garbage</option>
                  <option value="water">Water/Sewage</option>
                  <option value="parks">Parks</option>
                  <option value="traffic">Traffic</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <div className="flex gap-2">
                  <input
                    id="location"
                    name="location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                    placeholder="123 Main St"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                  <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-md text-sm font-medium" onClick={getLocation}>📍</button>
                </div>
                <p className="text-sm text-gray-500">GPS auto-detected</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical min-h-[6rem]"
                  placeholder="Describe the issue..."
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="">Select priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name (Optional)</label>
                  <input
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 rounded-md text-base font-medium w-full">Submit Report</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;
