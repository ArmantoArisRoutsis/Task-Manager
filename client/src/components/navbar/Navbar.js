import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
import {useSelector} from "react-redux"
import Modal from "../modal/Modal"
import Backdrop from "../backdrop/Backdrop"

const Navbar = ({showModal, setShowModal, setDisplayedTask}) => {

    const tasks = useSelector(state => state.tasks)

    const createNewTask =(e)=>{
        e.preventDefault();
        setShowModal(true)
    }

    return (
        <>
            <div className="nav-container">
                <h1>Task Manager</h1>
                {tasks.length&&<ul>
                    {tasks.map(task=>(<a onClick={()=>setDisplayedTask(task)}> <li>{task.title}</li></a>))}
                </ul>}
                <a className="create-new-task-btn" href="" onClick={createNewTask}>Create A New Task</a>
            </div>
            {showModal&&<Backdrop onClick={()=>setShowModal(false)}/>}
            {showModal&&<Modal setShowModal={setShowModal}/>}
        </>
    )
}

export default Navbar
