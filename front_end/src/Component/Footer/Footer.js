import React from 'react'
import {MdFacebook } from 'react-icons/md'
import { FaTwitter,FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { ItemsWrapper, Container, Items, WrapperContainer, Texts, Wrapper } from './StyleFooter'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Hooks/useHooks'
import { fetchPostByType } from '../../Api/ApiCalls'

export default function Footer() {
  const navigate = useNavigate()
  const {setFilterPosts,page} = useAuth()
  
  async function getPostByType(types){
    try {
      const res = await fetchPostByType(types,page)
      if(res.data.error){
        alert(res.data.error)
      }else{
        setFilterPosts(res.data)
        navigate(`/Post/Filter?${types}&page=${page}`)
      }
    } catch (error) {
      alert(error.message)
    }
  } 
  return (
    <>
      <Container> 
        <Wrapper>
        <WrapperContainer>
              <h2>Popular search</h2>
              <Items onClick={()=>getPostByType('Flat')}>Flats</Items>
              <Items onClick={()=>getPostByType('Land/Plot')}>Land/Plots</Items>
              <Items onClick={()=>getPostByType('House')}>Houses</Items>
              <Items onClick={()=>getPostByType('Apartment')}>Apartments</Items>
              <Items onClick={()=>getPostByType('Guest House')}>Guest Houses</Items>
              <Items onClick={()=>getPostByType('Estate')}>Estates</Items>
              <Items onClick={()=>getPostByType('Commercial Center')}>Commercial Centers</Items>
          </WrapperContainer>
          <WrapperContainer>
              <h2>How its works</h2>
              <Items onClick={()=>navigate('/Add')}>Host your Property</Items>
              <Items onClick={()=>navigate('/Privacy')}>Privacy and Policy</Items>
              <Items onClick={()=>navigate('/Terms')}>Terms of Services</Items>
              <Items onClick={()=>navigate('/Contact')}>Contact Us</Items>
          </WrapperContainer>
          <WrapperContainer>
              <h2>Services</h2>
              <Items onClick={()=>navigate('/Blogs')}>Blog</Items>
              <Items onClick={()=>navigate('/Faqs')}>FAQS</Items>
              <Items onClick={()=>navigate('/About')}>About Us</Items>
          </WrapperContainer>
        </Wrapper>
        <ItemsWrapper>
            <div className='d-flex'>
              <Texts style={{paddingLeft:'10px'}} ><MdFacebook/></Texts>
              <Texts style={{paddingLeft:'10px'}}><FaYoutube/></Texts>
              <Texts style={{paddingLeft:'10px'}}><FaTwitter/></Texts>
              <Texts style={{paddingLeft:'10px'}}><FaWhatsapp/></Texts>            
            </div>
              <Items>&copy;Copyright 2020 360PropertyNg all right reserved</Items>
        </ItemsWrapper>
      </Container>
    </>
  )
}
