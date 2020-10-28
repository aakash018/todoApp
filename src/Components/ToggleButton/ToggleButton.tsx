import React, { useRef, useState } from 'react'

import MdSunny from "react-ionicons/lib/MdSunny"
import MdMoon from "react-ionicons/lib/MdMoon"

// const MdSunny = require("react-ionicons/lib/MdSunny")

import "./toggleButton.css"

interface Props {
    onClick: () => void
}

const ToggleButton:React.FC<Props> = ({ onClick }) => {

    const toggleButton:React.RefObject<HTMLDivElement> = useRef(null)
    const [toggleIcon, setToogleIcon] = useState(true)
    const handleButtonToggle = () => {
        toggleButton.current?.classList.toggle("dark")
        setToogleIcon(prev => !prev)
        if(onClick && typeof onClick === "function") {
            onClick();
        }
    }

    return (
        <div>
            <div className="togglgeButton-body" onClick={handleButtonToggle} >
                <div className="toggleButton-switch" ref={toggleButton}>{toggleIcon? <MdSunny fontSize="1.5rem" color={"orange"}/> : <MdMoon fontSize="1.4rem"/>}</div>
            </div>
        </div>
    )
}

export default ToggleButton

// react-ionicons