import { useEffect, useState } from "react";

// function Time (){

//     const [countDown, setCountDown] = useState (30);
//     useEffect(() => {
//         const timerId = setInterval(() => {
//               setCountDown(preState => preState - 10)
//         },1000)
//         return () => clearInterval(timerId)
//     }, [])

//         return (
//             <div>
//                 <h1>{countDown}</h1>
//             </div>
//         )
// }

function Time() {
    const [avatar, setAvatar] = useState()

    useEffect (()=> {
        // Cleanup
        return () => {
           avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])

    const handleChange = (e) => {
        const file = e.target.files[0];  
        file.preview = URL.createObjectURL(file);
        setAvatar(file)
        e.target.value = null
    }
    return (
        <div>
            <input  
                type="file"
                onChange={handleChange}
            />
            {avatar && 
                <img src={avatar.preview} width="50%" />
            }
        </div>
    )
}


export default Time;