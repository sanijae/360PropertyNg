import React, { useState } from 'react'
import styled from 'styled-components'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import { Edit } from '@mui/icons-material'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'


export default function PostIndex({post}) {
    const [page,setPage] = useState(0)
    const [rowsPerPage,setRowsPerPage] = useState(10)
    const navigate = useNavigate()
    
    function handleChnage(e,newPage){
        setPage(newPage)
    }
    function handleRowsPerPageChange(e){
        setRowsPerPage( +e.target.value)
        setPage(0)
    }
  return (
    <Container>
      <Header>
          <Heading>Posts Lists</Heading>
          <Button>Add Post</Button>
      </Header>
      <TableContainer component={Paper}>
          <Table>
              <TableHead sx={{background:'rgb(20,10,10)',color:'#fff'}}>
                  <TableRow>
                      <TableCell sx={{color:'#fff',fontSize:'20px'}}>Title</TableCell>
                      <TableCell sx={{color:'#fff',fontSize:'20px'}}>Category</TableCell>
                      <TableCell sx={{color:'#fff',fontSize:'20px'}}>Type</TableCell>
                      <TableCell sx={{color:'#fff',fontSize:'20px'}}>Created At</TableCell>
                      <TableCell sx={{color:'#fff',fontSize:'20px'}}>Action</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {post?.result?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((post)=>(
                      <TableRow key={post._id}>
                          <TableCell>{post.name}</TableCell>
                          <TableCell>{post.category}</TableCell>
                          <TableCell>{post.type}</TableCell>
                          <TableCell>{moment(post.createdAt).format('DD MMM YYYY')}</TableCell>
                          <TableCell>
                              <Button onClick={()=>navigate(`/Post/${post._id}`)}><Edit/></Button>
                          </TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
          <TablePagination 
            rowsPerPageOptions={[10,50,100]}
            component={'div'}
            count={post?.result?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChnage}
            onRowsPerPageChange={handleRowsPerPageChange}
          />          
      </TableContainer>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
`
const Header = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background: rgb(20,10,10);
color:#fff;
padding: 10px;
`
const Button = styled.button`
border-radius: 10px;
border: 1px solid #fff;
background: inherit;
color: inherit;
padding: 10px;
`
const Heading = styled.div`
padding: 10px;
font-size: 20px;
`