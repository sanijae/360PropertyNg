import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Avatar, IconButton} from '@mui/material'
import { Delete } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmin } from '../../Data/Actions/Admin'
import { useNavigate, useParams } from 'react-router-dom'

export default function AddminDetail() {
    const [admins,setAdmin] = useState()
    const {admin} = useSelector(state=>state.admins)
    const dispatch = useDispatch()
    const id = useParams().id
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getAdmin(id))
    },[dispatch,id])
    useEffect(()=>setAdmin(admin?.result),[admin])
   console.log(id);
  return (
    <Container>
      <Wrapper>
          <Row>
            {/* {admins?.imageUrl &&  */}
            <Avatar src={admins?.imageUrl ? admins?.imageUrl : admins?.name.charAt(0)} alt={admins?.name.charAt(0)} />
            { admins?.name && <Title> {'Name: '+admins?.name}</Title>}
            { admins?.email && <Title> {'Email: '+admins?.email}</Title>}
          </Row>
          <Row>
              <Text>Total Posts: 40</Text>
              <IconButton>
                  Show Here
              </IconButton>
          </Row>
          <Row>
              <Text>Notes: 40</Text>
              <IconButton>
                  Show Here
              </IconButton>
          </Row>
          <ActionButton>Suspend this admin</ActionButton>
          <Row>
          <ActionButton>
              Delete this admin<Delete/>
          </ActionButton>
          </Row>
            <IconButton onClick={()=>navigate('/Admin')}>
                Close
            </IconButton>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
align-items: flex-start;
background: #fff;
color: #fff;
display: flex;
min-height: 100vh;
justify-content: center;
`
const Wrapper = styled.div`
width: 60%;
margin: 5em auto;
flex-direction: column;
align-items: center;
padding: 10px;
background: #fff;
color: #000;
border: 1px solid #550055;
border-radius: 10px;

@media screen and (max-width:600px){
    width:80%
}
@media screen and (max-width:400px){
    width:90%
}
`
const Row = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
`
const Title = styled.div`
font-size: 20px;
align-items: center;
padding: 10px;
`
const Text = styled.div`
font-size: 18px;
align-items: center;
padding: 10px;
`
const ActionButton = styled.button`
cursor: pointer;
align-items: center;
border: 1px solid #550055;
padding: 20px;
margin: 10px auto;
border-radius: 10px;
display: flex;
justify-content: center;
font-size: 20px;
font-weight: bold;
background: inherit;
color: inherit;
width: 100%;
`