const fs = require('fs');

// Read test.txt and process it to create words.txt
fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const words = data
    .toLowerCase()                // Convert to lowercase
    .replace(/[^\w\s]/g, ' ')     // Replace non-alphanumeric characters with space
    .replace(/\s+/g, '\n')        // Replace spaces with newlines
    .split('\n')                  // Split by newlines
    .filter(word => word.trim() !== ''); // Remove empty lines

  fs.writeFile('words.txt', words.join('\n'), (err) => {
    if (err) throw err;
    console.log('words.txt has been created');
  });
});
