const express = require("express");
const app = express();
var users = [{
    name : 'harkirat',
    kidneys: [{
        healthy: true
    }]
}]

//middlewares
app.use(express.json());
app.get("/",(req,res)=>{
    //write logic
    const hkidneys= users[0].kidneys;
    var numOfKidneys=hkidneys.length;
    var numOfHealthyKidneys = 0;
    if (hkidneys[0].healthy){
        numOfHealthyKidneys = numOfHealthyKidneys+1;
    }
    var numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
    res.json({
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
})
app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        message: "success"
    })
})

app.put("/",function(req,res){
    for (let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        message: "Done!"
    })
})

app.delete("/",function(req,res){
    const newKidneys = [];
    for (let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({message: "done"})
})

app.listen(3000);
//req.body tanslates to undefined