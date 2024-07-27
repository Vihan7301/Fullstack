// it is monolitic arcitecture


//common js syntax -- 
const express = require ('express');
//in the r
// import express from 'express';

// require is es5 syntax

const colors = require('colors');
const dotenv = require('dotenv').config();

const PORT = 3000;
// port is palatform where the server is launch
// it can be any 4 digit no.

const app = express();
//propreties of express is tranfer into app

app.use(express.json());
// use take 1 parameter

app.get("/", (req, res) => {
    res.send("API is running");
  });
  
  app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`.bgBlue.black)
  });


