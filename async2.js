const fs = require("fs");

// my own asynchronous function
function siddusReadFile(){
    console.log("inside siddusfile function")//1;
    return new Promise(function(resolve){
        console.log("inside promise");//2
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);//4
        });
    })
}

// callback function to call
function onDone(data){
     console.log("inside callBack function");//5
     console.log(data);//6
 }
//  siddusReadFile().then(onDone);
var a = siddusReadFile();
a.then(onDone);
console.log(a);//3