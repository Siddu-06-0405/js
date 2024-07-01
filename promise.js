var d = new Promise(function(yokoso){
    yokoso("watashino soul society");
});

function callback(d){
    console.log(d);
}

d.then(callback)

var e = new Promise(function (Aizen_Sosuke){
    Aizen_Sosuke("yokoso");
});
console.log(e)//undefined promise