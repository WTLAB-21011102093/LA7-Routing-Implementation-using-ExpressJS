const express = require('express');
const app = express();
const port = 3000;

// Serve static files (CSS, images, etc.) from a 'public' directory
app.use(express.static('public'));

// Set the correct MIME types for static assets
app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'text/javascript');
    } else if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Route to serve the homepage (Introduction page for the tech company)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route to serve the product details page for mobile phones
app.get('/mobile', (req, res) => {
  res.sendFile(__dirname + '/product_mobile.html');
});

// Route to serve the product details page for earphones
app.get('/earphones', (req, res) => {
  res.sendFile(__dirname + '/product_earphones.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
