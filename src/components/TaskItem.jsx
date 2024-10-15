import React, { useContext, useState } from "react"
import { AppContext } from "../App"
import { Button, Card } from "flowbite-react"
const TaskItem = (props) => {
    const { task, index, onToggle } = props
    const contextObj = useContext(AppContext)
    const { setOpenModal, setEditIndex, setTasks } = contextObj

    function deleteTask(index) {
        setTasks(prev => prev.filter((task, i) => i !== index))
    }


    return (
        <>
            <Card className="max-w-sm mt-4 w-72 mx-2">
                <div className="flex-col items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={task.checked}
                            onChange={() => onToggle(index)}
                        />
                        <p style={{ textDecoration: task.checked ? "line-through" : "none" }} >{task.taskString}</p>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <Button color="blue" onClick={() => { setOpenModal(true), setEditIndex(index) }}>Edit</Button>
                        <Button color="failure" type="delete" onClick={() => { deleteTask(index) }}>Delete</Button>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default TaskItem