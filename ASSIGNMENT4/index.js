const express = require('express');
const app = express();
const port = 3000;

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Endpoint 1: Home route
app.get('/', (req, res) => {
  res.send('Hello, welcome to the home page!');
});

// Endpoint 2: About route
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Middleware for handling 404 errors
app.use((req, res) => {
  res.status(404).send('Page not found!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
