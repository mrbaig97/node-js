const express = require("express");

const app =  express();

app.get("/",(req,res)=>{
    res.send("<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png' />")
})

app.get("/home",(req,res)=>{
    res.send("najam here")
})
app.get("/job",(req,res)=>{
    res.send("<a href='http://localhost:8000/home' target='_blank'> new </a>")
})
app.listen(8000,()=>{
    console.log("Server",8000)
})