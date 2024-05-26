const fs = require("fs");

//my own asynchronous function

function sidduReadFile(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    });
}

// callback function to call
function onDone(data){
    console.log(data);
}

sidduReadFile(onDone);