import { Delete, Stop } from '@mui/icons-material'
import { Container, Dialog } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

export default function Deletes(props) {
  const {openDelete,setOpenDelete,post} = props
  return (
   <Container>
    <Dialog maxWidth={'sm'} fullWidth open={openDelete} onClose={()=>setOpenDelete(!openDelete)}>
        <Header style={{fontSize:'2em'}}> Delete or Suspend this post </Header>
        <Container>
          <Header>
            <h2>Suspend This Post</h2>  
            <Button><p>Suspend</p> <Stop/></Button>
          </Header>
          <Header>
            <h2>Delete This Post</h2>  
            <Button><p>Delete</p> <Delete/></Button>
          </Header>
          <Button style={{justifyContent:'center',fontWeight:'bold',fontSize:'20px',padding:'20px'}} onClick={()=>setOpenDelete(!openDelete)} >Close</Button>             
        </Container>
      </Dialog>
    </Container>
  )
}

const Header = styled.div`
background: rgb(20,10,10);
color: #fff;
padding: 20px;
width: 100%;
`
const Button = styled.button`
width: 100%;
padding: 10px;
margin: 20px auto;
align-items: center;
border-radius: 10px;
border: 1px solid #fff;
background: rgba(0,0,0,.5);
color: #fff;
font-size: 20px;
display: flex;
justify-content: space-between;
cursor: pointer;

:hover{
    background: rgba(0,0,0,.7);
    color: whitesmoke;
}
`