setTimeout(()=>{const fs = require("fs");

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
})

console.log("hi nnnnn")},5000)