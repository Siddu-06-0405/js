function main(){
    var name = "Heisenberg";
    function sayMyName(){
        function aizen(){
            console.log("yokoso");
        }
        return aizen;
    }
    console.log(name);
    return sayMyName;
}

consoleAizen = main()();
consoleBad = main();
consoleBad();
consoleAizen();

console.log();
// 2nd example
console.log("2nd example");

function makeAdder(x){
    return function(y){
        console.log(x+y);
    }
}

var logger5 = makeAdder(5);
const logger69 = makeAdder(69);

logger5(69);
logger69(5);
