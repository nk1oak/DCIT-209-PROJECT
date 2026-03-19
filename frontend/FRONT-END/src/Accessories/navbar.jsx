import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images_1/logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link to="/" className="flex items-center">
          <img 
            src={Logo} 
            alt="Logo" 
            className="h-15 w-15 object-cover rounded-lg"
          />
        </Link>

        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/categories" className="hover:text-blue-600">Categories</Link></li>
          <li><Link to="/brands" className="hover:text-blue-600">Brands</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>

        <div className="hidden md:flex items-center border rounded-lg px-3 py-1 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none px-2 text-sm"
          />
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-xl cursor-pointer">🛒</span>

          <button className="text-blue-600 border border-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition">
            Login
          </button>

          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>

          <button 
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          
          <ul className="flex flex-col space-y-3 font-medium text-gray-700">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link></li>
            <li><Link to="/brands" onClick={() => setMenuOpen(false)}>Brands</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>

          <div className="mt-3 border rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none text-sm"
            />
          </div>

          <div className="mt-4 flex flex-col space-y-2">
            <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition">
              Login
            </button>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}