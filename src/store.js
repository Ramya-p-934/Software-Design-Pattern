import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Adjust the path according to your project structure

const store = configureStore({
  reducer: rootReducer,
});

export default store;
