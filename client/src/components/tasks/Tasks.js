import React from 'react'
import {useSelector} from "react-redux"
import Task from "./task/Task"

import "./Tasks.css"

const Tasks = () => {

    const tasks = useSelector(state => state.tasks)
    return (
        <article className="main-tasks-container">
            <h2>Title</h2>
            <h4>20 may 2020</h4>
            <div className="task-container">
            </div>
        </article>
    )
}

export default Tasks
