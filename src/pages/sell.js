import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../context/propertycontext';
import './sell.css';

const SellPage = () => {
  const { addProperty } = useProperties();
  const [propertyDetails, setPropertyDetails] = useState({
    sellerName: '',
    phoneNumber: '',
    propertyAddress: '',
    propertyDescription: '',
    propertyImage: null,
    documents: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setPropertyDetails({ ...propertyDetails, [name]: files[0] });
    } else {
      setPropertyDetails({ ...propertyDetails, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert('Please sign in to upload property details.');
      navigate('/login');
      return;
    }
    // Add property to the context
    addProperty({
      ...propertyDetails,
      image: URL.createObjectURL(propertyDetails.propertyImage)
    });
    alert('Property details submitted successfully!');
    setPropertyDetails({
      sellerName: '',
      phoneNumber: '',
      propertyAddress: '',
      propertyDescription: '',
      propertyImage: null,
      documents: null,
    });
  };

  const isAuthenticated = true;

  return (
    <div className="sell-page">
      <h1>Sell Your Property</h1>
      <form className="property-form" onSubmit={handleSubmit}>
        <label>
          Seller Name:
          <input type="text" name="sellerName" value={propertyDetails.sellerName} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={propertyDetails.phoneNumber} onChange={handleChange} required />
        </label>
        <label>
          Property Address:
          <input type="text" name="propertyAddress" value={propertyDetails.propertyAddress} onChange={handleChange} required />
        </label>
        <label>
          Property Description:
          <textarea name="propertyDescription" value={propertyDetails.propertyDescription} onChange={handleChange} required />
        </label>
        <label>
          Property Image:
          <input type="file" name="propertyImage" onChange={handleChange} required />
        </label>
        <label>
          Documents:
          <input type="file" name="documents" onChange={handleChange} required />
        </label>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default SellPage;