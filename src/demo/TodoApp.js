
import {useReducer} from 'react'

//1
const initState = {
    job:'', 
    jobs: []
}
//2
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = payload => {
    return{
        type: SET_JOB,
        payload
    }
} 
const addJob = payload => {
    return{
        type: ADD_JOB,
        payload
    }
}   
console.log(setJob())
// 3
const reducer = (state, action) => {
    console.log('Actionl', action)
    console.log('Prev state:', state)
    let newState

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        default:
         throw new Error('Invalid Products.')
    }
    console.log('Newstate :', state)
    return newState
}

//4
function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initState);

    const handleSubmit = () => {
        dispatch(addJob(job))
    }

    const { job, jobs } = state
    return (
        <div>
            <h3>TODO</h3>
            <input
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
                        {job} &times;
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp;