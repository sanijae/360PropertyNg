import React, { useEffect, useState }  from 'react'
import { getPosts } from '../../../Api/ApiCalls'
import Lists from '../../../Component/ListPage/Lists'
import { useAuth } from '../../../Hooks/useHooks'

 
function Post() {
    const [post,setPost] = useState([]) 
    const {page,posts,setPosts} = useAuth()
    useEffect(()=>{
        return(async()=>{
           const post = await getPosts(page)
           setPosts(post.data);
        })
    },[ page, setPosts])
    useEffect(()=>{
      return(()=>setPost(posts.result))
    })
     
  return (
    <Lists post={post}/>
  )
}

export default Post
