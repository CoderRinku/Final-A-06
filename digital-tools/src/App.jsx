import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      
      {/* --- Navbar Section --- */}
      <nav className="flex justify-between items-center py-5 px-6 md:px-16 bg-white sticky top-0 z-50">
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
          <button 
            onClick={() => setActiveTab('cart')}
            className="relative text-[#101727] hover:text-[#7e22ce] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-[#8b5cf6] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          </button>
          <a href="#" className="hidden md:block font-medium text-[#101727] hover:text-[#7e22ce] transition">
            Login
          </a>
          <button className="bg-[#8b5cf6] text-white hover:bg-[#7e22ce] px-7 py-2.5 rounded-full font-medium transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* --- Banner Section --- */}
      <header className="pt-16 pb-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        
        {/* Left Side: Text Content */}
        <div className="md:w-[55%] flex flex-col items-start text-left">
          
          {/* Badge - Updated to 16px (text-base) Medium (font-medium) */}
          <div className="flex items-center gap-2 bg-[#E1E7FF] text-[#8b5cf6] px-5 py-2.5 rounded-full text-base font-medium mb-6">
            <span className="w-2.5 h-2.5 bg-[#8b5cf6] rounded-full"></span> 
            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#101727] leading-[1.1] tracking-tight mb-6">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Paragraph - Updated to 18px (text-lg) Regular (font-normal) */}
          <p className="text-[#627382] text-lg font-normal max-w-xl leading-relaxed mb-10">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5">
            <button className="bg-[#8b5cf6] hover:bg-[#7e22ce] text-white font-semibold px-8 py-3.5 rounded-full transition duration-300 text-lg">
              Explore Products
            </button>
            
            <button className="flex items-center gap-2 border border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#E1E7FF] font-semibold px-8 py-3.5 rounded-full transition duration-300 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-[45%] mt-12 md:mt-0 flex justify-end">
          <img 
            src="./assets/banner.png" 
            alt="Digital Workflow Background" 
            className="w-full max-w-lg object-contain drop-shadow-2xl" 
          />
        </div>
      </header>

      {/* Toast Container for Alerts */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;