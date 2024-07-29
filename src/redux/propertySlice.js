// src/reducers/propertySlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  properties: [],
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    addProperty(state, action) {
      state.properties.push(action.payload);
    },
    removeProperty(state, action) {
      state.properties = state.properties.filter(property => property.id !== action.payload);
    },
  },
});

export const { addProperty, removeProperty } = propertySlice.actions;
export default propertySlice.reducer;
