import React from "react"

const CountBTN = ({handleCount}) => {

    console.log('3 - CountBTN')

    return(
        <>
            <button
                onClick={handleCount}
            >
                Increment the count
            </button>
        </>
    )
}

export default React.memo(CountBTN)