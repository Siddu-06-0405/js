// // promisify this async function
// // returned undefined
// function myOwnSetTimeout(callback,duration){
//     setTimeout(callback,duration);
// }

// // returning a promise
function promisifiedMyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){
        // resolve("hi bro")
        setTimeout(function(){
            resolve();
        },duration);
    });
    return p;
}

const ans = promisifiedMyOwnSetTimeout(1000);
console.log(ans)