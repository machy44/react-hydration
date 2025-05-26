const React = require("react");
const ReactDOMServer = require("react-dom/server");
// import { StaticRouter } from "react-router/server";
// import { StaticRouter } from "react-router-dom/server";

const App = require("./App.jsx").default;

export function renderApp(req) {
  return ReactDOMServer.renderToString(
    // <StaticRouter location={req.url} context={{}}>
      <App />
    // </StaticRouter>
  );
}
