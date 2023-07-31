import { Delete } from '@mui/icons-material'
import { Container, Dialog,Paper, Avatar, DialogActions } from '@mui/material'
import React from 'react'
import styled from 'styled-components'


export default function BlogModal(props) {
    const {openUser,setOpenUser,blogPost} = props
  return (
    <Container component={Paper}>
      <Dialog fullWidth maxWidth={'sm'} open={openUser} onClose={()=>setOpenUser(!openUser)} >
          <Header>User Profile</Header>
          <Container>
              <Wrapper>
                  <Avatar />
                  <Heading> Name: Sani Jae</Heading>
                  <Text>Email: jae@email.com</Text>
                  <Text>Username: SaniJae</Text>
                  <Text>Business: Agent</Text>     
                  <button style={{padding:'10px',margin:'10px auto',borderRadius:"10px",border:'1px solid #330033',fontSize:'18px'}}
                  onClick={''}>Show this user posts</button>            
              </Wrapper>
              <Button>
                  <p>Delete this User</p>
                  <Delete/>
              </Button>
              <Button>
                  <p>Suspend this User</p>
                  <Delete/>
              </Button>
          </Container>
          <DialogActions>
          <Button style={{justifyContent:'center',border:'none'}}
          onClick={()=>setOpenUser(!openUser)}>
            Finish
          </Button>
          </DialogActions>
      </Dialog>
    </Container>
  )
}

const Header = styled.div`
width: 100%;
padding: 20px;
margin: 10px auto;
align-items: center;
background: rgb(20,10,10);
color: #fff;
font-weight: bold;
font-size: 20px;
`
const Button = styled.button`
width: 100%;
padding: 15px;
margin: 10px auto;
align-items: center;
display: flex;
justify-content: space-between;
border: 1px solid rgb(20,10,10);
background: transparent;
color: rgb(20,10,10);
border-radius: 10px;
font-size: 20px;
font-weight: bold;
cursor: pointer;
`
const Rows = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
width: 100%;
`
const Column = styled.div`
flex-direction: column;
align-items: flex-start;
`
const Wrapper = styled.div`
width: 100%;
padding: 20px;
align-items: center;
margin: 1px auto;
display: flex;
justify-content: center;
flex-direction: column;
`
const Text = styled.p`
font-size: 18px;
align-items: center;
margin: 5px auto;
`
const Heading = styled.div`
font-size: 20px;
align-items: center;
margin: 5px auto;

`