// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Important: use 'react-dom/client'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
