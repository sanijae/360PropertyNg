import React from 'react'
import { useSelector } from 'react-redux'
import PostIndex from '../Component/Post/Index';

export default function Posts() {
  const {posts} = useSelector((state)=>state.posts) 
 // console.log(posts);
  return (
    <div>
      <PostIndex post={posts} />      
    </div>
  )
}
