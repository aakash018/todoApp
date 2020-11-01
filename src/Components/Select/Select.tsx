import React, { useEffect }  from 'react'

interface Props {
    options: string[]
    stateToSet: React.Dispatch<React.SetStateAction<string>>
}

const Select:React.FC<Props> = ({options, stateToSet}) => {


useEffect(() => {
    stateToSet("All")
},[stateToSet])

    const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        stateToSet(e.target.value)
    }

    return (
        <div className="select-container">
            <select defaultValue="All" onChange={handleSelectChange}>
                {options.map(option => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Select
