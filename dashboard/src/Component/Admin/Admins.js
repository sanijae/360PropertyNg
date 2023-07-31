import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Avatar, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAdmin } from '../../Data/Actions/Admin'
import { EditAttributes } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'


export default function Admins() {
  const {admins} = useSelector((state)=>state.admins)
  const [admin,setAdmin] = useState([])
  const dispatch = useDispatch()
  const [perPage,setPerPage] = useState(10)
  const [page,setPage] = useState(0)
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getAllAdmin())
  },[dispatch])
  useEffect(()=>{
    return(()=>setAdmin(admins?.result))
  },[admins])
  //console.log(admin);
  function handlePageChange(e,newPage){
    setPage(newPage)
  }
  function handlePerPageChange(e){
    setPerPage(+e.target.value)
  }
  return (
    <Container>
      <Header>
        <Row>
          <Heading>Admin Tables</Heading>
          <AddButton>Add Admin</AddButton>
        </Row>
      </Header>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{fontSize:'18px'}}>Avatar</TableCell>
              <TableCell style={{fontSize:'18px'}}>Name</TableCell>
              <TableCell style={{fontSize:'18px'}}>Email</TableCell>
              <TableCell style={{fontSize:'18px'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admin?.map((adm)=>(
              <TableRow key={adm._id}>
                <TableCell>
                  <Avatar alt={adm?.name.charAt(0)} src={adm.imageUrl ? adm?.imageUrl :adm?.name.charAt(0)} />
                </TableCell>
                <TableCell>{adm.name}</TableCell>
                <TableCell>{adm.email}</TableCell>
                <TableCell>
                  <IconButton onClick={()=>navigate(`/AdminDetail/${adm._id}`)} >
                    <EditAttributes/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
        rowsPerPageOptions={[10,20]}
        count={admin?.length}s
        page={page}
        rowsPerPage={perPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handlePerPageChange}
        component='div'
        />
      </TableContainer>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
align-items: center;
`
const Header = styled.div`
width: 100%;
padding: 20px;
align-items: center;
margin: auto;
background: rgb(20,10,10);
color: #fff;
`
const Row = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
`
const Heading = styled.div`
padding: 10px;
align-items: center;
font-size: 20px;
font-weight: bold;
color: inherit;
`
const AddButton = styled.button`
display: flex;
padding: 10px;
align-items: center;
border-radius: 10px;
border: 1px solid #fff;
background: transparent;
color: inherit;
font-size: 20px;
cursor: pointer;
`