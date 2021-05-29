const dotenv =require('dotenv');
const mongoose = require('mongoose');
const cors = require ('cors');
const express = require('express');
const app = express();
app.use(cors())


dotenv.config({path:'./config.env'})

require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

const User = require('./models/userSchema');


//  we link the router files 
// for connecting to the database

const PORT = process.env.PORT;
// for securing port


// Middleware making

const middleware= (req, res, next)=>{
next();
};

// middleware(); can not be used here

app.get('/',(req, res) =>{
    res.send('hello world');
});

app.get('/aboutme', middleware ,(req, res , ) =>{
    res.send('hello world');
});

app.get('/signin',(req, res) =>{
    res.send('hello world');
});

app.get('/signout',(req, res) =>{
    res.send('hello world');
});

app.get('/contact',(req, res) =>{
    res.cookie("Test",'hnb')
    res.send('hello world');
});


app.listen(PORT,()=>{
    console.log('running at ');
});