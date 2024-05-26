function square(a){
    return a*a
}
function sumOfSomething(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;
}

const ans=sumOfSomething(2,3,square)
console.log(ans)

//2
function kirat(){
    setTimeout(function(){
        console.log("kirat")
    } ,5000)
}

kirat();