const mongoose = require("mongoose");
const { type } = require("os");

const todoSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String
    },
    desc:{
        type:String
    },
    status:{
        type:String
    },
    priority:{
        type:String
    },
    deadline:{
        type:Date
    }
})


module.exports = mongoose.model("todos" , todoSchema);