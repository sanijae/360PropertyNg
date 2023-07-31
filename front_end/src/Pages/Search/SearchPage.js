import React,{useState,useEffect} from 'react'
import { Container } from '../Rent/Style'
import Lists from '../../Component/ListPage/Lists'
import { useAuth } from '../../Hooks/useHooks'

export default function SearchPage(){
  const [post,setPost] = useState([])
  const {searchPosts} = useAuth()
  useEffect(()=>{
      return(()=>{
          setPost(searchPosts.result)
      })
  },[post,searchPosts])
   return (
        <Container>
            <Lists post={post} />
        </Container>
    )
}