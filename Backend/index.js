//To run server setup using express
const express = require("express");
const todoControllers = require("./controllers/todoControllers")

const appExpress = express()

const cors = require('cors');
const corsOptions ={
    //origin: 'http://localhost:3000', 
    origin:'https://my-todo-application-01.netlify.app/',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
appExpress.use(cors());
appExpress.use(express.json())
appExpress.use("",todoControllers)

module.exports= appExpress;
