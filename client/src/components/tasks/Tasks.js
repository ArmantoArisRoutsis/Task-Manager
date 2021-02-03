import React,{useState} from 'react'
import moment from "moment"

import {useDispatch} from "react-redux"
import {updateTask} from "../../actions/tasks"

import Task from "./task/Task"



import "./Tasks.css"

const Tasks = ({displayedTask,setDisplayedTask, handleDelete}) => {
    const dispatch = useDispatch()
    
    const handleRemove =(todo)=>{
        const newList = displayedTask.todos.filter(each=>each!==todo)

        console.log(newList)
        setDisplayedTask({...displayedTask,todos:newList})
        dispatch(updateTask(displayedTask))
    }

    return (
        <article className="main-tasks-container">
            <h2>{displayedTask.title}</h2>
            <h5>{moment(displayedTask.createdAt).fromNow()}</h5>
            <p>{displayedTask.description}</p>
            <button className="tasks-delete" onClick={handleDelete}>Delete Task</button>
            <div className="sub-task-container">
                {displayedTask.todos.map(todo=><Task task={todo} handleRemove={handleRemove}/>)}
            </div>
        </article>
    )
}

export default Tasks
