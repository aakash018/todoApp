import React from 'react'
import TaskCard from '../TaskCard/TaskCard'

import "./taskContainer.css"

interface Props {
    tasks: string[]
    setTasks: React.Dispatch<React.SetStateAction<any>>
}

const TaskContainer:React.FC<Props> = ({tasks, setTasks}) => {


    const deleteTask = (taskToDelete: number):void => {
        setTasks(tasks.filter((task, index) => {
            return (index !== taskToDelete)
        }))
    }

    return (
        <div id="taskContainer-container">
            {tasks.map((task, index) => (
                <TaskCard key={index} content={task} handleDelete={() => deleteTask(index)} />
            ))}
        </div>
    )
}

export default TaskContainer
