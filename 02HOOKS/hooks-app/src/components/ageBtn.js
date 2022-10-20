import React from "react"

const AgeBTN = ({handleAge}) => {

    console.log('5 - AgeBTN')

    return(
        <>
            <button
                onClick={handleAge}
            >
                Increment the age
            </button>
        </>
    )
}

export default React.memo(AgeBTN)