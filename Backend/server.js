// it is monolitic arcitecture


//common js syntax -- 
const express = require ('express');
//in the r
// import express from 'express';

// require is es5 syntax

const colors = require('colors');
const dotenv = require('dotenv').config();

const userdata = require ('./utility/userdata.json')
// it takes file from utility 

const fileURLtoPath = require("url");
// it takes html file from public
const path = require("path");

const PORT = 3000;
// port is palatform where the server is launch
// it can be any 4 digit no.

const app = express();
//propreties of express is tranfer into app

app.use(express.json());
// use take 1 parameter

app.use(express.static(path.resolve(__dirname,"./Public")));
//static files wala middleware h ye

// "/" is  
app.get("/userdata", (req, res) => {
    res.send(userdata);
});


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname,"./Public","index.html"));
});
//it sendes files to the server from the public folder

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname,"./Public","contact.html"));
});
  
app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`.bgBlue.black)
});


