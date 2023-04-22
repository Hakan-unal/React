import { useState, useEffect } from "react"


const getSavedValue = (key: string, initial: any) => {

    const value = JSON.parse(localStorage.getItem(key) || JSON.stringify(initial))
    if (value) return value

    if (value instanceof Function) return initial()

}

export const useLocalStorage = (key: string, initial: any) => {
    const [val, setVal] = useState(() => {
        return getSavedValue(key, initial)
    })


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(val))
    }, [val])

    return [val, setVal]
}