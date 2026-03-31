import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Local states for storing data
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="text-gray-800 bg-gray-50 min-h-screen pb-20">
      
      {/* Navbar Section */}
      <nav className="flex justify-between items-center py-5 px-4 md:px-12 bg-white shadow-sm sticky top-0 z-50">
        
        <div className="text-3xl font-extrabold text-[#7e22ce] cursor-pointer">
          DigiTools
        </div>

        <div className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
          <a href="#" className="hover:text-[#7e22ce] transition">Products</a>
          <a href="#" className="hover:text-[#7e22ce] transition">Features</a>
          <a href="#" className="hover:text-[#7e22ce] transition">Pricing</a>
          <a href="#" className="hover:text-[#7e22ce] transition">Testimonials</a>
          <a href="#" className="hover:text-[#7e22ce] transition">FAQ</a>
        </div>

        <div className="flex items-center gap-5 md:gap-7">
          
          {/* Cart Icon */}
          <button 
            onClick={() => setActiveTab('cart')}
            className="relative text-gray-700 hover:text-[#7e22ce] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-[#7e22ce] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          </button>

          <a href="#" className="hidden md:block font-medium text-gray-700 hover:text-[#7e22ce] transition">
            Login
          </a>

          <button className="bg-[#7e22ce] text-white hover:bg-purple-800 px-6 py-2.5 rounded-full font-medium transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Toast Container for Alerts */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;