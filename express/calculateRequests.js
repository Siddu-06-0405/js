const express = require("express");
const port = 3002;
const app = express();
//rate limiting
let numberOfRequests = 0;

function calculateRequests(req,res,next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
};

app.get("/health-checkup", calculateRequests, (req,res)=>{
    res.send("Server is up and running");
});

app.listen(`${port}`);