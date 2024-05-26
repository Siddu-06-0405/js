// arithmetic operators
// comparison operators
// logical operators
// type operators
// assignment operators
// ternary operators
// bitwise operators
const prompt = require('prompt-sync')({ sigint: true });

var a=67
var b=2
console.log(a+b)

var a=69
var b="script"
console.log(a+b)

var a=6
var b=7
let c="script"
console.log(a+b+c)

a=6
console.log(a++)//7 but shows 6 (post increment)
console.log(++a)//7+1=8
console.log(a--)
console.log(--a)

var a=12
var b=12
console.log(a==b)
console.log(a<b)
console.log(a>b)
console.log(a>>b)
console.log(a<<b)
console.log(a<=b)
b=4
console.log(a!=b)

a=4//strict equal to operator
console.log(a===b) 

let y=prompt("enter the dividend")
let x=prompt("enter a divisor")
if (x!=0){
    result=y/x
    console.log(result)
}
else{
    result="not defined";
    console.log(result)
}

//logical operators
var a=0
var b=false
console.log(a&&b)//0

console.log((5<7)&&(5<3))
console.log((5<7)&&(5<9))

//Bitwise operators
console.log(5<<1)//zero fiill  shift left 0101<<0001=1010
console.log(5>>1)//signed right shift   0101>>0001=0010
console.log(5>>>1)//zero fill  right shift  0101>>>0001=0010
console.log(5&1)//0101&0001=0001
console.log(5|1)//0101|0001=0101
console.log(~5)//bitwise not of 5 =-6
console.log(5^1)//0101^0001=0100 xor

var a =  8;
var b =  2;
let big
big=a>b?console.log('a is bigger'):console.log('b is bigger');

//type conversion
console.log(parseInt('12abc')) //returns 12 because it stops reading when it encounters non digit character 'a'

var num=10
num+='10' //concatenation num=num+'10'
console.log(num);

console.log(12+true); //121 true converted to  11 in base 10
console.log(12-"4")
console.log(12-'4')
console.log(12-"s")//NaN
console.log(num+typeof(num))

//Explicit conversion:Boolean,str,Num,Obj
console.log(Number('12a'))//NaN
console.log(parseFloat("12.87dg"))
console.log('Ba'+NaN+'a')

var a=23
a=String(a)
console.log(typeof(a))//string

console.log(Number(undefined))
console.log(Number(null));
console.log(Number(false));

console.log(Boolean(-1)); //true
console.log(!0); // true
console.log(![]); // false
console.log(!{}); // false
console.log(!Infinity); // false
console.log(String(undefined))
console.log(Boolean("")); // false empty string

