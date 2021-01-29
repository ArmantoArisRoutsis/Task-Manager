import React,{useState, useEffect} from "react"
import HomePage from "./components/homePage/HomePage"
import Navbar from "./components/navbar/Navbar"

import {getTasks} from "./actions/tasks"
import {useDispatch} from "react-redux"

function App() {
  const [showModal,setShowModal] = useState(false)
  const [displayedTask,setDisplayedTask] = useState({})

  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTasks());
    }, [dispatch])
    
  return (
    <>
    {console.log(displayedTask)}
    <Navbar showModal={showModal} setShowModal={setShowModal} setDisplayedTask={setDisplayedTask}/>
    <HomePage displayedTask={displayedTask} setDisplayedTask={setDisplayedTask}/>
    </>
  );
}

export default App;
