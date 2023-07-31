import { Avatar,Box, Grid, ListItemIcon,ListItemButton, ListItemText, Typography} from '@mui/material'
import React,{useState} from 'react'
import { useAuth } from '../../Hooks/useHooks'
import { Container, InfoContainer, LogoutButton, SettingContainer, SettingItems, Wrapper } from './AccountStyle'
import {CgSelect} from 'react-icons/cg'
import { FaEye,FaRegCheckSquare } from 'react-icons/fa'
import WhyUs from './Modal/WhyUs'
import HowWorks from './Modal/HowWorks'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const navigate = useNavigate()
  const {currentUser} = useAuth()
  const [openWhy,setOpenWhy]  = useState(false)
  const [openWorks,setOpenWorks]  = useState(false)
  return (
    <Container>
      <Wrapper>
        <InfoContainer onClick={()=>navigate('/UserModal')}>
          <Box>
           <Avatar src={currentUser.result?.imageUrl ? currentUser.result?.imageUrl:''} />
           </Box>
           <Box sx={{marginLeft:'40px'}}>
             <Typography variant='h6'>{currentUser.result?.name}</Typography>
             <Typography variant='body2'>{currentUser.result?.email}</Typography>
           </Box>
           <Typography>{currentUser.result?.username}</Typography>
        </InfoContainer> 
        <SettingContainer>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <SettingItems>
                <ListItemButton onClick={()=>navigate('/ManageHost')}>
                  <ListItemIcon>
                    <FaRegCheckSquare/>
                  </ListItemIcon>
                  <ListItemText primary='Manage Hosting' secondary='Manage your hosting in zimo'/>
                </ListItemButton>
              </SettingItems>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <SettingItems>
                <ListItemButton onClick={()=>setOpenWhy(!openWhy)}>
                  <ListItemIcon>
                    <CgSelect/>
                  </ListItemIcon>
                  <ListItemText primary='Why Us' secondary='Why hosting with Zimo'/>
                </ListItemButton>
              </SettingItems>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <SettingItems>
                <ListItemButton onClick={()=>setOpenWorks(!openWorks)}>
                  <ListItemIcon>
                    <FaEye/>
                  </ListItemIcon>
                  <ListItemText primary='How its works' secondary='Get to know how it all works'/>
                </ListItemButton>
              </SettingItems>
            </Grid>
          </Grid>
        </SettingContainer>
        <LogoutButton>LogOut</LogoutButton>
      </Wrapper>
      <WhyUs setOpenWhy={setOpenWhy} openWhy={openWhy} />
      <HowWorks setOpenWorks={setOpenWorks} openWorks={openWorks} />
    </Container>
  )
}

export default Account