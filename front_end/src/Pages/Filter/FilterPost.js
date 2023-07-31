import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {useAuth} from '../../Hooks/useHooks'
import Lists from '../../Component/ListPage/Lists'

export default function FilterPost() {
  const [post,setPost] = useState([])
  const {filterPosts} = useAuth()
  useEffect(()=>{
    return(async()=>{
      const res = filterPosts.result
      setPost(res)
    })
  },[post,filterPosts])
  return (
    <Container fluid>
      <Lists post={post} />
    </Container>
  )
}
