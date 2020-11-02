import React, { ReactElement } from 'react'

import "./actionButton.css"

type BtuuonType = "button" | "reset" | "submit"

interface Props {
    lable: ReactElement | string
    onClick: () => void
    style?: React.CSSProperties
    type?: BtuuonType

}

const ActionButton:React.FC<Props> = ({lable, onClick, style, type}) => {
    return (
        <div className="action-button-container">
            <button onClick={onClick} style={style} type={type || "button"}>{lable}</button>
        </div>
    )
}

export default ActionButton
