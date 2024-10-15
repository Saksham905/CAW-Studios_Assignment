import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { createContext } from "react";
import Modal from "./components/Modal"
import TaskFilter from "./components/TaskFilter";
export const AppContext = createContext('App')

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const [taskString, setTaskString] = useState("")
  const [openModal, setOpenModal] = useState(false)
  const [editString, setEditString] = useState("")
  const [editIndex, setEditIndex] = useState(null)
  const [filteredTasks, setFilteredTasks] = useState([])

  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])

  const contextObj = {
    tasks,
    setTasks,
    taskString,
    setTaskString,
    openModal,
    setOpenModal,
    editString,
    setEditString,
    editIndex,
    setEditIndex,
    filteredTasks,
    setFilteredTasks
  }

  return (

    <div
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1683309567810-4d232ee83d2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm90ZXxlbnwwfHwwfHx8MA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center", 
      }}
      className="h-screen bg-gray-800 bg-opacity-20 backdrop-blur-md " >
      <AppContext.Provider value={contextObj}>
        <h1 className="mb-3 font-serif text-4xl font-semibold text-center">ToDo App</h1>
        <AddTask />
        {tasks.length > 0 ? <TaskFilter /> : null}
        <Modal />
        <TaskList />
      </AppContext.Provider>
    </div>

  )
}

export default App