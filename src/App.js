// src/App.js
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Keep the import for Routes and Route
import { CartProvider } from './components/Card/CartContext'; // Import CartProvider
import { loadStripe } from '@stripe/stripe-js'; // Import Stripe
import { Elements } from '@stripe/react-stripe-js'; // Import Elements
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Checkout from './pages/Checkout/Checkout';
import News from './pages/News/News';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import BgImg from './User/Images/bg-website.jpg';

const stripePromise = loadStripe('YOUR_PUBLIC_STRIPE_KEY'); // Replace with your Stripe public key

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <CartProvider>
          <Elements stripe={stripePromise}> {/* Wrap your application with Elements */}
            <Router>
              <div className="relative min-h-screen">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-fixed" 
                  style={{ backgroundImage: `url(${BgImg})` }}
                />
                <Navbar />
                <div className="relative z-10 py-4">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                  <Footer />
                </div>
              </div>
            </Router>
          </Elements>
        </CartProvider>
      )}
    </div>
  );
};

export default App;
