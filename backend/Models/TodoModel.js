const mongoose = require("mongoose");
const { type } = require("os");

const todoSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    status:{
        type:String,
        require:true
    },
    priority:{
        type:String
    },
    deadline:{
        type:Date
    }
} , {timestamps:true});


module.exports = mongoose.model("todos" , todoSchema);