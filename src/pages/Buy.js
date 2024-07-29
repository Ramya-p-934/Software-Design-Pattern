import React, { useState } from 'react';
import { useProperties } from '../context/propertycontext';
import './Buy.css';

const BuyPage = () => {
  const { properties } = useProperties();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredProperties = properties.filter((property) => {
    return (
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'all' || property.type === filter)
    );
  });

  const sortedProperties = filteredProperties.sort((a, b) => {
    if (sort === 'price-asc') {
      return a.price - b.price;
    } else if (sort === 'price-desc') {
      return b.price - a.price;
    } else {
      return properties;
    }
  });

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = sortedProperties.slice(indexOfFirstProperty, indexOfLastProperty);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedProperties.length / propertiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="buy-page">
      <h1>Properties for Sale</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by address"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </select>
        <select value={sort} onChange={handleSortChange}>
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="property-cards">
        {currentProperties.map((property, index) => (
          <div className="property-card" key={index}>
            <img src={property.image} alt={`Property ${index}`} />
            <div className="property-info">
              <h3>{property.address}</h3>
              <p>{property.description}</p>
              <p>{property.price}</p>
              <button className="btn" onClick={() => handleViewDetails(property)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => handlePageChange(number)} className={number === currentPage ? 'active' : ''}>
            {number}
          </button>
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

export default BuyPage;
