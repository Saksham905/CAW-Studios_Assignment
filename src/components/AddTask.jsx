import React, { useContext, useEffect } from "react";
import { AppContext } from "../App"
import { Button } from "flowbite-react";

export default () => {
    const contextObj = useContext(AppContext)
    const { setTaskString, taskString, setTasks, tasks } = contextObj


    function AddTask(event) {
        event.preventDefault()
        if (taskString !== "") {
            setTasks(prev => [...prev, { taskString, checked: false }])
            setTaskString("")
        }
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    return (
        <>
            <div className="flex justify-center">
                <form className="flex gap-3" onSubmit={(e) => AddTask(e)}>
                    <input className="border-2 border-black font-bold" value={taskString} onChange={(e) => setTaskString(e.target.value)} type="text" />
                    <Button type="submit">Add Task</Button>
                </form>
            </div>
        </>
    )
}

