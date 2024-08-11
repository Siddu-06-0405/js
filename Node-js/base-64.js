// const encodedData = window.btoa("Hello, world");
// console.log("encodedData");
const buf = Buffer.from('hello');
const subBuf = buf.slice(0, 2); // Contains the first two bytes of 'hello'
console.log(subBuf); // Outputs: he

var buf2 = Buffer.allocUnsafe(10);
buf2 = buf//256
console.log(buf2)
const buf3 = Buffer.from([1,2,357])//hexadecimal storing
console.log(Array.from(buf3))
const buf22 = Buffer.alloc(10);
buf22.write('hello', 0, 'utf-8');
// console.log(buf22.toString('utf-8'))


const buff4 = Buffer.alloc(10,1)
buff4.write('hello',0)
console.log(buff4) 