const prompt = require("prompt-sync")(); // Note the parentheses after "prompt-sync"
var a = parseFloat(prompt("Enter the first side of triangle A: "));
var b = parseFloat(prompt("Enter the second side of triangle A: "));
var c = parseFloat(prompt("Enter the third side of triangle A: "));
var d = parseFloat(prompt("Enter the first side of triangle B: "));
var e = parseFloat(prompt("Enter the second side of triangle B: "));
var f = parseFloat(prompt("Enter the third side of triangle B: "));
var g = parseFloat(prompt("Enter the first side of triangle C: "));
var h = parseFloat(prompt("Enter the second side of triangle C: "));
var i = parseFloat(prompt("Enter the third side of triangle C: "));

var arr1 = [a, b, c];
var arr2 = [d, e, f];
var arr3 = [g, h, i];

function calculateArea(arr) {
    var peri = (arr[0] + arr[1] + arr[2]) / 2;
    var result = Math.sqrt(peri * (peri - arr[0]) * (peri - arr[1]) * (peri - arr[2]));
    return result;
}

if (calculateArea(arr1) > calculateArea(arr2) && calculateArea(arr1) > calculateArea(arr3) && calculateArea(arr2) > calculateArea(arr3)) {
    console.log(arr3);
    console.log(arr2);
    console.log(arr1);
} else if (calculateArea(arr2) > calculateArea(arr3) && calculateArea(arr2) > calculateArea(arr1) && calculateArea(arr1) > calculateArea(arr3)) {
    console.log(arr3);
    console.log(arr1);
    console.log(arr2);
} else if (calculateArea(arr2) > calculateArea(arr3) && calculateArea(arr2) > calculateArea(arr1) && calculateArea(arr3) > calculateArea(arr1)) {
    console.log(arr1);
    console.log(arr3);
    console.log(arr2);
} else if (calculateArea(arr3) > calculateArea(arr1) && calculateArea(arr2) > calculateArea(arr1) && calculateArea(arr3) > calculateArea(arr2)) {
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
} else if (calculateArea(arr3) > calculateArea(arr1) && calculateArea(arr1) > calculateArea(arr2) && calculateArea(arr3) > calculateArea(arr2)) {
    console.log(arr1);
    console.log(arr3);
    console.log(arr2);
} else {
    console.log(arr2);
    console.log(arr3);
    console.log(arr1);
}
