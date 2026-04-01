import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (isExist) {
      toast.warning('Product is already in the cart!');
    } else {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    toast.info('Item removed from cart!');
  };

  const getBadgeStyle = (tag) => {
    if (tag === 'Best Seller') return 'bg-[#FFF5E5] text-[#FF9900]';
    if (tag === 'Popular') return 'bg-[#F3E8FF] text-[#8B5CF6]';
    if (tag === 'New') return 'bg-[#E6F4EA] text-[#34A853]';
    return 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center py-5 px-6 md:px-16 bg-white sticky top-0 z-50 shadow-sm">
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

      {/* Banner */}
      <header className="pt-16 pb-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="md:w-[55%] flex flex-col items-start text-left">
          <div className="flex items-center gap-2 bg-[#E1E7FF] text-[#8b5cf6] px-5 py-2.5 rounded-full text-base font-medium mb-6">
            <span className="w-2.5 h-2.5 bg-[#8b5cf6] rounded-full"></span> 
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#101727] leading-[1.1] tracking-tight mb-6">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[#627382] text-lg font-normal max-w-xl leading-relaxed mb-10">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <button className="bg-[#8b5cf6] hover:bg-[#7e22ce] text-white font-semibold px-8 py-3.5 rounded-full transition duration-300 text-lg">
              Explore Products
            </button>
            <button className="flex items-center gap-3 border border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#E1E7FF] font-semibold px-8 py-3.5 rounded-full transition duration-300 text-lg">
              <img src="./assets/Play.png" alt="Play Icon" className="w-5 h-5 object-contain" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="md:w-[45%] mt-12 md:mt-0 flex justify-end">
          <img src="./assets/banner.png" alt="Digital Workflow Background" className="w-full max-w-lg object-contain drop-shadow-2xl" />
        </div>
      </header>

      {/* Stats */}
      <section className="w-full bg-gradient-to-r from-[#6b3deb] via-[#8545f4] to-[#a83cf1] py-14 mt-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          <div className="flex flex-col items-center flex-1">
            <h2 className="text-4xl md:text-[44px] font-extrabold text-white mb-2 tracking-wide">50K+</h2>
            <p className="text-white/80 text-base md:text-lg font-normal">Active Users</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/25"></div>
          <div className="flex flex-col items-center flex-1">
            <h2 className="text-4xl md:text-[44px] font-extrabold text-white mb-2 tracking-wide">200+</h2>
            <p className="text-white/80 text-base md:text-lg font-normal">Premium Tools</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/25"></div>
          <div className="flex flex-col items-center flex-1">
            <h2 className="text-4xl md:text-[44px] font-extrabold text-white mb-2 tracking-wide">4.9</h2>
            <p className="text-white/80 text-base md:text-lg font-normal">Rating</p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#101727] mb-4">Premium Digital Tools</h2>
          <p className="text-[#627382] text-lg max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="flex p-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-8 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeTab === 'products' ? 'bg-[#8b5cf6] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeTab === 'cart' ? 'bg-[#8b5cf6] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  
                  {/* Updated Icon Container from Figma */}
                  <div className="w-[60px] h-[60px] rounded-full bg-white border border-[#F2F2F2] flex items-center justify-center p-3 flex-shrink-0">
                    <img src={product.icon} alt={product.name} className="w-full h-full object-contain" />
                  </div>
                  
                  {product.tag && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeStyle(product.tag)}`}>
                      {product.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#101727] mb-2">{product.name}</h3>
                <p className="text-[#627382] text-sm leading-relaxed mb-6 flex-grow">{product.description}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-extrabold text-[#101727]">${product.price}</span>
                  <span className="text-gray-400 font-medium text-sm">/{product.period === 'one-time' ? 'One-Time' : 'Mo'}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#627382] text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#34A853]">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-[#8b5cf6] hover:bg-[#7e22ce] text-white font-bold py-3.5 rounded-full transition duration-300 mt-auto"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Cart Section */}
        {activeTab === 'cart' && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <h3 className="text-2xl font-bold text-[#101727] mb-8">Your Cart</h3>
            
            {cart.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-[#627382] text-lg">Your cart is empty right now.</p>
                <button 
                  onClick={() => setActiveTab('products')} 
                  className="mt-6 text-[#8b5cf6] font-semibold hover:underline"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div>
                <div className="space-y-6 mb-10">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        
                        {/* Updated Icon Container for Cart too */}
                        <div className="w-[60px] h-[60px] rounded-full bg-white border border-[#F2F2F2] flex items-center justify-center p-3 flex-shrink-0">
                           <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                        </div>

                        <div>
                          <h4 className="font-bold text-[#101727]">{item.name}</h4>
                          <p className="text-sm text-[#627382]">{item.period === 'one-time' ? 'One-Time' : 'Monthly'}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 md:gap-6">
                        <span className="font-extrabold text-[#101727]">${item.price}</span>
                        <button 
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 font-medium text-sm transition px-2 py-1 rounded-md hover:bg-red-50"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-[#627382] text-sm font-medium mb-1">Total Amount</p>
                    <p className="text-3xl font-extrabold text-[#101727]">
                      ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      toast.success('Purchase successful! Thank you.');
                      setCart([]);
                      setActiveTab('products');
                    }}
                    className="w-full md:w-auto bg-[#8b5cf6] hover:bg-[#7e22ce] text-white font-bold px-10 py-4 rounded-full transition duration-300"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      {/* 3-Steps section */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#101727] mb-4">Get Started In 3 Steps</h2>
            <p className="text-[#627382] text-lg">Start using premium digital tools in minutes, not hours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-10 text-center relative border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-6 right-6 w-8 h-8 bg-[#8b5cf6] text-white rounded-full flex items-center justify-center font-bold text-sm">01</div>
              <div className="w-20 h-20 mx-auto bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
                <img src="./assets/user.png" alt="Create Account" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#101727] mb-3">Create Account</h3>
              <p className="text-[#627382] leading-relaxed">Sign up for free in seconds. No credit card required to get started.</p>
            </div>

            <div className="bg-white rounded-2xl p-10 text-center relative border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-6 right-6 w-8 h-8 bg-[#8b5cf6] text-white rounded-full flex items-center justify-center font-bold text-sm">02</div>
              <div className="w-20 h-20 mx-auto bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
                <img src="./assets/package.png" alt="Choose Products" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#101727] mb-3">Choose Products</h3>
              <p className="text-[#627382] leading-relaxed">Browse our catalog and select the tools that fit your needs.</p>
            </div>

            <div className="bg-white rounded-2xl p-10 text-center relative border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-6 right-6 w-8 h-8 bg-[#8b5cf6] text-white rounded-full flex items-center justify-center font-bold text-sm">03</div>
              <div className="w-20 h-20 mx-auto bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
                <img src="./assets/rocket.png" alt="Start Creating" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#101727] mb-3">Start Creating</h3>
              <p className="text-[#627382] leading-relaxed">Download and start using your premium tools immediately.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="bg-[#ffffff] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Starter Plan */}
            <div className="bg-[#F9FAFC] rounded-3xl p-8 lg:p-10 text-left">
              <h3 className="text-2xl font-bold text-[#101727] mb-2">Starter</h3>
              <p className="text-[#627382] mb-6 text-sm">Perfect for getting started</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-extrabold text-[#101727]">$0</span>
                <span className="text-[#627382] font-medium">/Month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#627382] font-medium">
                    <svg className="w-5 h-5 text-[#34A853] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#8b5cf6] hover:bg-[#7e22ce] text-white font-bold py-3.5 rounded-full transition duration-300">
                Get Started Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#8b5cf6] rounded-3xl p-8 lg:p-10 text-left relative transform md:-translate-y-4 shadow-2xl shadow-purple-900/50">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFF5E5] text-[#FF9900] px-4 py-1 rounded-full text-sm font-bold shadow-md">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 mt-2">Pro</h3>
              <p className="text-white/80 mb-6 text-sm">Best for professionals</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-extrabold text-white">$29</span>
                <span className="text-white/80 font-medium">/Month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white font-medium">
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-[#8b5cf6] hover:bg-gray-50 font-bold py-3.5 rounded-full transition duration-300">
                Start Pro Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#F9FAFC] rounded-3xl p-8 lg:p-10 text-left">
              <h3 className="text-2xl font-bold text-[#101727] mb-2">Enterprise</h3>
              <p className="text-[#627382] mb-6 text-sm">For teams and businesses</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-extrabold text-[#101727]">$99</span>
                <span className="text-[#627382] font-medium">/Month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#627382] font-medium">
                    <svg className="w-5 h-5 text-[#34A853] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#8b5cf6] hover:bg-[#7e22ce] text-white font-bold py-3.5 rounded-full transition duration-300">
                Contact Sales
              </button>
            </div>

          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#6b3deb] via-[#8545f4] to-[#a83cf1] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Updated Font Size to 40px exactly as per Figma */}
          <h2 className="text-[40px] font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" /> Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            <button className="w-full sm:w-auto bg-white text-[#8b5cf6] hover:bg-gray-50 font-bold px-8 py-3.5 rounded-full transition duration-300 shadow-lg shadow-purple-900/20">
              Explore Products
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white text-white hover:bg-white/10 font-bold px-8 py-3.5 rounded-full transition duration-300">
              View Pricing
            </button>
          </div>
          <p className="text-white/60 text-sm font-medium tracking-wide">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>


      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;