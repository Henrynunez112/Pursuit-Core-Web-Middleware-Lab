const express = require("express");
const cors = require("cors");
const port = 3004;

const app = express();
app.use(cors());

const animals = ["cat", "dog", "rabbit", "giraffe", "lion", "penguin", "anteater"];

const isAnimal = (req, res, next) =>{
    console.log("The Middleware isAnimal is running");
    if(animals.includes(req.params.id)){
        next();
    }else{
        res.json({status: "fail",
                  message: false})
    }

    
}
app.get("/animal/:id", isAnimal,(req, res)=>{
res.json({status: "success",
          message: true});
});



app.get("/random/:floor/:ceil",(req,res)=>{
    res.json({status: "success",
              message: true})
})

app.listen(port,()=>{
    console.log("You are now listening to port " + port)
})