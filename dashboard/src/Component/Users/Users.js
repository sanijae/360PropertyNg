import { Edit } from '@mui/icons-material'
import { Avatar, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetch_users } from '../../Data/Actions/Users'
import UserModal from './UserModal'

export default function User() {
  const dispatch = useDispatch()
  const {users} = useSelector((state)=>state.users)
  const [userList,setUsers] = useState([])
  const [page,setPage] = useState(0)
  const [perPage,setPerPage] = useState(10)

  const [openUser,setOpenUser] = useState(false)
  
  useEffect(()=>{
    return(()=>{
      dispatch(fetch_users())
    })
  },[dispatch])
  useEffect(()=>{
    return(()=>{
      setUsers(users?.result)
    })
  })
  function handlePageChange(e,newPage){
      setPage(newPage)
  }
  function handlePerPageChange(e){
    setPerPage(+e.target.value)
  }
  console.log(userList);
  return (
    <Container>
      <Header>
          <Heading>Users Lists</Heading>
          <Button>Add User</Button>
      </Header>
      <TableContainer component={Paper}>
          <Table>
              <TableHead>
                  <TableCell sx={{fontSize:'18px',fontWeight:'bold'}} >Avatar</TableCell>
                  <TableCell sx={{fontSize:'18px',fontWeight:'bold'}} >Name</TableCell>
                  <TableCell sx={{fontSize:'18px',fontWeight:'bold'}} >Email</TableCell>
                  <TableCell sx={{fontSize:'18px',fontWeight:'bold'}} >Business</TableCell>
                  <TableCell sx={{fontSize:'18px',fontWeight:'bold'}} >Username</TableCell>
                  <TableCell sx={{fontSize:'18px',fontWeight:'bold'}} >Action</TableCell>
              </TableHead>
              <TableBody>
                {userList.map((user)=>(
                  <TableRow key={user._id}>
                    <TableCell> <Avatar src={user.imageUrl} alt='Avatar' /> </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.businessname}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell> <IconButton onClick={()=>setOpenUser(!openUser)} > <Edit/> </IconButton> </TableCell>
                  </TableRow>
                ))}
              </TableBody>
          </Table>
          <TablePagination 
          component={'div'}
          rowsPerPage={perPage}
          page={page}
          rowsPerPageOptions={[10,20,50,100]}
          count={userList.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handlePerPageChange}
          />
      </TableContainer>
      <UserModal openUser={openUser} setOpenUser={setOpenUser} user={userList} />
    </Container>
  )
}

const Container = styled.div`
width: 100%;
background: transparent;
color: inherit;
`
const Header = styled.div`
background: rgb(20,10,10);
color: #fff;
padding: 20px;
align-items: center;
margin: 10px auto;
display: flex;
justify-content: space-between;
width: 100%;
`
const Button = styled.button`
cursor: pointer;
background: inherit;
color: inherit;
padding: 10px;
margin: 10px auto;
font-size: 20px;
border: 1px solid #fff;
border-radius: 10px;
align-items: center;
`
const Heading = styled.div`
padding: 10px;
align-items: center;
font-size: 20px;
font-weight: bold;
color: inherit;
background: inherit;
margin: 10px auto;
`