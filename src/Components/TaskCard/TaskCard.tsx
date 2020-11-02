import React from 'react'

import MdTrash from "react-ionicons/lib/MdTrash"
import MdCheckmark from "react-ionicons/lib/MdCheckmark"

import "./taskCard.css"
import ActionButton from '../ActionButton/ActionButton'

interface Props {
    content: string,
    status: boolean,
    handleDelete: () => void,
    handleComplete: () => void,
}

const TrashStyle:React.CSSProperties = {
    width: "61px",
    height: "55px",
    backgroundColor: "var(--delete-button-background-color)",
    borderRadius: "20px",

    margin: "5px",
}

const CheckMarkStyle:React.CSSProperties = {
    width: "61px",
    height: "55px",
    backgroundColor: "var(--cherkMark-button-background-color)",
    borderRadius: "20px",

    margin: "5px",
}

const TaskCard:React.FC<Props> = ({content, handleDelete, handleComplete, status}) => {

    return (
        <div className={status? "taskCard-container completed" : "taskCard-container"}>
            <section className="taskContent">
                {content}
            </section>
            <section className="taskActions">
            <ActionButton lable={<MdCheckmark color={"var(--icon-color)"}/>} onClick={handleComplete} style={CheckMarkStyle}/>
            <ActionButton lable={<MdTrash color={"var(--icon-color)"}/>} onClick={handleDelete} style={TrashStyle}/>
            </section>
        </div>
    )
}

export default TaskCard
