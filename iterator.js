//Iterator
function makeIterator(start=0,end=Infinity,step=1){
    let nextStart = start;
    let iteration = 0;
    return{
        next(){
            let result;
            if(iteration<end){
                result = {value:nextStart,done: false}
                iteration++;
                nextStart += step;
                return result;
            }
            return {value:iteration, done:true};
        }
    }
}

const myIterator = makeIterator(1, 10, 1);
let result = myIterator.next();
while(!result.done){
    console.log(`\u001b[1;34m ${result.value}`);
    result=myIterator.next();
}

//yield
function* makeIteratorNew(start,end,stepsize=1){
    for(let i=start;i<=end;i+=stepsize){
        yield i;
    }
}

const val = makeIteratorNew(2,10,2);

for(const i of val){
    console.log(i);
}