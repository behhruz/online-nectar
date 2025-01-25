import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new 'client' entry
import { BrowserRouter } from 'react-router-dom';  // Wrap the whole app with BrowserRouter
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
