import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <Link to="/" className="text-white text-2xl font-bold mb-4 inline-block">CivicSense</Link>
            <p className="mb-4">Empowering citizens for a better tomorrow.</p>
            <div className="flex space-x-4">
              <Link to="/facebook" className="hover:text-white">Facebook</Link>
              <Link to="/twitter" className="hover:text-white">Twitter</Link>
              <Link to="/linkedin" className="hover:text-white">LinkedIn</Link>
              <Link to="/instagram" className="hover:text-white">Instagram</Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Product</h5>
            <ul>
              <li><Link to="/features" className="hover:text-white">Features</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/security" className="hover:text-white">Security</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/partners" className="hover:text-white">Partners</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Resources</h5>
            <ul>
              <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/guidelines" className="hover:text-white">Community Guidelines</Link></li>
              <li><Link to="/developers" className="hover:text-white">Developers</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Newsletter</h5>
            <p className="mb-4">Stay up to date with our latest news and updates.</p>
            <form className="flex space-x-2">
              <input type="email" placeholder="Your email address" className="flex-grow px-3 py-2 rounded" />
              <button type="submit" className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>&copy; 2023 CivicSense. All rights reserved. | <Link to="/privacy" className="hover:text-white">Privacy Policy</Link> | <Link to="/terms" className="hover:text-white">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
