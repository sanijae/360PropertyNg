import React from 'react'
import { useEffect,useState } from 'react'
import { Container, Icon,Hamburger, Items, Menus, 
  Text,SignButton, Wrapper, Brand } from './NavbarStyle'
import { List, ListAlt,Close, Menu, Notifications, People, PieChart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { useDispatch } from 'react-redux'
import { LOG_OUT } from '../../Data/types'

export default function Navbar() {
  const [show,setShow] = useState(false)
  const [admins,setAdmin] = useState()
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('admin'))
  const dispatch = useDispatch()
  useEffect(()=>{
      setAdmin(user?.result)
  }, [user?.result,setAdmin])
  //console.log(admins);
  function logOut(){
    try {
      dispatch({type:LOG_OUT})
      window.location.pathname='/'
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <Wrapper>
      <Hamburger style={{borderRadius:'10px',background:'inherit',marginLeft:'20px',padding:'10px'}}>
        <Icon style={{padding:'6px',borderRadius:'10px'}} onClick={()=>setShow(!show)} >
          {show ? <Close/> :<Menu/>}
        </Icon>
      </Hamburger>
      <Brand>360PropertyNg</Brand>
      {show && <Menus onClick={()=>setShow(!show)}>
        <Items onClick={()=>navigate('/')}>
          <PieChart/>
          <p>Dashboard</p>
        </Items>
        <Items onClick={()=>navigate('/Users')}>
          <People/>
          <p>Users</p>
        </Items>
        <Items onClick={()=>navigate('/Posts')}>
          <List/>
          <p>Posts</p>
        </Items>
        <Items onClick={()=>navigate('/Blogs')}>
          <ListAlt/>
          <p>Blog</p>
        </Items>
        <Items onClick={()=>navigate('/Notifications')}>
          <Notifications/>
          <p>Notifications</p>
        </Items>
        <Items onClick={()=>navigate('/Admin')}>
          <Notifications/>
          <p>Admin</p>
        </Items>
      </Menus>}
      <Container style={{background:'inherit',color:'#fff',padding:'5px',marginRight:'10px',borderRadius:'10px',justifyContent:'space-between'}}>
        <div style={{paddingRight:'10px'}}>
          {admins?.name && <Text>{admins?.name}</Text>}
          {admins?.name && <SignButton onClick={logOut} >Log Out</SignButton>}
        </div>
        <Avatar src={admins?.imageUrl ? admins.imageUrl : admins?.name.charAt(0)} alt={admins?.name.charAt(0)} />
      </Container>
    </Wrapper>
  )
}
