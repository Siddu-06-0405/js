var d = new Promise(function(harsha){
    harsha("hmm");
});

function callback(){
    console.log(d);
}
console.log("nagarjuna")
d.then(callback)

var e = new Promise(function (happy){
    happy();
});
console.log(e)//undefined promise