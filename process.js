const fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const words = data
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .replace(/\s+/g, '\n')   // Replace spaces with newlines
    .split('\n')             // Split by newlines
    .filter(word => isNaN(word)); // Remove numbers

  fs.writeFile('words.txt', words.join('\n'), (err) => {
    if (err) throw err;
    console.log('words.txt has been created');
  });
});
