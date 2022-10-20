import React, { useState, useCallback } from "react"

import Title from "./components/title"
import Count from "./components/count"
import CountBTN from "./components/countBtn"
import Age from "./components/age"
import AgeBTN from "./components/ageBtn"

const App = () => {

    const [count, setCount] = useState(0)
    const [age, setAge] = useState(10)

    const handleCount = useCallback(() => {
        setCount(count + 1)
    }, [count])

    const handleAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    return(
        <>
            <Title/>
            <Count
                count={count}
            />
            <CountBTN 
                handleCount={handleCount}
            />
            <Age
                age={age}
            />
            <AgeBTN
                handleAge={handleAge}
            />
        </>
    )
}

export default App