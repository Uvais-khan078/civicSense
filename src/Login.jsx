import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    if (username === 'staff1' && password === '1234') {
      alert('Login successful!');
      navigate('/dashboard'); // Redirect to Dashboard page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="font-['Poppins'] m-0 p-0 flex justify-center items-center min-h-screen bg-[radial-gradient(circle_at_70%_30%,#2980b9_0%,#0F2D4E_100%)] text-[#2c3e50]">
      <div className="bg-white rounded-[18px] shadow-2xl w-[90%] max-w-[420px] p-12.5 text-center transition-transform duration-300 hover:-translate-y-1">
        <header className="mb-10">
          <h1 className="text-[2.5rem] text-[#0F2D4E] m-0 font-extrabold tracking-[-0.025em]">
            CivicSense <span className="block text-[0.85rem] text-[#00BFFF] font-semibold tracking-[0.25em] mt-1.5 uppercase">PORTAL</span>
          </h1>
          <p className="text-[#555] mt-1.5 text-[0.95rem]">Your city's road management dashboard.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="text-left mb-6.25">
            <label htmlFor="username" className="block mb-1.5 font-medium text-[#0F2D4E] text-[0.9rem]">Staff ID or Email</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="e.g., staff.johnson@cityhall.gov"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3.75 border border-gray-300 rounded-lg box-border text-base text-[#2c3e50] transition-all duration-300 focus:border-[#00BFFF] focus:shadow-[0_0_10px_rgba(0,191,255,0.4)] focus:outline-none focus:bg-[#E0F7FF]"
            />
          </div>
          <div className="text-left mb-6.25">
            <label htmlFor="password" className="block mb-1.5 font-medium text-[#0F2D4E] text-[0.9rem]">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3.75 border border-gray-300 rounded-lg box-border text-base text-[#2c3e50] transition-all duration-300 focus:border-[#00BFFF] focus:shadow-[0_0_10px_rgba(0,191,255,0.4)] focus:outline-none focus:bg-[#E0F7FF]"
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-[#00BFFF] to-[#0099cc] text-white border-none rounded-lg text-[1.1rem] font-bold cursor-pointer shadow-[0_4px_15px_rgba(0,191,255,0.4)] transition-all duration-300 mt-3.75 tracking-[0.025em] hover:from-[#0099cc] hover:to-[#0077aa] hover:shadow-[0_8px_20px_rgba(0,191,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_10px_rgba(0,191,255,0.4)]"
          >ACCESS DASHBOARD</button>
          <a
            href="#"
            className="block mt-6.25 text-[#0F2D4E] no-underline text-[0.85rem] font-medium opacity-80 transition-all duration-300 hover:text-[#00BFFF] hover:underline hover:opacity-100"
          >Need assistance? Contact your department administrator.</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
