import React, { useState,useEffect } from 'react'
 import {FaTimes,FaUser,FaSearch, FaHouseUser} from 'react-icons/fa'
import {CgLogOut, CgMenuRight, CgProfile} from 'react-icons/cg' 
import {NavBar,Brand,ItemBox,SearchBtn,Icon
    ,NavLink,NavItem,SearchContainer
    ,Container,ProfileContainer,IconContainer
    ,ToolBar,Hamburger, Search, SearchText} from './Appbar.Style'
import {ListItemButton,Grid,ListItemIcon,Avatar,Box} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../../Hooks/useHooks'
import Select from 'react-select'
import { styles } from '../Hosting/StyledSelect/Select'
import { StyledInput } from '../Hosting/Add/AddStyles'
import CurrencyInput from 'react-currency-input-field'
import { Types } from '../Hosting/Add/OptionsData'
import { fetchPostBySearch } from '../../Api/ApiCalls'


export default function Appbar() {
  const [showForm,setShowForm] = useState(false)
  const [showProfile,setShowProfile] = useState(false)
  const [showMenu,setShowMenu] = useState(false)
  const {currentUser,logout} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
      return(()=>{
          document.body.addEventListener('click',()=>{
            setShowForm(false)
            setShowProfile(false)
            setShowMenu(false)
          })
      })
  })
  async function searchRent(){
      window.location.pathname ='/Rent'
  }
  async function searchSell(){
    window.location.pathname ='/Sale'
}
return (
        <NavBar position='sticky'>
            <ToolBar>
                <Hamburger onClick={(e)=>{
                   e.stopPropagation()
                   setShowMenu(!showMenu)
                }}>
                    {showMenu ? <FaTimes/> : <CgMenuRight/>}
                </Hamburger>
                <Brand onClick={()=>window.location.pathname='/'}><FaHouseUser/> 360PropertyNg</Brand>
                <NavLink showMenu={showMenu} onClick={()=>setShowMenu(!showMenu)}>
                    <NavItem onClick={()=>window.location.href='/'}>Home</NavItem>
                    <NavItem onClick={searchRent}>For Rent</NavItem>
                    <NavItem onClick={searchSell}>For Sale</NavItem>
                    <NavItem onClick={()=>navigate('/Add')}>Host today</NavItem>
                </NavLink>
                <ItemBox>
                <Search  onClick={(e)=>{
                    e.stopPropagation()
                    setShowForm(!showForm)
                }} className='m-3'>
                    <SearchText>Search....</SearchText>
                    <Icon>
                    <FaSearch />
                    </Icon>
                </Search>
                <IconContainer onClick={(e)=>{
                    e.stopPropagation()
                    setShowProfile(!showProfile)
                }}>
                    <div style={{color:'#000'}}>{currentUser.result?.name}</div>
                    <Avatar sx={{my:'auto',mx:'auto',width:'30px',height:'30px'}} src={currentUser.result?.imageUrl ? currentUser.result?.imageUrl:''}/>
                </IconContainer>
                </ItemBox>
                {showProfile && <ProfileContainer showProfile={showProfile} onClick={()=>setShowProfile(!showProfile)}>
                       {!currentUser.result && 
                        <Box sx={{border:'1px solid #fff',borderRadius:'2em',mt:4,ml:2,mr:2,mb:2,color:'#fff'}}>
                        <ListItemButton onClick={()=>navigate('/Auth')}>
                            <ListItemIcon sx={{color:'#fff'}}>
                                <FaUser size={20}/>
                            </ListItemIcon>
                            <h5>Sign In/ Sign Up</h5>
                        </ListItemButton>
                        </Box>
                        }
                        <Box sx={{border:'1px solid #fff',borderRadius:'2em',mt:4,ml:2,mr:2,mb:2,color:'#fff'}}>
                        <ListItemButton onClick={()=>navigate('/Add')}>
                            <ListItemIcon sx={{color:'#fff'}}>
                                <FaHouseUser size={20}/>
                            </ListItemIcon>
                            <h5>Host Your Property</h5>
                        </ListItemButton> 
                        </Box>
                        {currentUser.result && 
                        <>
                        <hr/>
                        <Box sx={{border:'1px solid #fff',borderRadius:'2em',mt:4,ml:2,mr:2,mb:2,color:'#fff'}}>
                        <ListItemButton onClick={()=>navigate('/Account')}>
                            <ListItemIcon sx={{color:'#fff'}}>
                                <CgProfile size={20}/>
                            </ListItemIcon>
                            <h5>Profile</h5>
                        </ListItemButton>
                        </Box>
                        <hr/>
                        <Box sx={{border:'1px solid #fff',borderRadius:'2em',mt:4,ml:2,mr:2,mb:2,color:'#fff'}}>
                        <ListItemButton onClick={()=>logout()}>
                            <ListItemIcon sx={{color:'#fff'}}>
                                <CgLogOut size={20}/>
                            </ListItemIcon>
                            <h5>Logout</h5>
                        </ListItemButton>
                        </Box>
                        </>}
                    </ProfileContainer>}
                    <SearchContainer showForm={showForm}>
                        <Searches setShowForm={setShowForm} showForm={showForm}/>
                    </SearchContainer>
            </ToolBar>
        </NavBar>
   )
}                       
export function Searches({showForm,setShowForm}){
    const [city,setCity] = useState('')
    const [type,setType] = useState('')
    const [rooms,setRooms] = useState('')
    const [price,setPrice] = useState('')
    const [minPrice,setMinPrice] = useState('')
    const [maxPrice,setMaxPrice] = useState('')
    const {setSearchPosts} = useAuth()
    const navigate = useNavigate()
    async function handleSearch(){
        console.log(city,type,rooms,price,minPrice,maxPrice);
        try {
            if(city || price || minPrice || maxPrice || type || rooms){
              const res = await fetchPostBySearch(type,city,rooms,price,minPrice,maxPrice)
              if(res.data.error){
                  console.log(res.data.error);
              }else{
              setSearchPosts(res.data)
              setShowForm(!showForm)
              console.log(res.data);
              navigate(`/Post/Search?type=${type || 'none'}&city=${city || 'none'}&rooms=${rooms || 0}&price=${price || 'none'}&minPrice=${minPrice || 'none'}&maxPrice=${maxPrice || 'none'}`)
            }
           }else{
               setShowForm(!showForm)
               return
           }
          } catch (error) {
            console.log(error.message);
        }
    }
    return(
        <Container style={{padding:'20px'}}>
          <Grid container spacing={3} alignItems='streach'>
            <Grid item xs={6} sm={4} md={4}>
                <CurrencyInput
                style={{background:'#fff',width:'100%',border:'1px solid #550055',
                borderRadius:'10px',padding:'10px'}}
                name='price'
                onValueChange={(e)=>setPrice(e)}
                intlConfig={{locale:'ng-NG',currency:'NGN'}}
                disableAbbreviations={true}
                placeholder='Enter the price'/>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <CurrencyInput
                style={{background:'#fff',width:'100%',border:'1px solid #550055',
                borderRadius:'10px',padding:'10px'}}
                name='minPrice'
                onValueChange={(e)=>setMinPrice(e)}
                intlConfig={{locale:'ng-NG',currency:'NGN'}}
                disableAbbreviations={true}
                placeholder='Enter the Min Price'/>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <CurrencyInput
                style={{background:'#fff',width:'100%',border:'1px solid #550055',
                borderRadius:'10px',padding:'10px'}}
                name='maxPrice'
                onValueChange={(e)=>setMaxPrice(e)}
                intlConfig={{locale:'ng-NG',currency:'NGN'}}
                disableAbbreviations={true}
                placeholder='Enter the Max Price'/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <StyledInput placeholder='number of rooms' type={'number'} onChange={(e)=>setRooms(e.target.value)}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <StyledInput placeholder='Locations'onChange={(e)=>setCity(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Select styles={styles} options={Types}
                 placeholder='Search Type'
                 isClearable={type}
                 onChange={(e)=>setType(e ? e.value : null)} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SearchBtn onClick={handleSearch}>Search</SearchBtn>
            </Grid>
        </Grid>
    </Container>
    )
}