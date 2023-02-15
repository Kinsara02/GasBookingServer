const express= require("express");
const app= express();
require('dotenv').config()
const dbconfig= require('./config/dbconfig');
const port= process.env.PORT || 5800;

app.listen(port, ()=>console.log(`node server listening`));