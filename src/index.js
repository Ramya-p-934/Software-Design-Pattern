import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store'; // Ensure you have the store properly configured and imported

const container = document.getElementById('root');
const root = createRoot(container); // createRoot container instead of ReactDOM.render

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
