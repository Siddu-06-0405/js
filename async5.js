function kirat(){
    let p = new Promise(function(resolve){
        setTimeout(resolve,5000);
    });
    return p;
}
function onDone(){
    console.log("Done");
}
const value = kirat();
value;