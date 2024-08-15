const fs = require('fs');

// Define the code to append
const codeToAppend = `
function greet() {
    console.log('Hello, World!');
}

greet();
`;

// Specify the file name
const fileName = 'output.js';

// Append code to the file (creates the file if it doesn't exist)
fs.appendFile(fileName, codeToAppend, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(`Code successfully appended to ${fileName}`);
    }
});
