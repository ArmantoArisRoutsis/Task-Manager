import React,{useState} from 'react'
import {TextField, Button, Typography, Paper} from "@material-ui/core"
import {useDispatch} from "react-redux"
import {createTask} from "../../actions/tasks"

const Form = ({setShowModal}) => {
    const [taskData, setTaskData] = useState({
        creator:"",title:"",description:"",todos:[]
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createTask(taskData))
        setTaskData({creator:"",title:"",description:"",todos:[]})
        setShowModal(false)
    }

    return (
        <Paper>
           <form autoComplete="off" onSubmit={handleSubmit} style={{padding:"20px"}}>
            <Typography variant="h6">Add a new task</Typography>
            <TextField style={{marginTop:"10px"}} name="taskTitle" variant="outlined" label="Title" fullWidth value={taskData.title} onChange={(e)=>setTaskData({...taskData,title:e.target.value})}/>
            <TextField multiline rows={2} rowsMax={4}  style={{marginTop:"10px"}} name="taskDescription" variant="outlined" label="Description" fullWidth value={taskData.description} onChange={(e)=>setTaskData({...taskData,description:e.target.value})}/>
            <Button style={{marginTop:"10px"}} variant="contained" color="primary" size="lg" type="submit" fullWidth>Add</Button>
           </form> 
        </Paper>
    )
}

export default Form
