import React, { useState } from 'react'
import useLocalStorage from '../../CustomHooks/useLocalStorage'
import ActionButton from '../ActionButton/ActionButton'
import Input from '../Input/Input'
import Select from '../Select/Select'
import TaskContainer from '../TaskContainer/TaskContainer'
import "./toDoContainer.css"

//Icons
import MdAdd from "react-ionicons/lib/MdAddCircle"

const ToDoContainer:React.FC = () => {

    type TaskOptions = "All" | "Completed" | "Unfinished"

    const [taskArray, setTaskArray] = useLocalStorage("-todo-task-input", [])
    const [taskOptions, setTaskOPtions] = useState<TaskOptions>("All")
    const [taskInput, setTaskInput] = useState("")


    const handleTaskAdd = () => {

        if(taskInput === "") {
            return null
        }
        
        interface Task  {
            task?: string,
            status?: boolean
        }

        const taskObject:Task = {}
        taskObject.task = taskInput
        taskObject.status = false

        setTaskArray(taskArray.concat(taskObject))
        setTaskInput("")
    }





    const InputStyle:React.CSSProperties = {
        width: "70%",
        height: "40px",
        outline: "none",
        border: "1px solid black",
        backgroundColor: "var(--input-field-background)",
        borderRadius: "20px",
        position: "absolute",
        top: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: "20px",
        paddingLeft: "10px",
        fontFamily: "Poppins",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        
    }

    const AddButtonStyle:React.CSSProperties = {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "transparent",

        position: "absolute",
        top: "102px",
        left: "10px",
    }

    const SelectStyle:React.CSSProperties = {
        height: "30px",
        fontFamily: "var(--default-font)",
        outline: "none",
        border: "none",
        position: "absolute",
        right: "30px",
        top: "60px",
        backgroundColor: "var(--select-background-color)"
    }

    return (
        <div id="todo-container">
            <section className="heading">TO-DO</section>
            
            <Select options={["All","Completed", "Unfinished"]} stateToSet={setTaskOPtions} style={SelectStyle}/>
           
            <form onSubmit={(e:React.FormEvent) => e.preventDefault()}>
            <Input type="text" placeHolder="Add Task" stateToUpdate={setTaskInput} style={InputStyle}/>
            <ActionButton lable={<MdAdd color="var(--add-icon-color)" fontSize={"3rem"}/>} onClick={handleTaskAdd} style={AddButtonStyle} type="reset"/>
            </form>

            <section id="taskContainer">
                <TaskContainer tasks={taskArray} setTasks={setTaskArray} taskFilterFlag={taskOptions}/>
            </section>
        </div>
    )
}

export default ToDoContainer
