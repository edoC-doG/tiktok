import { useReducer, useState } from "react";

// useState
// 1 Init state : 0
// 2 Action: Up (state +1) / Down( state -1)

// useReducer
// 1 Init state: 0
// 2 Action: Up (state+1)/ Down ( state -1 )
// 3 Reducer
// 4 Dispatch

//1 Init state:
const initState = 0

//2 Action:
const UP_ACTION ='up'
const DOWN_ACTION='down'

//3 Reducer
const reducer = (state, action) => {
        switch (action) {
            case UP_ACTION:
                return state + 1
            case DOWN_ACTION:
                return state - 1
            default:
                throw new Error('Invalid action')
        }
}

function UseReducer() {
    // Chay useReducer gọi reducer nhưng chưa dùng, 
    // nhận giá trị initState và trả về 1 array 
    const [count , dispatch] = useReducer (reducer, initState)
    return(
        <>
            <h1>{count}</h1>
            <button 
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button 
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>   
        </>
    )
}


export default UseReducer;