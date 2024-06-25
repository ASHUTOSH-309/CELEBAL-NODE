const fs = require('fs');
const path = require('path');

// Function to read a file
function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

// Function to write a file
function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

// Function to delete a file
function deleteFile(filePath, callback) {
  fs.unlink(filePath, (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

// Usage example
const filePath = path.join(__dirname, 'example.txt');
writeFile(filePath, 'Hello, World!', (err) => {
  if (err) {
    return console.error('Error writing file:', err);
  }
  console.log('File written successfully');

  readFile(filePath, (err, data) => {
    if (err) {
      return console.error('Error reading file:', err);
    }
    console.log('File content:', data);

    deleteFile(filePath, (err) => {
      if (err) {
        return console.error('Error deleting file:', err);
      }
      console.log('File deleted successfully');
    });
  });
});
