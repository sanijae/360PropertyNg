import React, { useEffect, useState } from 'react'
import { Container } from './Style'
import List from '../../Component/ListPage/Lists'
import { fetchPostByCategory } from '../../Api/ApiCalls'
import { useAuth } from '../../Hooks/useHooks'
import Paginations from './Pagination/Pagination'
import { Paper } from '@mui/material'

export default function Sale() {
  const [post,setPosts] = useState([])
  const {page} = useAuth()
  useEffect(()=>{
    return(async()=>{
      try {
        const res = await fetchPostByCategory('Sell',page)
        if(res.data.error){
            alert(res.data.error)
        }else{
            setPosts(res.data)
        }
    } catch (error) {
        console.log(error.message);
    }
    })
  })
    return (
      <Container>
        <List post={post.result} />
        <Paper elevation={6} 
          sx={{justifyContent:'center',display:'flex',margin:'auto',padding:'10px',background:'rgba(0,0,0,.4)'}}>
          <Paginations post={post}/>
        </Paper>      
      </Container>
    )
  }
  
