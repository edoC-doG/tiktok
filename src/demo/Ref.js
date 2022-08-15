
// Lưu giá trị qua một tham chiếu bên ngoài
// function component
//Khi chúng ta dùng useRef để lưu giá trị, thì khi phải render lại một function component, giá trị đã lưu sẽ không bị thay đổi, mà vẫn giữ được giá trị đã lưu trước đó.

import { useEffect, useRef, useState } from "react"

function Ref() {
    const [count, setCount] = useState (60)
    const timeId = useRef()
    const prev = useRef()
    const h1ref = useRef()
    useEffect(() =>{
        prev.current = count
    }, [count])

    useEffect(() =>{
        console.log(h1ref.current)
    })
        const handleStart = () => {
            timeId.current = setInterval(()=>{
               setCount (prev => prev -1)
            },1000) 
            console.log(`start ${timeId.current}`)
        }
        const handleStop = () => {
            clearInterval(timeId.current)
        }
        console.log(count, prev.current) 
    return (
        <div>
            <h1 ref={h1ref}>{count}</h1>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Ref