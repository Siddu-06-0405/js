//500 means internal server error
const express = require("express")

const app = express();
app.get("/",function(req,res){
    throw new Error("asdf");
})

app.listen(3000);