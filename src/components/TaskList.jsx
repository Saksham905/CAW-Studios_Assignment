import React, { useContext } from "react"
import TaskItem from "./TaskItem"
import { AppContext } from "../App"

const TaskList = () => {
    const contextObj  = useContext(AppContext)
    const {setTasks,filteredTasks} = contextObj

    function onToggle(index) {
        setTasks((prev) =>
            prev.map((task, i) =>
                i === index ? { ...task, checked: !task.checked } : task
            )
        )
    }

    return (
        <div className="flex flex-wrap">
            {filteredTasks.map((task, index) =>
                <TaskItem
                    key={index}
                    index={index}
                    task={task}
                    onToggle={onToggle}
                />)}
        </div>
    )
}


export default TaskList