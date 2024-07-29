import React, { createContext, useState, useContext } from 'react';

const PropertyContext = createContext();

const initialProperties = [
  {
    id: 1,
    image: 'https://cdn.prod.website-files.com/620ec747459e13c7cf12a39e/625b10a58137b364b18df2ea_iStock-94179607.jpg',
    address: '123 Main St, Springfield, IL',
    price: '$500,000',
    description: 'A beautiful family home with spacious rooms and a lovely garden.',
    specialOffers: '10% off for first-time buyers!'
  },
  {
    id: 2,
    image: 'https://photos.zillowstatic.com/fp/533f76f5299056a7074b7f69c92e1ef9-p_e.jpg',
    address: '456 Oak St, Metropolis, IL',
    price: '$300,000',
    description: 'Modern apartment in the heart of the city with stunning views.',
    specialOffers: '5% discount on cash payment!'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJ19wzH8GG0V5Jc0AamfHLMMFxrm0qGq1zhoMAtPwHMsuDiSSY7vKu0S0oP0St7PmaCU&usqp=CAU.jpg',
    address: '789 Pine St, Gotham, IL',
    price: '$750,000',
    description: 'Luxury condo with all amenities and a great neighborhood.',
    specialOffers: 'Free home insurance for one year!'
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsF5iH38F1Ux7RxPAc19ZtBq2qumtdFG9aQ&s.jpg',
    address: '45 Elm St, Springfield, IL',
    price: '$1000,000',
    description: 'Charming cottage with a beautiful garden.',
    specialOffers: 'Free home insurance for two year!'
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsF5iH38F1Ux7RxPAc19ZtBq2qumtdFG9aQ&s.jpg',
    address: '45 Elm St, Springfield, IL',
    price: '$1000,000',
    description: 'Charming cottage with a beautiful garden.',
    specialOffers: 'Free home insurance for two year!'
  },
  {
    id: 6,
    image: 'https://d1ja9tyo8nbkbc.cloudfront.net/49619923_S0044/S0044/S0044-R0100/1075893601/1694818490.jpg?version=1717107050&width=640',
    address: '123 Maple Ave, Rivertown, NY',
    price: '$1200,000',
    description: 'Modern apartment with city views.',
    specialOffers: 'One month free rent with a 12-month lease!'
  },
];

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState(initialProperties);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  return (
    <PropertyContext.Provider value={{ properties, addProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperties = () => useContext(PropertyContext);