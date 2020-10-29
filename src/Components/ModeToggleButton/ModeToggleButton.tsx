import React, { useState } from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'

const ModeToggleButton:React.FC = () => {

    type Theme = "Dark" | "Light"

    const [currentTheme, setTheme] = useState<Theme>("Light")

    const handleThemeChange = ():void => {

        if(currentTheme === "Light") {
            document.body.style.setProperty("--background-theme-color", "#545454")
            document.body.style.setProperty("--todo-container-background-color", "#343333")
            document.body.style.setProperty("--text-color", "white")
            document.body.style.setProperty("--input-field-background", "#DFDFDF")
            document.body.style.setProperty("--toggle-button-background-color", "#c4c4c4")
            document.body.style.setProperty("--todoDisplay-background-color", "#979797")
            document.body.style.setProperty("--task-card-background-color", "#4B4848")
            document.body.style.setProperty("--delete-button-background-color", "#7A4C4C")
            document.body.style.setProperty("--cherkMark-button-background-color", "#979797")
            setTheme("Dark")
        } else {
            document.body.style.setProperty("--background-theme-color", "#6fcf97")
            document.body.style.setProperty("--todo-container-background-color", "#f5f073")
            document.body.style.setProperty("--text-color", "black")
            document.body.style.setProperty("--input-field-background", "#faeab9")
            document.body.style.setProperty("--toggle-button-background-color", "#c4c4c4")
            document.body.style.setProperty("--toggle-button-background-color", "white")
            document.body.style.setProperty("--todoDisplay-background-color", "#f3f1bf")
            document.body.style.setProperty("--task-card-background-color", "#f2e1b5")
            document.body.style.setProperty("--delete-button-background-color", "#ea637c")
            document.body.style.setProperty("--cherkMark-button-background-color", "#6ad394")
            setTheme("Light")
        }

        
    }

    return (
        <div>
            <ToggleButton onClick={handleThemeChange} />
        </div>
    )
}

export default ModeToggleButton;
