import React from 'react'
import {Container, Typography, Grow, Grid} from "@material-ui/core"

import Tasks from "../tasks/Tasks"
import Form from "../form/Form"
import Modal from "../modal/Modal"
import NewForm from "../form/newForm"
import {useSelector,useDispatch} from "react-redux"
import {deleteTask,getTasks} from "../../actions/tasks"


const HomePage = ({displayedTask,setDisplayedTask}) => {
    const dispatch = useDispatch()

    const tasks = useSelector(state => state.tasks)

    // const tasks = useSelector(state => state.tasks)
    const handleDelete=()=>{
        if(tasks){
            setDisplayedTask(tasks[0])
        }else{
            setDisplayedTask(null)
        }
        
        dispatch(deleteTask(displayedTask))
    }
    

    return (
    displayedTask&&<> 
        <Container maxWidth="lg" style={{marginLeft:"400px"}}>
            <Grow in>
            <div>
                <Tasks displayedTask={displayedTask} setDisplayedTask={setDisplayedTask} handleDelete={handleDelete}/>
                <NewForm displayedTask={displayedTask} setDisplayedTask={setDisplayedTask}/>
            </div>
            </Grow>
        </Container>
    </>
    )
}

export default HomePage
