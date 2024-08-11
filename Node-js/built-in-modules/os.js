const os = require('os')

console.log(os.userInfo())
console.log(os.uptime())

const details = {
    name: os.type(),
    release: os.release(),
    platform: os.platform(),
    arch: os.arch(),
    totamemory: os.totalmem(),
    freememory: os.freemem()
}

console.log(details)
// console.log(os)
const multilineText = `Line 1${os.EOL}Line 2${os.EOL}Line 3`;
const lines = multilineText.split(os.EOL);
console.log(lines);

// //example usage 1
// const fs = require('fs');

// const lines1 = [
//   'First line',
//   'Second line',
//   'Third line'
// ];

// const content = lines1.join(os.EOL); // Join lines with OS-specific newline

// fs.writeFile('output.txt', content, (err) => {
//   if (err) throw err;
//   console.log('File written successfully with correct EOL!');
// });

//example 2
const configTemplate = [
  'host=localhost',
  'port=8080',
  'user=admin',
  'password=secret'
].join(os.EOL); // Join each line with the appropriate EOL character

console.log('Generated config:');
console.log(configTemplate);

