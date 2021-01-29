import mongoose from "mongoose"

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    todos: [String],
    createdAt:{
        type:Date,
        default:new Date
    }
})

const TaskModel = mongoose.model('taskModel', taskSchema);

export default TaskModel;