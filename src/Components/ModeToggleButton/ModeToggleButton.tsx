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
            setTheme("Dark")
        } else {
            document.body.style.setProperty("--background-theme-color", "#6fcf97")
            document.body.style.setProperty("--todo-container-background-color", "#f5f073")
            document.body.style.setProperty("--text-color", "black")
            document.body.style.setProperty("--input-field-background", "#faeab9")
            document.body.style.setProperty("--toggle-button-background-color", "#c4c4c4")
            document.body.style.setProperty("--toggle-button-background-color", "white")


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
