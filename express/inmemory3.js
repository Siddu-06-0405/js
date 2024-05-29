const express = require("express");
const app = express();
app.use(express.json());
app.post("/health-checkup",(req,res)=>{
    //kidneys =[1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send(`you have ${kidneyLength} kidneys`);

})

//global catches
app.use((err,req,res,next)=>{
    //errorCount++;
    res.json({
        msg : "Sorry some technical issues with our server"
    })
})
app.listen(3003);