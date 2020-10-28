import React  from 'react'

import "./App.css"
import ModeToggleButton from './Components/ModeToggleButton/ModeToggleButton'
import ToDoContainer from './Components/ToDoContainer/ToDoContainer'

export default function App(){
    return (
        <div>
            <div id="themeToggle">
                <ModeToggleButton />
            </div>
            <ToDoContainer />
        </div>
    )
    
}