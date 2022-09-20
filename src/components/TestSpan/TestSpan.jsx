import { useState, useEffect, useLayoutEffect } from 'react'

export const TestSpan = () => {
    const [number, setNumber] = useState(100)


    useLayoutEffect(() => {
        if (number === 100) {
            setNumber(Math.random())
        }
    }, [number])

    return (
        <p onClick={() => setNumber(100)}>{number}</p>
    )
}