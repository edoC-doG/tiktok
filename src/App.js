import './App.css';
import {useCallback, useState} from 'react';
import Conten from './demo/Conten';
import Time from './demo/Time';
import Chat from './demo/Chat'
import Ref from './demo/Ref';
import Memo from './demo/Memo';
import UseMemo from './demo/UseMemo';
import UseReducer from './demo/UseReducer';
import TodoApp from './demo/Todo';
import Content from './demo/Content/Content'
// Check Id two binding
// const courses = [
//   {
//     id :1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name:'JavaScript'
//   },
//   {
//     id:3,
//     name:'ReactJS'
//   }
// ]
// function App() {
  
//   const [checked, setChecked] = useState([])

//   console.log(checked)

//   const handleSubmit =()=> {
//     console.log({ ids: checked});

//   }

//   const handleCheck = (id) => {
//       setChecked(prev => {
//           const isChecked = checked.includes(id)
//           if (isChecked) {
//             return checked.filter(item => item !== id)
//           } else {
//             return [...prev, id]
//           }
//       })
//   }
  
//   return (
//     <div className="App">
//       {courses.map(course =>(
//         <div key={course.id}>
//           <input 
//             type="checkbox"
//             checked = {checked.includes(course.id)}
//             onChange = {() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//      <button
//       onClick={handleSubmit}
//      >Submit
//      </button>
//     </div>
//   );
// }

// Todo list
// function App (){
//   const [job, setJob] = useState('');
//   const [jobs, setJobs] = useState(
//     ()=> {
//     const storeJobs = JSON.parse(localStorage.getItem('job'))
//     return storeJobs
//   }
//   )
//   const handleAdd = ()=> {
//     setJobs (prev => {
//      const newJobs = [...prev,job]
//      const jsonJobs = JSON.stringify(newJobs) 
//      localStorage.setItem('job', jsonJobs )
//      return newJobs
//     })
    
//     setJob('')
//   }
//   return (
//     <div className='App'>
//         <input
//           value={job}
//           onChange={a => setJob(a.target.value)} 
//         />
//         <button onClick={handleAdd}>Add</button>

//         <ul>
//            {jobs.map((job, index) =>(
//               <li key={index}>{job}</li>
//             ))}
//         </ul>
//     </div>
//   )
// }

//Mounted/ Unmounted

function App (){
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);
  const [ref, setRef] = useState(false);
  const [count, setCount] = useState(0);
  const [reducer, setReducer] = useState(false);
  const [todo, setTodo] = useState(false);
  const [content, setContent] = useState(false);
  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount +1) 
  }, [])

  return (
    <div className='App'>
        <div className='Unmoun'>
           <button onClick={() => setShow(!show)}>Show</button>
            {show && <Conten/>}
        </div>
        <div className='Clock'>
          <button onClick={() => setToggle(!toggle)}>Toggle</button>
          {toggle && <Time/>}
        </div>     
        <div className='comChat'>
          <button onClick={() => setClick(!click)}>Click here !</button>
          {click && <Chat/>}
        </div>    
        <div className='comRef'>
          <button onClick={() => setRef(!ref)}>Click here !</button>
          {ref && <Ref/>}
        </div>  
        <Memo onIncrease={handleIncrease}/>
        <h1>{count}</h1>
        <UseMemo/> 
        <div className='useRef'>
          <button onClick={() => setReducer(!reducer)}>Click useReducer</button>
          {reducer && <UseReducer/>}
        </div>  
        <div className='toDo'>
          <button onClick={() => setTodo(!todo)}>Click useReducer</button>
          {todo && <TodoApp/>}
        </div>
        <div className='content'>
          <button onClick={() => setContent(!content)}>Click useContent</button>
          {content && <Content/>}
        </div>    
    </div>
  )
}


// function App (){
//   return (
//     <div className='App'>

//     </div>
//   )
// }
export default App;
