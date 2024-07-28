const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    todo:{  
        type:mongoose.Schema.Types.ObjectId,
        ref:"todos"
    }
})


module.exports = mongoose.model("user" , userSchema);