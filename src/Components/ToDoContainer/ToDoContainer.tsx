import React, { useState } from 'react'
import useLocalStorage from '../../CustomHooks/useLocalStorage'
import Input from '../Input/Input'
import TaskContainer from '../TaskContainer/TaskContainer'
import "./toDoContainer.css"

const ToDoContainer:React.FC = () => {

    const [taskArray, setTaskArray] = useLocalStorage("-todo-task-input", [])

    const [taskInput, setTaskInput] = useState("")

    const InputStyle:React.CSSProperties = {
        width: "70%",
        height: "40px",
        outline: "none",
        border: "1px solid black",
        backgroundColor: "var(--input-field-background)",
        borderRadius: "20px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: "20px",
        paddingLeft: "10px",
        fontFamily: "Poppins",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    }

    return (
        <div id="todo-container">
            <section className="heading">TO-DO</section>
            <Input type="text" placeHolder="Add Task" stateToUpdate={setTaskInput} style={InputStyle}/>
            <button onClick={() => setTaskArray(taskArray.concat(taskInput))}>Click</button>
            <section id="taskContainer">
                <TaskContainer tasks={taskArray} setTasks={setTaskArray}/>
            </section>
        </div>
    )
}

export default ToDoContainer
