const express = require("express");
const router = express.Router();
const todoModel = require("../Models/TodoModel");


router.get("/getalltodo", async (req,res)=>{
    try {
        const todos = await todoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({msg:"todos not found"});
    }
})

router.post("/create", async (req,res)=>{
    const {title , description , status , priority , deadline} = req.body;

    try {
        const todo = await todoModel.create({
            title,
            description,
            status,
            priority,
            deadline
        })
    
        res.status(200).send(todo);
    } catch (error) {
        res.status(400).json({msg:"todo not created some problem"});
    }
});

router.post("/delete/:id" , async (req,res)=>{
    try {
        const deltodo = await todoModel.findOneAndDelete({_id:req.params.id});
        const todo = await todoModel.find();
        res.status(200).send(todo);
    } catch (error) {
        res.status(400).json({msg:"todo not deleted problem" , error});
    }
})


router.post("/update/:id" , async(req, res)=>{
    const {title , description , status , priority , deadline} = req.body;
    try {
        const updatedTodo = await todoModel.findOneAndUpdate({_id:req.params.id}, {title,description,status,priority,deadline});
        const todo = await todoModel.find();
        res.status(200).send(todo);
    } catch (error) {
        res.status(400).json({msg:"todo not deleted problem" , error});
    }
})





module.exports  = router