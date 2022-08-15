import {  useLayoutEffect, useState } from "react"


// const lessons = [
//     {
//         id:1,
//         name:   'Phuoc ngu'
//     },
//     {
//         id:2,
//         name: 'Phuoc ngu +1'
//     },
//     {
//         id:3,
//         name: 'Phuoc ngu +2'
//     }
// ]
// function Chat() {

//     const [lessonId, setLessonId] = useState(1)
    
//     useEffect(()=>{
//         const handleComment = ({ detail})=> {
//             console.log(detail)
//         } 
//         window.addEventListener(`lesson-${lessonId}`, handleComment)

//         return ()=> {
//         window.removeEventListener(`lesson-${lessonId}`, handleComment)

//         }
//     }, [lessonId])

//     return  (
//         <div>
//             <ul>
//                 {lessons.map(lesson => (
//                     <li 
//                         key={lesson.id}
//                         style = {{
//                             color: lessonId === lesson.id ?
//                                 'red':
//                                 '#333'
//                         }}
//                         onClick = {()=> setLessonId(lesson.id)}     
//                     >
//                         {lesson.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật Dom (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu dep thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại State
// 2. Cập nhật lại DOM (mutated)
// 3. Gọi lại cleanup nếu dep thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI
function Chat() {
    const [count, setCount] = useState(0)   

    useLayoutEffect(() => {
        if (count >3)
        setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(prev => prev +1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun} >RUN</button>
        </div>
    )
}


export default Chat