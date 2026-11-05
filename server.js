const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Custom MIME type handling
const setCustomHeaders = (res, filePath) => {
  if (filePath.endsWith('.woff2')) {
    res.setHeader('Content-Type', 'font/woff2');
  } else if (filePath.endsWith('.woff')) {
    res.setHeader('Content-Type', 'font/woff');
  } else if (filePath.endsWith('.json')) {
    res.setHeader('Content-Type', 'application/json');
  } else if (filePath.endsWith('.js')) {
    res.setHeader('Content-Type', 'text/javascript');
  }
};

// Helper function to proxy to activetheory.net
function proxyActiveTheory(targetPath, res) {
  const remoteUrl = `https://activetheory.net${targetPath}`;
  https.get(remoteUrl, (proxyRes) => {
    if (proxyRes.statusCode === 200) {
      res.writeHead(200, proxyRes.headers);
      proxyRes.pipe(res);
    } else {
      res.status(proxyRes.statusCode).end();
    }
  }).on('error', (err) => {
    console.error('Proxy error for', targetPath, err.message);
    res.status(502).end();
  });
}

// Favicons
app.get('/favicon16-9e4401be.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'apps/web/favicon16-9e4401be.png'));
});
app.get('/favicon32-af94112f.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'apps/web/favicon32-af94112f.png'));
});

// 1. Active Theory Router
const atRouter = express.Router();

// Specific asset handling in Active Theory
atRouter.use('/assets', (req, res, next) => {
  const localPath = path.join(__dirname, 'apps/web/activetheory/assets', req.path);
  if (fs.existsSync(localPath)) {
    const stats = fs.statSync(localPath);
    // Files with exactly 5952 bytes are 404 stubs from scraping; proxy them!
    if (stats.isFile() && stats.size !== 5952) {
      setCustomHeaders(res, localPath);
      return res.sendFile(localPath);
    }
  }
  // Otherwise proxy missing or stubbed assets from activetheory.net
  proxyActiveTheory(`/assets${req.path}`, res);
});

// Serve other static files in activetheory
atRouter.use(express.static(path.join(__dirname, 'apps/web/activetheory'), {
  setHeaders: setCustomHeaders
}));

// Fallback for Active Theory routes
atRouter.use((req, res) => {
  if (req.path.startsWith('/assets/')) {
    proxyActiveTheory(req.path, res);
  } else {
    res.sendFile(path.join(__dirname, 'apps/web/activetheory/index.html'));
  }
});

app.use('/activetheory', atRouter);

// 2. Global /assets Router (Igloo assets primary, AT assets fallback, proxy fallback)
app.use('/assets', (req, res, next) => {
  const localIgloo = path.join(__dirname, 'apps/web/assets', req.path);
  if (fs.existsSync(localIgloo)) {
    const stats = fs.statSync(localIgloo);
    if (stats.isFile()) {
      setCustomHeaders(res, localIgloo);
      return res.sendFile(localIgloo);
    }
  }
  const localAT = path.join(__dirname, 'apps/web/activetheory/assets', req.path);
  if (fs.existsSync(localAT)) {
    const stats = fs.statSync(localAT);
    if (stats.isFile() && stats.size !== 5952) {
      setCustomHeaders(res, localAT);
      return res.sendFile(localAT);
    }
  }
  // Proxy to activetheory.net
  proxyActiveTheory(req.originalUrl, res);
});

// 3. Fallback: serve main merged experience
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'apps/web/index.html'));
});

app.listen(PORT, () => {
  console.log(`TOS Labs Igloo & Active Theory merged server running at http://localhost:${PORT}`);
});
