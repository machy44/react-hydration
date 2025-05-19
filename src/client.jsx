import React from 'react';
import { hydrateRoot } from 'react-dom/client'; // for React 18+
import App from './App.jsx';

hydrateRoot(document.getElementById('root'), <App />);