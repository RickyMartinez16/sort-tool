const fs = require('fs');

// Function to read, sort, and output file content
const sortFile = (inputFile, numLines = 5) => {
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) throw err;

    // Split file content into lines and sort them
    let sortedLines = data.split('\n').sort((a, b) => a.localeCompare(b));

    // Remove duplicate lines (uniq functionality)
    sortedLines = sortedLines.filter((line, index, self) => self.indexOf(line) === index);

    // Output the first numLines lines (head functionality)
    sortedLines.slice(0, numLines).forEach(line => console.log(line));
  });
};

// Run the sortFile function with 'words.txt' as input and 5 lines to display
sortFile('words.txt');
