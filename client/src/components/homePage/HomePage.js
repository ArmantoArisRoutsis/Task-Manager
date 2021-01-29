import React,{useState,useEffect} from 'react'
import {Container, Typography, Grow, Grid} from "@material-ui/core"

import Tasks from "../tasks/Tasks"
import Form from "../form/Form"
import Modal from "../modal/Modal"
import NewForm from "../form/newForm"
import {useSelector} from "react-redux"


const HomePage = ({displayedTask,setDisplayedTask}) => {

    const tasks = useSelector(state => state.tasks)
    

    return (
    <> 
        <Container maxWidth="lg" style={{marginLeft:"400px"}}>
            <Grow in>
            <div>
                <p>Created at {displayedTask.createdAt}</p>
                <h1>{displayedTask.title}</h1>
                <h2>{displayedTask.description}</h2>
                <h3>To do</h3>
                {displayedTask.todos.map(todo=>(<p>{todo}</p>))}
                <NewForm displayedTask={displayedTask} setDisplayedTask={setDisplayedTask}/>
            </div>
            </Grow>
        </Container>
    </>
    )
}

export default HomePage
