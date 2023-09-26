import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    caption:{
        type:String,
        required:[true, "Caption is required"],
    },
    description:{
        type:String,
        required:[true,"Description is required"],
    },
    completed:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const ToDo =  mongoose.model("todo", todoSchema);

export { ToDo };











































