const express = require("express")
//411 means inputs are incorrect 

//400 means bad request

function sum(n){
    let ans = 0;
    for (i=0;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}
const app = express();

app.get("/",function(req,res){
    const n = req.query.n;
    const lx = sum(n);
    res.send("hi your ans is "+lx);
})

app.listen(3000);//give n = any words or character