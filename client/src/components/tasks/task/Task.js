import React,{useState} from 'react'
import {Spring} from "react-spring/renderprops"

import "./Task.css"

import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const Task = ({task, handleRemove}) => {

    return (
        <>
        <div className="task-box">
            <button onClick={()=>handleRemove(task)}><HighlightOffIcon/></button>
            <p> {task}</p>
        </div>
        </>
    )
}

export default Task
