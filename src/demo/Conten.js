//1. useEffect (Callback)
// - Goi callback moi khi component dc render
// - Goi callback sau khi component them element vao DOM.
//2. useEffect (Callback, [])
// - Chi goi callback 1 lan sau khi component mounted
//3. useEffect ( Callback, [dep])
// - Callback se luon dc goi lai moi khi dep thay thoi
//-----
// CallBack luon dc goi sau khi component mounted.
//Clean up funct dc goi  trc khi component unmounted.
// Clean up funct dc goi trc khi callback  dc goi trc khi component 

import { useEffect, useState } from "react"
const tabs = ['posts', 'comments','albums']

function Conten() {
    const [title, setTitle] = useState ('')
    const [posts, setPosts] = useState ([])
    const [type, setTypes] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then (res => res.json())
        .then (posts => {
                setPosts(posts);
        })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            // C1
            // if (window.scrollY >= 200) {
            //     setShowGoToTop (true)
            // }else{
            //     setShowGoToTop(false)
            // }
            //C2
            setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll',handleScroll)
        // Clean up function.
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    }, [])
    return(
        <div>
            {tabs.map(tab =>(
                <button 
                    key={tab}
                    style ={type === tab ? {
                        color: '#fff',
                        backgroundColor:'#333',
                    } : {}}
                    onClick = {() => setTypes(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={a => setTitle(a.target.value)}
            />          
            <ul>
                {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                Go to top    
                </button>
            )}
     </div>
    )
}
export default Conten