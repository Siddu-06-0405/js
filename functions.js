var sum=(function(num1,num2){
    var result = num1 + num2;
    return result
})(5,8);
console.log("The sum is " + sum)  // The sum is 13

//Immediately Invoked Function Expression (IIFE)
var myFunction = function(){
   console.log('Hello World');
}();

product = (num1,num2)=> {return num1 * num2};
console.log("product is ",product(4,7));     // 28

greet=(naam="Johan Liebert")=>
    console.log("Hello "+ naam);

setTimeout(greet,5000)                                // Hello Johan Liebert

cube =num=>num*num*num
console.log(cube(2))

confusion=()=>console.log("goat")
setTimeout(confusion,5900)