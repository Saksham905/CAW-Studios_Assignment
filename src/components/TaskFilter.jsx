import React, { useContext, useState, useEffect } from "react"
import { Dropdown } from "flowbite-react";
import { AppContext } from "../App";

const TaskFilter = () => {
    const contextObj = useContext(AppContext)
    const [filter, setFilter] = useState('all');
    let { tasks, setFilteredTasks } = contextObj


    useEffect(() => {
        const updatedTasks = tasks.filter(task => {
            if (filter === 'completed') return task.checked;
            if (filter === 'pending') return !(task.checked);
            return true;
        });
        setFilteredTasks(updatedTasks);
    }, [tasks, filter]);

    return (
        <div className="flex my-2 justify-center">
            <Dropdown label={filter} dismissOnClick={true}>
                <Dropdown.Item value={"all"} onClick={() => setFilter("all")}>All</Dropdown.Item>
                <Dropdown.Item value={"completed"} onClick={() => setFilter("completed")}>Completed</Dropdown.Item>
                <Dropdown.Item value={"pending"} onClick={() => setFilter("pending")}>Pending</Dropdown.Item>
            </Dropdown>
        </div>
    );
}

export default TaskFilter