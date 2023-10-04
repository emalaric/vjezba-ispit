import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import { CommentsComponent } from './Comments'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      if(res.status === 200)
      {
        console.log(posts)
        setPosts(res.data)
      }
    }
    fetchData();
  }, [])


  return (
    <>
      {posts.map((post, index) => {
        return (<div key={index}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <CommentsComponent postId={post.id}></CommentsComponent>
        </div>)
      })}
    </>
  )
}

export default App
