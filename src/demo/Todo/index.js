import {useReducer, useRef} from 'react'
import reducer, {initState} from './reducer'
import {setJob, addJob, deleteJob} from './action'
import logger from './logger';
//1
// const initState = {
//     job:'', 
//     jobs: []
// }
//2
// const SET_JOB = 'set_job';
// const ADD_JOB = 'add_job';
// const DELETE_JOB = 'delete_job';

// const setJob = payload => {
//     return{
//         type: SET_JOB,
//         payload
//     }
// } 
// const addJob = payload => {
//     return{
//         type: ADD_JOB,
//         payload
//     }
// }
// const deleteJob = payload => {
//     return{
//         type: DELETE_JOB,
//         payload
//     }
// }   
// console.log(setJob())
// 3
// const reducer = (state, action) => {
//     console.log('Actionl', action)
//     console.log('Prev state:', state)
//     let newState

//     switch (action.type) {
//         case SET_JOB:
//             newState = {
//                 ...state,
//                 job: action.payload
//             }
//             break
//         case ADD_JOB:
//             newState = {
//                 ...state,
//                 jobs: [...state.jobs, action.payload]
//             }
//             break
//             case DELETE_JOB:
//                 const newJobs = [...state.jobs]
//                 newJobs.splice(action.payload, 1)
//                 newState = {
//                     ...state,
//                     jobs: newJobs
//                 }
//                 break
//         default:
//          throw new Error('Invalid Products.')
//     }
//     console.log('Newstate :', state)
//     return newState
// }

//4
function TodoApp() {
    const [state, dispatch] = useReducer(logger(reducer), initState);
    const { job, jobs } = state
    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }
    return (
        <div>
            <h3>TODO</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={e => {            
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}
                    >
                        {job} 
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoApp;