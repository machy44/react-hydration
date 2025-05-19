const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App.jsx').default; // if needed

export function renderApp() {
  return ReactDOMServer.renderToString(<App />);
}