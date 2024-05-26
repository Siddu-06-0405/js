//intimidating async function
function kiratAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}

const value = kiratAsyncFunction();
value.then(function(data){
    console.log(data);
});