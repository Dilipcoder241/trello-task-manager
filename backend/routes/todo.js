const express = require("express");
const router = express.Router();
const todoModel = require("../Models/TodoModel")

router.post("/create", async (req,res)=>{
    const {title , desc , status , priority , deadline} = req.body;

    const todo = await todoModel.create({
        title,
        desc,
        status,
        priority,
        deadline
    })

    res.send(todo);
})




module.exports  = router