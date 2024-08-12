/*three types of async errors
they are 
1. Rejection(e.g. promise)
2. try/catch
3. propagation*/

// 1. Rejection
class OddError extends Error {
    constructor(message) {
      super(message);
      this.name = 'OddError';
      this.code = 'ERR_MUST_BE_EVEN';
    }
}
function divideByTwo(amount){
    return new Promise((resolve,reject)=>{
        if(typeof amount !== 'number'){
            reject(new TypeError('amount must be a number'))
            return;
        }
        if(amount<=0){
            reject(new RangeError('amount must be greater than 0'))
            return;
        }
        if(amount % 2){
            reject(new OddError('amount'))
            return;
        }
        resolve(amount/2);
    });
}

divideByTwo(-3).then(result=>{
    console.log(result);
}).catch(error=>{
    console.error(error.message);
})

