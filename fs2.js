const fs=require("fs");
//file system module
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("hi there");
let a=0;
//takes very long than the file read
for(let i=0; i<10000000;i++){
    a++;
}
console.log(a);

console.log("hi there papa");

// latentflip.com/loupe