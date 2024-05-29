//schema validation

const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

// {
//     email: string=> email
//     password : atleast 8 characters
//     country:"IN", "US"
// }
// const schema = zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     country: z.literal("IN").or(z.literal("US")),
//     kidneys: z.array(z.number())
// })

app.use(express.json());

app.post("/health-checkup",(req,res)=>{
    //kidneys =[1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            message:"Invalid input"
        })
    }else{
        res.send({
            response
          });
    }
})

app.listen(3004);