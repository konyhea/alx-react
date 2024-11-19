import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

// Render the App component in the "root" div
const rootApp = ReactDOM.createRoot(document.getElementById('root'));
rootApp.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Render the Notifications component in the "root-notifications" div
const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
