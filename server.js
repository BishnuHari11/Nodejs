const express = require('express');

const app = express();

const dotenv = require('dotenv');

app.listen(process.env.PORT , ()=>{console.log("Connected to port 5000 ande boom sucess")});

