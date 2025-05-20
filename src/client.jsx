import React from 'react';
import { hydrateRoot } from 'react-dom/client'; // for React 18+
import App from './App.jsx';

// “Take this static HTML (already rendered by the server), and attach event listeners and state logic on top of it — without re-rendering the whole thing.”
hydrateRoot(document.getElementById('root'), <App />); 