import { Pagination,PaginationItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../Hooks/useHooks'
 
function Paginations({post}) {
    const {page} = useAuth()
  return (
    <Pagination
     count={post.totalPages}
     page={page}
     variant='outlined'
     renderItem={(item)=>(
         <PaginationItem {...item}
         style={{color:'#550055',background:'#fff',fontWeight:'bold',margin:'10px'}}
         component={Link} to={`/post?page=${item.page}`} />
     )}
    />
  )
}

export default Paginations
