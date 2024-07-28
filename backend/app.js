const express = require("express");
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const mongoUrl = require('./keys');
const cors = require("cors");



const userRouter = require("./routes/user");
const todoRouter = require("./routes/todo");


app.use(cors());
app.use(express.json());
mongoose.connect(mongoUrl);

mongoose.connection.on("connected" , ()=>{
    console.log("connected to mongo");
})

mongoose.connection.on("error" , ()=>{
    console.log("not connected to mongo");
})

app.use("/user" , userRouter);
app.use("/todo" , todoRouter);

app.listen(port,()=>{
    console.log("listening on port 5000");
})