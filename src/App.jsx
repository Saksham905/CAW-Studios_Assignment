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

      <div>
        <AppContext.Provider value={contextObj}>
          <h1 className="font-serif text-4xl font-semibold text-center my-1">ToDo App</h1>
          <AddTask />
          {tasks.length > 0 ? <TaskFilter /> : null}
          <Modal />
          <TaskList />
        </AppContext.Provider>
      </div>

  )
}

export default App