// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Adjust if your CSS file has a different name
import App from './App'; // Your main App component
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Import the registration file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
serviceWorkerRegistration.register({
  onSuccess: (registration) => {
    console.log('Service Worker registered successfully:', registration);
  },
  onUpdate: (registration) => {
    console.log('Service Worker updated. Refresh to use new version.');
    // Optionally notify the user about the update
  }
});
