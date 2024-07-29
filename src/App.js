import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import LoginPage from './pages/Login';
import SignupPage from './pages/signup'; // Ensure casing is correct here too
import Property from './pages/property'; // Ensure casing is correct here too
import BuyPage from './pages/Buy';
import SellPage from './pages/sell';
import { PropertyProvider } from './context/propertycontext'; // Import the context provider
import RentPage from './components/rent';
import Admin from './pages/Admin';

function App() {
  return (
    <PropertyProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/property" element={<Property />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/admin" element={<Admin/>} />
          
        </Routes>
      </div>
    </PropertyProvider>
  );
}

export default App;
