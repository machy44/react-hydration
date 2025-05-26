// server.js
const express = require('express');
const { renderApp } = require('./src/server.jsx');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

app.get('*', (req, res) => {
  const appHtml = renderApp(req);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR with Hydration</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});