// to delete a file (promise example)

const {unlink} = require('node;fs/promises');

(async function(path){
    try{
        await unlink(path);
        console.log('File deleted');
    }
    catch(err){
        console.error('there was an error:', error.message);
    }
})(`${__dirname}/bleach.txt`)

// callback method to delete a file
// The callback-based versions of the node:fs module APIs are preferable over the use of the promise APIs when maximal performance (both in terms of execution time and memory allocation) is required.

/*const { unlink } = require('node:fs');

unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});*/

//Synchronous example#
//The synchronous APIs block the Node.js event loop and further JavaScript execution until the operation is complete. Exceptions are thrown immediately and can be handled using try…catch, or can be allowed to bubble up.

/*const { unlinkSync } = require('node:fs');

try {
  unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}*/