import React, { useReducer } from "react";
import { reducerFile } from "./utils/reducerFile";

const Reducer = () => {
    
    // const [state, dispatch] = useReducer((state, action)=>{
    //     ///Easy Method
    //     //return action
    //     ///Second Method
    //     // if(action === -1){
    //     //     return state - 1
    //     // }
    //     // return state + 1
    //     ///Third Method
    //     switch(action){
    //         case 'increment':
    //             return state + 1
    //         case 'decrement':
    //             return state - 1
    //         default:
    //             return state
    //     }
    // },0)

    const [state, dispatch] = useReducer(reducerFile,{user:'Steve', count:0, clicks:0})

    const changeNameHandler = () => {
        const newName = ['Mike', 'Francis', 'Ron', 'Steve']
        return{
            type:'change_name',
            payload: newName[Math.floor(Math.random()* newName.length)]
        }
    }

    return(
        <div className="container">
            <div>
                Current user: {state.user}
            </div>
            <div>
                Current count: {state.count}
            </div>
            <div>
                Current clicks: {state.clicks}
            </div>
            <button
                ///Easy Method
                //onClick={()=>dispatch(state + 1)}
                ///Second Method
                //onClick={()=>dispatch(1)}
                ///Third Method
                onClick={()=>dispatch({type:'increment', payload:1})}
            >
                Increment
            </button>
            <button
                ///Easy Method
                //onClick={()=>dispatch(state - 1)}
                ///Second Method
                //onClick={()=>dispatch(-1)}
                ///Third Method
                onClick={()=>dispatch({type:'decrement', payload:1})}
            >
                Decrement
            </button>
            <button
                ///First Method
                // onClick={()=>dispatch({type:'change_name', payload:'Mike'})}
                onClick={()=>dispatch(changeNameHandler())}
            >
                Change name
            </button>
        </div>
    )
}

export default Reducer