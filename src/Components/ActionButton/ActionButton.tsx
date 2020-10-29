import React, { ReactElement } from 'react'

import "./actionButton.css"

interface Props {
    lable: ReactElement | string
    onClick: () => void
    style?: React.CSSProperties
}

const ActionButton:React.FC<Props> = ({lable, onClick, style}) => {
    return (
        <div className="action-button-container">
            <button onClick={onClick} style={style}>{lable}</button>
        </div>
    )
}

export default ActionButton
