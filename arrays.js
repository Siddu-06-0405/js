var personalities=['yuuichi katagiri','sukuna','johan liebert','deva','bobu','raghuvaran.']
console.log("my personalities are "+personalities)

//accessing array elements using index 
var animes=new Array('jjk','tokyo ghoul', 'berserk')
console.log(animes[0]+" is my favorite anime")

// update elements in a array
var  languages = ['python', 'java', 'c++'];
languages[1]='javascript'
console.log("My favourite programming language is now "+languages[1]+". I have updated java  to javascript.")

//add element to the end of the array
languages.push('ruby');
console.log("I also like "+languages[3]);

//delete an element from the array
delete languages[2];
languages[2]='bash'
console.log("After deleting c++, My favourite programming languages are: ")
for (i=0; i<languages.length ; i++) {
    console.log(languages[i])
    console.log(languages)
}

//check if an element exists in the array
if (languages.includes('php')){
    console.log("Yes, php is one of my favourite languages too.");
} else {
    console.log("No, php is not one of my favourite languages");
}