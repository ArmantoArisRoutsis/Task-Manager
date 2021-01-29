import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
import {useSelector} from "react-redux"
import Modal from "../modal/Modal"

const Navbar = ({showModal, setShowModal, setDisplayedTask}) => {

    const tasks = useSelector(state => state.tasks)


    return (
        <>
            <div className="nav-container">
            {console.log(tasks)}
                <ul>
                    {tasks.map(task=>(<a onClick={()=>setDisplayedTask(task)}> <li>{task.title}</li></a>))}
                </ul>
                <button onClick={()=>setShowModal(true)}>Create A new Post</button>
            </div>
            {showModal&&<Modal setShowModal={setShowModal}/>}
        </>
    )
}

export default Navbar
