// react example
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <h1>Hello from React + Webpack!</h1>;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);