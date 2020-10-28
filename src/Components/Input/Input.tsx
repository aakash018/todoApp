import React  from 'react'

type InputType = "text" | "password" | "file"

interface Props {
    type: InputType,
    placeHolder?: string,
    stateToUpdate: React.Dispatch<React.SetStateAction<string>>,
    style?: React.CSSProperties
    onChange?: (input: string) => {}
}

const Input:React.FC<Props> = ({type, placeHolder, onChange, stateToUpdate, style}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        if(onChange){
        onChange(e.target.value)
        }
        if(stateToUpdate){
            stateToUpdate(e.target.value)
        }
    }
    return (
        <div className="input-container">
            <input type={type} placeholder={placeHolder} style={style} onChange={handleChange}/>
        </div>
    )
}

export default Input
