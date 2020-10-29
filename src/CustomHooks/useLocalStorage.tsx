import { useState, useEffect } from 'react'

const useLocalStorage = (key: string, initialValue: string | number | object | []) => {
    
    const stored = localStorage.getItem(key)
    const initial  = stored ? JSON.parse(stored) : initialValue
    const [value, setValue] = useState(initial)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}

export default useLocalStorage
