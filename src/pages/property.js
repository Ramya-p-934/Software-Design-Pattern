import React from 'react';
import './property.css';
import property1 from '../assets/residential-land.jpg';
import property2 from '../assets/land 1.jpg';

 import property4 from '../assets/land 4.jpg';
 import property5 from '../assets/Home 1.jpg';
import property6 from '../assets/Home 2.jpg';
const properties = [
  {
    id: 1,
    image: property1,
    price: '$50,000',
    address: '24,Godlen colony,Coimbatore,TamilNadu.',
  },

  {
    id: 2,
    image: property2,
    price: '$750,000',
    address: '4/56 Nehru nagar,Coimbatore, TamilNadu.',
  },
 
   {
     id: 4,
     image: property4,
     price: '$1,200,000',
     address: '3/23 Royal Nagar,Madurai.',
   },
   {
     id: 5,
     image: property5,
     price: '$8,200,000',
     address: '36, Gandhi Nagar,Chennai.',
   },
   {
     id: 6,
     image: property6,
     price: '$45,200,000',
     address: '34,Shakthi Nagar,Hosur.',
   },
];

function Property() {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          <img src={property.image} alt="Property" />
          <div className="property-details">
            <h3>{property.price}</h3>
            <p>{property.address}</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Property;