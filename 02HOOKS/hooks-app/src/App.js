import React from "react"

import { MyProvider } from './context/index'
import User from "./components/user"

const App = () => {
    
    return(
        <>
            <MyProvider>
                <User/>
            </MyProvider>
        </>
    )
}

export default App