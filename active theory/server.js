const express = require('express');
const path = require('path');
const https = require('https');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and set proper MIME types / headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve static assets from root directory
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.woff2')) {
      res.setHeader('Content-Type', 'font/woff2');
    } else if (filePath.endsWith('.json')) {
      res.setHeader('Content-Type', 'application/json');
    }
  }
}));

// Fallback proxy to activetheory.net for any missing asset/endpoint
app.use((req, res) => {
  const remoteUrl = `https://activetheory.net${req.url}`;
  https.get(remoteUrl, (proxyRes) => {
    if (proxyRes.statusCode === 200) {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    } else {
      // Fallback to index.html for client-side routing
      res.sendFile(path.join(__dirname, 'index.html'));
    }
  }).on('error', () => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
