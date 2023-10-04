import { useEffect, useState } from "react"
import axios from "axios"

export default function CommentsComponent({postId}) 
{
    const [comments, setComments] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    
    return (
        <>
            <button onClick={async () => {
                setIsClicked(true)
                const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                if(res.status === 200)
                {
                    setComments(res.data)
                }
            }}>Show comments</button>
            
            { isClicked && comments.map((comment, index) => {return <p key={index}>{comment.body}</p>})}
        </>
    )
}