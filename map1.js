const numbers = [1,-1,2,3];

const filtered = numbers.filter(n=>n>3);

const red = filtered.map((n)=>({value: n}))
.filter(obj=>obj.value>1).map((v)=>{return {case: v}});
const test = numbers.reduce((n1,n2)=>n1+n2,64)
console.log(test);