import TaskModel from "../models/taskModel.js" 
import mongoose from "mongoose"

export const getTasks = async (req,res)=>{
    try {
        const foundTasks = await TaskModel.find();
        console.log("here")
        res.status(200).json(foundTasks)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createTask = async (req,res)=>{
    const task = req.body;

    const newTask = new TaskModel(task)

    try {
        await newTask.save();

        res.status(201).json(newTask)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateTask = async (req,res)=>{
    const {id} = req.params;
    const task = req.body;
    console.log(id)
    console.log(req.body)

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with such id");

    const updatedTask = await TaskModel.findByIdAndUpdate(id,task, {new:true})

    res.json(updateTask)
}