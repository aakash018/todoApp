import React from 'react'
// type TaskOptions = "All" | "Completed" | "Unfinished"

interface Props {
    options: string[]
    stateToSet: React.Dispatch<React.SetStateAction<any>>
    style?: React.CSSProperties
}

const Select:React.FC<Props> = ({options, stateToSet, style}) => {

    const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        stateToSet(e.target.value)
    }

    return (
        <div className="select-container">
            <select defaultValue="All" onChange={handleSelectChange} style={style}>
                {options.map(option => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Select
