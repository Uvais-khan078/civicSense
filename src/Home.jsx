import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-4 relative z-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="font-bold text-xl font-montserrat">CivicSense</Link>
            <ul className="flex space-x-6">
              <li><Link to="/" className="font-medium hover:opacity-80">Home</Link></li>
              <li><Link to="/features" className="font-medium hover:opacity-80">Features</Link></li>
              <li><Link to="/how-it-works" className="font-medium hover:opacity-80">How it Works</Link></li>
              <li><Link to="/success-stories" className="font-medium hover:opacity-80">Success Stories</Link></li>
              <li><Link to="/contact" className="font-medium hover:opacity-80">Contact</Link></li>
            </ul>
            <Link to="/login" className="bg-white text-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-blue-100 transition">Login</Link>
          </nav>
        </div>
      </header>
    
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1500x500/007bff/ffffff?text=Cityscape_Background')] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-cyan-500/70 z-10"></div>
        <div className="relative container mx-auto px-4 z-20 max-w-7xl">
          <h1 className="text-6xl font-bold mb-3 font-montserrat leading-tight">Make Your City <br /> Better</h1>
          <p className="text-xl max-w-xl mb-8 text-white/90">Empowering citizens to improve their communities with easy reporting, real-time tracking, and community engagement.</p>
          <Link to="/get-started" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition mb-8 inline-block">Get Started Now</Link>
          <div className="bg-white/10 rounded-lg p-5 flex justify-around max-w-5xl mx-auto shadow-lg backdrop-blur-md">
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-1">8,487</div>
              <div className="text-sm opacity-80">Reports Submitted</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-1">6,244</div>
              <div className="text-sm opacity-80">Issues Resolved</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-1">1,235</div>
              <div className="text-sm opacity-80">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Civic Engagement Made Simple</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Experience seamless civic engagement with our platform designed to streamline communication and action.</p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="report-issue">    
            <div className="bg-white rounded-lg p-8 shadow hover:-translate-y-1 transition text-center">
              <span className="text-5xl text-blue-600 mb-4 inline-block">📍</span>
              <h3 className="text-xl font-semibold mb-2">Easy Reporting</h3>
              <p className="text-gray-600">Report issues like potholes, graffiti, and broken streetlights with just a few taps. Simple, intuitive, and quick.</p>
            </div></Link>  
            <Link to="active-reports">   
            <div className="bg-white rounded-lg p-8 shadow hover:-translate-y-1 transition text-center">
              <span className="text-5xl text-blue-600 mb-4 inline-block">🔍</span>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">Stay informed on the status of your reports. Receive updates and track progress from submission to resolution.</p>
            </div></Link>  
          <Link to="/map" >
            <div className="bg-white rounded-lg p-8 shadow hover:-translate-y-1 transition text-center">
              <span className="text-5xl text-blue-600 mb-4 inline-block">🗺️</span>
              <h3 className="text-xl font-semibold mb-2">Community Map</h3>
              <p className="text-gray-600">View reported issues on an interactive map. See what's happening in your neighborhood and beyond.</p>
            </div></Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple steps to make your voice heard, from reporting an issue to seeing it resolved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 relative">
            <div className="text-center max-w-xs">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-lg">1</div>
              <h4 className="text-xl font-semibold mb-2">Spot an Issue</h4>
              <p className="text-gray-600">See something that needs attention in your community.</p>
            </div>
            <div className="text-center max-w-xs">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-lg">2</div>
              <h4 className="text-xl font-semibold mb-2">Add Location</h4>
              <p className="text-gray-600">Pinpoint the exact spot and provide details about the problem.</p>
            </div>
            <div className="text-center max-w-xs">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-lg">3</div>
              <h4 className="text-xl font-semibold mb-2">Submit Report</h4>
              <p className="text-gray-600">Send your report directly to local authorities.</p>
            </div>
            <div className="text-center max-w-xs">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-lg">4</div>
              <h4 className="text-xl font-semibold mb-2">Track Progress</h4>
              <p className="text-gray-600">Receive updates and see your issue move towards resolution.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20">
            <div className="text-center">
              <div className="w-30 h-30 rounded-full bg-green-500 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4" style={{background: 'conic-gradient(#28a745 0%, #28a745 92%, #f8f9fa 92%, #f8f9fa 100%)'}}>
                <span>92%</span>
              </div>
              <p className="font-semibold">Reports Submitted</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30 rounded-full bg-cyan-500 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4" style={{background: 'conic-gradient(#17a2b8 0%, #17a2b8 89%, #f8f9fa 89%, #f8f9fa 100%)'}}>
                <span>89%</span>
              </div>
              <p className="font-semibold">Active Engagement</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30 rounded-full bg-yellow-400 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4" style={{background: 'conic-gradient(#ffc107 0%, #ffc107 77%, #f8f9fa 77%, #f8f9fa 100%)'}}>
                <span>77%</span>
              </div>
              <p className="font-semibold">Community Supported</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30 rounded-full bg-green-500 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4" style={{background: 'conic-gradient(#28a745 0%, #28a745 77%, #f8f9fa 77%, #f8f9fa 100%)'}}>
                <span>77%</span>
              </div>
              <p className="font-semibold">Resolved by City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Real-world examples of how CivicSense has transformed communities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x200/cccccc/ffffff?text=Pothole_Fixed" alt="Pothole fixed" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-blue-600">Pothole Fixed in Record Time</h4>
                <span className="block text-gray-500 mb-4">Downtown District, Cityville</span>
                <p className="text-gray-700 mb-4">Resident Sarah M. reported a hazardous pothole, which was quickly addressed by the city thanks to CivicSense.</p>
                <Link to="/story/1" className="text-blue-600 font-semibold hover:underline">Read More →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x200/cccccc/ffffff?text=Street_Light" alt="Streetlight repaired" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-blue-600">Brighter Nights: Streetlight Repair</h4>
                <span className="block text-gray-500 mb-4">Northside Neighborhood, Metropoli</span>
                <p className="text-gray-700 mb-4">After a community-wide report through CivicSense, several broken streetlights were repaired, enhancing safety.</p>
                <Link to="/story/2" className="text-blue-600 font-semibold hover:underline">Read More →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x200/cccccc/ffffff?text=Community_Garden" alt="Community garden" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-blue-600">Community Garden Revitalized</h4>
                <span className="block text-gray-500 mb-4">Green Acres Park, Pleasantville</span>
                <p className="text-gray-700 mb-4">Citizens used the platform to organize volunteers and successfully revitalized a neglected community garden.</p>
                <Link to="/story/3" className="text-blue-600 font-semibold hover:underline">Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-gray-100 py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quick Actions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Start making a difference today with these simple actions.</p>
          </div>
          <div className="flex justify-center gap-8">
            <Link to="/report-issue" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-700 transition flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <span>Report an Issue</span>
            </Link>
            <Link to="/active-reports" className="bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold shadow hover:bg-gray-50 transition flex items-center space-x-3">
              <span className="text-2xl">🔍</span>
              <span>View Active Reports</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-32">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">Join thousands of citizens improving their communities with CivicSense. Let's build better cities, together.</p>
          <Link to="/sign-up" className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold shadow hover:bg-blue-100 transition inline-block">Sign Up Now</Link>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
