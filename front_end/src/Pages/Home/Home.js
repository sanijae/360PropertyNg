import { Paper } from '@mui/material'
import React from 'react'
import Post from './Post/Post'
import Paginations from './Pagination/Pagination'


export default function Home() {
  return (
     <div className='bg-white'>
      <Post />
      <Paper elevation={6} 
      sx={{justifyContent:'center',display:'flex',margin:'auto',padding:'10px',background:'rgba(0,0,0,.4)'}}>
        <Paginations />
      </Paper>      
    </div>
    )
}

  