// latentflip.com/loupe
console.log("hi there");

setTimeout(()=>{
    console.log("from inside async function");
},5000);

let a=0;for(let i=0;i<10;i++){
    a+=i;
}
console.log(a);