const express = require("express")

const app=express()

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(4000,()=>{
try{
console.log('Server Started Successfully');
}
catch(err){
console.err("Error starting the server",{err});
}
});