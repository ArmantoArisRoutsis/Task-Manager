import React,{useState,useEffect} from 'react'
import {TextField, Button, Typography, Paper} from "@material-ui/core"
import {useDispatch} from "react-redux"
import {updateTask} from "../../actions/tasks"

const Form = ({displayedTask, setDisplayedTask}) => {
    const [taskData, setTaskData] = useState({
        creator:displayedTask.creator,
        title:displayedTask.title,
        description:displayedTask.description,
        todos:displayedTask.todos
    })
    const [newItem,setNewItem] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        taskData.todos.push(newItem)
        setNewItem("")
        dispatch(updateTask(taskData))
        setDisplayedTask(taskData)
    }

    useEffect(() => {
        setTaskData(displayedTask)
    },[displayedTask])
    return (
        <Paper>
           <form autoComplete="off" onSubmit={handleSubmit}>
            {/* <Typography variant="h6">Add a new todo task for <b>{displayedTask.title}</b></Typography>
            <TextField name="taskTitle" variant="outlined" label="Title" fullWidth value={taskData.title} onChange={(e)=>setTaskData({...taskData,title:e.target.value})}/>
            <TextField name="taskDescription" variant="outlined" label="Description" fullWidth value={taskData.description} onChange={(e)=>setTaskData({...taskData,description:e.target.value})}/> */}
            <TextField name="taskItem" variant="outlined" label={`Add a new todo for "${displayedTask.title}"`} fullWidth value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
            <Button variant="contained" color="primary" size="lg" type="submit" fullWidth>Add</Button>
           </form> 
        </Paper>
    )
}

export default Form
