const express = require("express")
const Todo  = require("../models/todoModel");

const router = express.Router();

router.post("/todo",async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "POST"); 
    try{
        const todo=await Todo.create(req.body);
        
        return res.status(201).send(todo);
    }catch(error){
        return res.status(404).send(error.message)
    }
});

router.get("/todo",async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    try{
        const todo=await Todo.find().lean().exec();
        return res.status(201).send(todo);
    }catch(error){
        return res.status(404).send(error.message)
    }
});

router.get("/todo/:id",async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    try{
        const todo=await Todo.findById(req.params.id)
        return res.status(201).send(todo);
    }catch(error){
        return res.status(404).send(error.message)
    }
});

router.patch("/todo/:id",async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    try{
        const todo=await Todo.findByIdAndUpdate(req.params.id,req.body).lean().exec();
        return res.status(201).send(todo);
    }catch(error){
        return res.status(404).send(error.message)
    }
});


router.delete("/todo/:id",async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    try{
        const todo=await Todo.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(todo);
    }catch(error){
        return res.status(404).send(error.message)
    }
});

router.delete("/todo",async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    try{
        const todo=await Todo.deleteMany();
        return res.status(201).send(todo);
    }catch(error){
        return res.status(404).send(error.message)
    }
});

module.exports = router;
