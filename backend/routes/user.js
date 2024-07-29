const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/UserModel");


router.post("/register" , async (req,res)=>{
    const {username , email , password} = req.body;

    try {
        const existUser = await userModel.findOne({$or:[{username} , {email}]});
        if(!existUser){
            const user = new userModel({
                username,
                email
            });
            encpass = await bcrypt.hash(password, 5);
            user.password = encpass;
            await userModel.create(user);
    
            res.status(200).json("now you can login");
        }
        else{
            res.status(409).json({msg:"user with this email or username already exists"});
        }
    } catch (error) {
        res.status(500).json("registeration error");
    }
})

router.post("/login", async (req,res)=>{
    const {email , password} = req.body;

    const user = await userModel.findOne({email});

    if(user){
        const compPass = await bcrypt.compare(password , user.password);
        if(compPass){
            const token = jwt.sign({email , username:user.username} , "ash");
            res.status(200).json({Token:token , username:user.username});
        }
        else{
            res.status(401).json({msg:"email or password incorrect"});
        }
    }
    else{
        res.status(401).json({msg:"Please try to register"});
    }

})


module.exports = router;