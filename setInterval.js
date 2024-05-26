let sum=(n1,n2)=>(n1+n2)
    console.log(sum(2,3))
    

var myFunction = ()=>{
    console.log('Hello World');
 };
 myFunction()

 greet=_=>console.log("bangaram okati cheppana")
 var count=5
 while(count>0){
    setTimeout(greet,1000)
    count=count-1
}

//stop setInterval after a time
let i =1
const s_id = setInterval(()=>{
    console.log(s_id+"Print",i++)
    if(i>5)
    {
        clearInterval(s_id)
    }
},2000)

