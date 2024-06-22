const fs = require('fs');

// Function to read, sort, and output file content
const sortFile = (inputFile) => {
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) throw err;

    // Split file content into lines and sort them
    const sortedLines = data.split('\n').sort((a, b) => a.localeCompare(b));

    // Output the sorted lines
    sortedLines.forEach(line => console.log(line));
  });
};

// Run the sortFile function with 'words.txt' as input
sortFile('words.txt');
