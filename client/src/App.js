import React,{useState, useEffect} from "react"
import HomePage from "./components/homePage/HomePage"
import Navbar from "./components/navbar/Navbar"

import {getTasks,updateTask} from "./actions/tasks"
import {useDispatch} from "react-redux"

function App() {
  const [showModal,setShowModal] = useState(false)
  const [displayedTask,setDisplayedTask] = useState(null)

  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTasks());
        dispatch(updateTask(displayedTask))
    }, [displayedTask])
    
  return (
    <>
    <Navbar showModal={showModal} setShowModal={setShowModal} setDisplayedTask={setDisplayedTask}/>
    <HomePage displayedTask={displayedTask} setDisplayedTask={setDisplayedTask}/>
    </>
  );
}

export default App;
