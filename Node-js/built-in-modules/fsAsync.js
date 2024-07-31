const {readFile,writeFile} = require('fs')

readFile('./subFolder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.err(err)
        return
    }
    const first = result;
    readFile('./subFolder/scond.txt','utf8',(err,result)=>{
        if(err){
            console.err(err)
            return
        }
        const second = result;
        writeFile('./subFolder/result-async.txt',`Here is the result : ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result===result)// real
        })
        console.log('inside the realFile')
    })
})
console.log('last line')