const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3010;

// Middleware to parse urlencoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/filemanagement.html'));
});

// Route to create a file
app.post('/create', (req, res) => {
  const filename = req.body.filename;
  const fileToCreate = path.join(__dirname, filename);

  fs.writeFile(fileToCreate, 'Hello, World!', (err) => {
    if (err) {
      res.status(500).send('Error creating file');
    } else {
      res.send('File created');
    }
  });
});

// Route to read a file
app.get('/read', (req, res) => {
  const filename = req.query.filename;
  const fileToRead = path.join(__dirname, filename);

  fs.readFile(fileToRead, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      res.send(data);
    }
  });
});

// Route to delete a file
app.post('/delete', (req, res) => {
  const filename = req.body.filename;
  const fileToDelete = path.join(__dirname, filename);

  fs.unlink(fileToDelete, (err) => {
    if (err) {
      res.status(500).send('Error deleting file');
    } else {
      res.send('File deleted');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
