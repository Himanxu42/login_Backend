const express = require("express");
const app =express(); 
app.use(express.json()) ;
app.use(express.urlencoded({ extended: true }));

const port=process.env.port || 8000;


const path=require("path"); 
const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/TestDB",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true


}).then(()=>{
    console.log("connection is succesful");
}).catch((e)=>{
console.log("no connection/unsuccesful");
});

const authRoutes = require('./routes/auth');
const { urlencoded } = require("express");

app.use(cors()) ; //npm i cors
app.use('/api',authRoutes) ; // localhost:8000/api/signup or /login




app.listen(port,()=>{
    console.log(`listning the port at ${port}`);

})