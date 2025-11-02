// Importing the necessary modules and styles
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './app/globals.css';



// Rendering the main application component into the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
