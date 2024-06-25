const fs = require('fs').promises;
const path = require('path');

// Function to read a file
async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return data;
  } catch (err) {
    throw err;
  }
}

// Function to write a file
async function writeFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
  } catch (err) {
    throw err;
  }
}

// Function to delete a file
async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
  } catch (err) {
    throw err;
  }
}

// Usage example
(async () => {
  const filePath = path.join(__dirname, 'example.txt');

  try {
    await writeFile(filePath, 'Hello, World!');
    console.log('File written successfully');

    const data = await readFile(filePath);
    console.log('File content:', data);

    await deleteFile(filePath);
    console.log('File deleted successfully');
  } catch (err) {
    console.error('Error:', err);
  }
})();
