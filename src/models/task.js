import mongoose from "mongoose"
const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        trim: true,
    },
    completed:{
        type: Boolean,
        default: false,
    },
},{
    timestamp: true,

})

const Task = mongoose.model("Task",taskSchema);
export default Task;