import React, { useState } from 'react';
import './rent.css'; // Make sure to create and include this CSS file

const RentPage = () => {
  const properties = [
    {
      id: 1,
      image: 'https://wallpaperaccess.com/full/1899390.jpg',
      address: '123 Rent St, Springfield, IL',
      price: '$1,200/month',
      description: 'A cozy apartment perfect for a small family.',
      specialOffers: 'First month free!'
    },
    {
      id: 2, 
      image: 'https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-7-1760-1000.jpg',
      address: '456 Lease Ave, Metropolis, IL',
      price: '$1,800/month',
      description: 'Spacious apartment with modern amenities.',
      specialOffers: 'Free parking for 6 months!'
    },
    {
      id: 3,
      image: 'https://uploads-cf.cdn.placester.net/images%2F55c10510b1c93c3e2300000e%2F224060035%2F224060035_1.jpg?d',
      address: '789 Tenant Dr, Gotham, IL',
      price: '$2,500/month',
      description: 'Luxury condo with a great view and amenities.',
      specialOffers: 'No security deposit!'
    },
  ];

  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="rent-page">
      <h1>Properties for Rent</h1>
      <div className="property-cards">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <img src={property.image} alt={`Property ${property.id}`} />
            <div className="property-info">
              <h3>{property.address}</h3>
              <p>{property.price}</p>
              <button className="btn" onClick={() => handleViewDetails(property)}>View Details</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedProperty.image} alt={`Property ${selectedProperty.id}`} />
            <h3>{selectedProperty.address}</h3>
            <p>{selectedProperty.price}</p>
            <p>{selectedProperty.description}</p>
            <p><strong>Special Offers:</strong> {selectedProperty.specialOffers}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentPage;