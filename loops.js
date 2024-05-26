// //for loop
// //sum of n numbers = n*(n+1)/2
const prompt=require('prompt-sync')({sigint:true});
var sum=0
var n=+prompt("Enter a number")
for(i=1;i<=n;i++){
    sum=sum+i//don't use sum=+i here.
}
console.log(sum)

var num=+prompt("Give me an integer");
if(num%2==0){   
    console.log(`${num} is even`);
}else{
    console.log(`${num} is  odd`)
}

//while loop
var num=+prompt("Give me an integer");
while(isNaN(num)){
    num=+prompt("That's not right! Give me an integer.")
}

//do-while loop
var count=5//how many times you want to repeat the code block
do{
    num=+prompt("How old are you?");
    console.log("your were born in "+ (2024 - num));
    count=count-1
}
while(count>0)