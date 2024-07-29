import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { addProperty, removeProperty } from '../redux/propertySlice'; // Adjust the path according to your project structure

const Properties = () => {
  const dispatch = useDispatch();
  const properties = useSelector(state => state.property.properties);

  const handleAddProperty = () => {
    dispatch(addProperty({ id: Date.now(), name: 'New Property', location: 'Unknown' }));
  };

  const handleRemoveProperty = (id) => {
    dispatch(removeProperty(id));
  };

  return (
    <div>
      <Typography variant="h6">Properties</Typography>
      <Button variant="contained" color="primary" onClick={handleAddProperty}>
        Add Property
      </Button>
      <List>
        {properties.map((property) => (
          <ListItem key={property.id} button>
            <ListItemText
              primary={property.name}
              secondary={`Location: ${property.location}`}
            />
            <Button variant="contained" color="secondary" onClick={() => handleRemoveProperty(property.id)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Properties;
