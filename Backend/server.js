//common js syntax -- 
const express = require ('express')
//
// import express from 'express';

const colors = require('colors')
const dotenv = require('dotenv').config()
const app = express();

app.get("/", (req, res) => {
    res.send({
      message: "Hello World",
    });
  });
  
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`.yellow.bold)
  );