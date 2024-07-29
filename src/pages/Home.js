import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import heroImage from '../assets/homepg2.png'; 
import homeImage3 from '../assets/homeimage3.jpg';
import homeImage4 from '../assets/Homeimage4.png'; // Adjust the path if necessary

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Perfect Home</h1>
          <p>Uncover the best properties with our expert assistance. Find the ideal property with our comprehensive listings.</p>
          <button className="btn">Browse Listings</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      <section className="options">
        <h2>What are you looking for?</h2>
        <div className="option-buttons">
          <Link to="/buy" className="option-btn">Purchase a Property</Link>
          <Link to="/rent" className="option-btn">Lease a Property</Link>
          <Link to="/rent" className="option-btn">Sell a Property</Link>
        </div>
      </section>

      <section className="property-listings">
        <h2>Featured Properties</h2>
        <div className="property-cards">
          <div className="property-card">
            <img src={homeImage3} alt="Property 1" />
            <div className="property-info">
              <h3>Beautiful Family Home</h3>
              <p>$50,000</p>
              <button className="btn">View Details</button>
            </div>
          </div>
          <div className="property-card">
            <img src="https://uploads-cf.cdn.placester.net/images%2F55c10510b1c93c3e2300000e%2F224060035%2F224060035_1.jpg?d" alt="Property 2" />
            <div className="property-info">
              <h3>Modern Apartment</h3>
              <p>$30,000</p>
              <button className="btn">View Details</button>
            </div>
          </div>
          <div className="property-card">
            <img src={homeImage4} alt="Property 3" />
            <div className="property-info">
              <h3>Luxury Condo</h3>
              <p>$750,000</p>
              <button className="btn">View Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Find Your New Home?</h2>
        <p>Contact us today to start your search with our dedicated team.</p>
        <button className="btn">Get in Touch</button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>We are a dedicated real estate company focused on helping you find the perfect home.</p>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: dhakshanasree1@gmail.com</p>
            <p>Phone: 1234567890</p>
          </div>
          <div className="footer-section address">
            <h2>Address</h2>
            <p>123 Real Estate St.</p>
            <p>City, State, ZIP</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
