const fs = require('fs');
fs.readFile('hi.txt','utf-8',(err,data)=>{
    data = Buffer.from(data,'utf-8').toString('ucs2')//chinese
    console.log(data)
})