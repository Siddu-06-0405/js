// var d = new Promise(function(yokoso){
//     setTimeout(() => {
//         console.log("first promise");
//         yokoso();
//     }, 2000);
// });

// function callback(d){
//     console.log(d);
// }

// d.then(callback(null))

// var e = new Promise(function (Aizen_Sosuke){
//     Aizen_Sosuke("yokoso");
// });
// console.log(e)//undefined promise

// //other way to call promises

// function fn(){
//     return "Yhwach";
// }

// let x = Promise.resolve(fn());

// x.then(function(value){
//     console.log(value)
// })

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
      let error = false;
      if(!error){
        resolve({username : "siddu",password : "cheppanu brother"});
      }else{
        reject("ERROR: Something went wrong.");
      }
    }, 2000);
}).catch((error)=>{
    return error;
})

async function p4() {
    const response = await promiseFour;
    console.log(response.username);
}

p4();