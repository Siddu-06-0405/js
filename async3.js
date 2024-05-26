const fs = require("fs");

function asyncFunction(){
    return new Promise(function(resolve, reject){
        fs.readFile("a.txt", "utf-8", (err, data) => {
            if (err) {
                reject(err); // Reject the promise if there's an error
                return;
            }
            resolve(data); // Resolve the promise with the data
        });
    });
}

function onDone(data){
    console.log(data); // Access the data here
}

asyncFunction().then(onDone).catch(err => console.error(err)); // Call siddu and handle errors
