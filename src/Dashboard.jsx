import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/login');
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="font-['Poppins'] m-0 p-0 bg-[#F4F7F9] flex text-[#2c3e50] min-h-screen">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={closeSidebar}></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-[80vw] max-w-[310px] h-screen md:w-[280px] bg-[#0F2D4E] text-white p-[30px_20px] shadow-[4px_0_15px_rgba(0,0,0,0.3)] flex flex-col z-20 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="text-[2rem] font-extrabold mb-10 tracking-[-0.025em] text-[#00BFFF] text-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">CivicSense</div>
        <nav className="flex-1">
          <Link to="/dashboard" className="flex items-center gap-2.5 p-[14px_15px] m-[5px_0] text-[#E0F7FF] no-underline rounded-lg transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:text-white font-medium text-[0.95rem]" onClick={closeSidebar}>
            <span>🏠</span> Dashboard
          </Link>
          <a href="#" className="flex items-center gap-2.5 p-[14px_15px] m-[5px_0] text-white no-underline rounded-lg bg-[#00BFFF] font-bold border-l-[5px] border-white shadow-[0_4px_12px_rgba(0,191,255,0.3)]" onClick={closeSidebar}>
            <span>📈</span> Analytics & Reports
          </a>
          <a href="#" className="flex items-center gap-2.5 p-[14px_15px] m-[5px_0] text-[#E0F7FF] no-underline rounded-lg transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:text-white font-medium text-[0.95rem]" onClick={closeSidebar}>
            <span>🛠</span> Report Management
          </a>
          <a href="#" className="flex items-center gap-2.5 p-[14px_15px] m-[5px_0] text-[#E0F7FF] no-underline rounded-lg transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:text-white font-medium text-[0.95rem]" onClick={closeSidebar}>
            <span>👥</span> Staff & Teams
          </a>
          <a href="#" className="flex items-center gap-2.5 p-[14px_15px] m-[5px_0] text-[#E0F7FF] no-underline rounded-lg transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:text-white font-medium text-[0.95rem]" onClick={closeSidebar}>
            <span>⚙</span> Settings
          </a>
        </nav>
        <div className="mt-auto pt-5 border-t border-[rgba(255,255,255,0.1)]">
          <a href="#" onClick={handleLogout} className="block text-[#E0F7FF] p-[10px_15px] text-center no-underline">Log Out</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-[280px] w-full md:w-[calc(100%-280px)] box-border p-0">
        {/* Top Bar */}
        <div className="bg-white p-[15px_20px] md:p-[20px_40px] shadow-[0_2px_5px_rgba(0,0,0,0.08)] flex justify-between items-center border-b-[3px] border-[#3498db] mb-[30px] relative z-10">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-2xl text-[#0F2D4E] focus:outline-none" 
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              ☰
            </button>
            <div>
              <h1 className="text-[#0F2D4E] m-0 text-[1.8rem] font-bold">Official Analytics & Reporting</h1>
              <p className="text-[#7f8c8d] m-[5px_0_0] text-[0.9rem]">Data validated by Municipal Planning Department</p>
            </div>
          </div>
          <div className="text-[#0F2D4E] font-semibold p-[8px_15px] bg-[#E0F7FF] rounded-lg">Admin User | **[City Name]**</div>
        </div>

        <div className="p-[15px_20px] md:p-[0_40px_40px_40px]">
          {/* KPI Section */}
          <section className="mb-[50px]">
            <h2 className="text-[#0F2D4E] text-[1.8rem] font-semibold border-b-[3px] border-[#00BFFF] pb-2.5 mb-[30px]">Performance Metrics</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[30px]">
              <div className="bg-white p-[30px] rounded-[15px] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-l-[6px] border-transparent relative overflow-hidden">
                <div className="absolute top-1/2 right-[15px] -translate-y-1/2 text-[4rem] opacity-10">∑</div>
                <h3 className="text-[1.1rem] text-[#2c3e50] mt-0 font-semibold opacity-80">Total Reported Damages</h3>
                <div className="text-[3rem] font-extrabold m-[10px_0_5px]">1,452</div>
                <p className="text-[#2ecc71] font-semibold">+8.5% <span className="font-normal">from last month</span></p>
              </div>
              <div className="bg-white p-[30px] rounded-[15px] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-l-[6px] border-[#f39c12] relative overflow-hidden">
                <div className="absolute top-1/2 right-[15px] -translate-y-1/2 text-[4rem] opacity-10">⏱</div>
                <h3 className="text-[1.1rem] text-[#2c3e50] mt-0 font-semibold opacity-80">Avg. Resolution Time</h3>
                <div className="text-[3rem] font-extrabold m-[10px_0_5px] text-[#f39c12]">4.2 Days</div>
                <p className="text-[#e74c3c] font-semibold">+0.5 Day <span className="font-normal">increase (SLA risk)</span></p>
              </div>
              <div className="bg-white p-[30px] rounded-[15px] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-l-[6px] border-[#2ecc71] relative overflow-hidden">
                <div className="absolute top-1/2 right-[15px] -translate-y-1/2 text-[4rem] opacity-10">✅</div>
                <h3 className="text-[1.1rem] text-[#2c3e50] mt-0 font-semibold opacity-80">Compliance Rate</h3>
                <div className="text-[3rem] font-extrabold m-[10px_0_5px] text-[#2ecc71]">89%</div>
                <p className="text-[#2ecc71] font-semibold">Target Met <span className="font-normal">(within 7 Days)</span></p>
              </div>
              <div className="bg-white p-[30px] rounded-[15px] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-l-[6px] border-[#e74c3c] relative overflow-hidden">
                <div className="absolute top-1/2 right-[15px] -translate-y-1/2 text-[4rem] opacity-10">❗</div>
                <h3 className="text-[1.1rem] text-[#2c3e50] mt-0 font-semibold opacity-80">Critical Open Potholes</h3>
                <div className="text-[3rem] font-extrabold m-[10px_0_5px] text-[#e74c3c]">345</div>
                <p className="text-[#e74c3c] font-semibold">Highest Priority <span className="font-normal">backlog</span></p>
              </div>
            </div>
          </section>

          {/* Hotspot Section */}
          <section className="mb-[50px]">
            <h2 className="text-[#0F2D4E] text-[1.8rem] font-semibold border-b-[3px] border-[#00BFFF] pb-2.5 mb-[30px]">Hotspot Analysis & Visuals</h2>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[30px]">
              <div className="bg-white p-[30px] rounded-[15px] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:scale-[1.01]">
                <h2 className="text-[#0F2D4E] mt-0 text-[1.4rem] font-semibold border-b-[2px] border-[#E0F7FF] pb-2.5 mb-5">Damage Density Map (High-Risk Zones)</h2>
                <div className="min-h-[400px] bg-gradient-to-br from-[#a8dadc] to-[#457b9d] rounded-[10px] flex justify-center items-center text-white text-[1.2rem] font-semibold text-shadow-[1px_1px_4px_rgba(0,0,0,0.4)] relative">
                  Interactive Geo-Data Map (Simulated)
                  <span className="absolute bottom-[15px] right-[15px] text-[0.7rem] font-normal opacity-70">Dynamic Data Feed Required (JS)</span>
                </div>
              </div>
              <div className="bg-white p-[30px] rounded-[15px] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:scale-[1.01]">
                <h2 className="text-[#0F2D4E] mt-0 text-[1.4rem] font-semibold border-b-[2px] border-[#E0F7FF] pb-2.5 mb-5">Report Type Breakdown</h2>
                <div className="min-h-[400px] bg-gradient-to-b from-[#E0F7FF] to-white rounded-[10px] flex justify-center items-center text-[#0F2D4E] text-[0.9rem] font-semibold relative">
                  Dynamic Bar Chart Placeholder
                  <span className="absolute bottom-[15px] right-[15px] text-[0.7rem] font-normal opacity-70">Dynamic Data Feed Required (JS)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Export Section */}
          <section className="bg-white p-[30px] rounded-[15px] shadow-[0_8px_20px_rgba(0,0,0,0.05)] border border-[#E0F7FF] mb-[50px]">
            <h2 className="text-[#0F2D4E] text-[1.6rem] font-semibold mt-0">Official Report Generation</h2>
            <p className="text-[#777] mb-[15px]">Select parameters to generate an official, signed report for review or dissemination.</p>
            <form className="flex flex-col md:flex-row gap-[25px] items-center mt-[25px]">
              <select name="report_type" className="p-3 rounded-lg border border-[#c0c0c0] text-base min-w-0 md:min-w-[220px] w-full md:w-auto transition-all duration-300 bg-white focus:border-[#3498db] focus:shadow-[0_0_0_2px_rgba(52,152,219,0.2)] focus:outline-none">
                <option value="monthly">Monthly Performance Summary (Audited)</option>
                <option value="hotspot">Pothole Hotspot Data (GeoJSON/CSV)</option>
                <option value="detailed">All Open Reports (Detailed XLSX)</option>
                <option value="annual">Annual Infrastructure Summary</option>
              </select>
              <select name="date_range" className="p-3 rounded-lg border border-[#c0c0c0] text-base min-w-0 md:min-w-[220px] w-full md:w-auto transition-all duration-300 bg-white focus:border-[#3498db] focus:shadow-[0_0_0_2px_rgba(52,152,219,0.2)] focus:outline-none">
                <option value="last_30">Last 30 Days</option>
                <option value="last_90">Last 90 Days</option>
                <option value="q1">Q1 (Jan-Mar) Fiscal Year</option>
                <option value="custom">Custom Date Range</option>
              </select>
              <button type="submit" className="p-[14px_30px] bg-[#2ecc71] text-white border-none rounded-lg text-[1.05rem] font-bold cursor-pointer shadow-[0_4px_10px_rgba(46,204,113,0.3)] transition-all duration-300 hover:bg-[#27ae60] hover:-translate-y-0.5 hover:shadow-[0_6px_15px_rgba(46,204,113,0.4)] w-full md:w-auto">Download Official Report</button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
