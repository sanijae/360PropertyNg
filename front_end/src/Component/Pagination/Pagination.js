import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Hooks/useHooks'
import Paginate from './Paginate'
import Post from './Post'

export default function Pagination() {
  const {posts,page} = useAuth()
  useEffect(()=>{
    //
  })
  return (
    <div className='container p-3 bg-dark'>
      <Paginate postPerPage={6} totalPost={posts.total} page={page} />
    </div>
  )
}


export function Pagin() {
const [post,setPost] = useState([])
const [loading,setLoading] = useState(false)
const  [currentPage,setCurrentPage] = useState(0)
const [postPerPage] = useState(10)
const indexOfLastPost = currentPage * postPerPage
const indexOfFirstPost = indexOfLastPost - postPerPage
const currentPost = post.slice(indexOfFirstPost,indexOfLastPost)
const paginate = (number)=>setCurrentPage(number)

useEffect(()=>{
    return(async()=>{
      setLoading(true)
      const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPost(data.data)
      setLoading(false)
    })
  },[])
  //console.log(post);
  return (
    <div className='container mt-4'>
      <h2 className='text-primary mb-3'>Post list</h2>
      <Post posts={currentPost} loading={loading} />
      <Paginate postPerPage={postPerPage} totalPost={post.length} paginate={paginate} />
    </div>
  )
}