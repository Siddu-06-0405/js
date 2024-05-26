// if
// if-else
// if-else if-else
// switch
const prompt=require('prompt-sync')({sigint:true});
var a=prompt("Enter a number : ")
if(a<0) {
    console.log("Entered  Number is Negative");
}
else if (a==0){
   console.log("The entered number is Zero") ;
}
else{
     console.log("Number is Positive");
}

var a=prompt("enter first operand : ")
var b=prompt("enter second operand : ")
var operation=prompt("Enter the operator (+, - , * or /): ");
switch(operation) {
    case "+":
        var sum = parseInt(a)+parseInt(b);
        console.log("Result of " + a +" + "+ b+ " = "+sum );
        break;
    case "-":
       var diff=parseInt(a)-parseInt(b);
       console.log("Result of " + a +" - "+ b+ " = "+diff );
       break;
    case "*":
      var prod=parseInt(a)*parseInt(b);
      console.log("Result of " + a +" * "+ b+ " = "+prod );
      break;
      var quotient=parseInt(a)/parseInt(b);
      console.log("Result of " + a +" / "+ b+" = "+quotient);
      default:
        console.log("Invalid Operator");
}