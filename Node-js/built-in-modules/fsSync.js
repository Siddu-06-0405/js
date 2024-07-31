//synchronous fs 

const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./subFolder/first.txt','utf8')
const second = readFileSync('./subFolder/scond.txt','utf8')

// console.log(`${first}\n${second}`)

writeFileSync('./subFolder/result-sync.txt',`here is the result : ${first}, ${second}`)
//can add another parameter {flag:a} //appends