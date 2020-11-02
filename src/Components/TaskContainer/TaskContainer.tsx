import React from 'react'
import TaskCard from '../TaskCard/TaskCard'

import "./taskContainer.css"

type TaskOptions = "All" | "Completed" | "Unfinished"


interface Props {
    tasks: {task: string, status: boolean}[]
    setTasks: React.Dispatch<React.SetStateAction<any>>
    taskFilterFlag: TaskOptions
}

const TaskContainer:React.FC<Props> = ({tasks, setTasks, taskFilterFlag}) => {



    const deleteTask = (taskToDelete: number):void => {       
        setTasks(tasks.filter((_, index) => {
            return (index !== taskToDelete)
        }))
    }

    const handleTaskCompleted = (taskCompleted: number) => {
        setTasks(tasks.map((task, index) => {
            if(index === taskCompleted){
                task.status = !task.status
            }
            return(task)
        }))
    }

    return (
        <div id="taskContainer-container">
        
            {tasks.map((task, index) => {
                if(taskFilterFlag === "All") {
                return <TaskCard key={index} content={task.task} handleDelete={() => deleteTask(index)} status={task.status} handleComplete={() => handleTaskCompleted(index)}/>
                } else if (taskFilterFlag === "Completed") {
                    if(task.status === true) {    
                    return <TaskCard key={index} content={task.task} handleDelete={() => deleteTask(index)} status={task.status} handleComplete={() => handleTaskCompleted(index)}/>
                    }
                } else {
                    if(task.status === false) {
                    return <TaskCard key={index} content={task.task} handleDelete={() => deleteTask(index)} status={task.status} handleComplete={() => handleTaskCompleted(index)}/>
                    }
                }
                //This Is just for tle lints. MAp Never Goes Here
                return null
            })}
        </div>
    )
}

export default TaskContainer
