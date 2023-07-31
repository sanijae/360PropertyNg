import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImageUrl } from '../../Api/ApiCalls'
import { useAuth } from '../../Hooks/useHooks'
import { CardText, Grid, Icons, Image, Items} from '../ListPage/ListStyle'
import { Avatar, CardBody, CardContent, CardIcons, Container, 
    HeaderColumn, HeaderText, Hero, ItemCard, PriceItems, StyledContainer, Wrapper } from './HostStyle'
import { FaEdit } from 'react-icons/fa'
import { MdDelete, MdEmail, MdPerson, MdPersonPin } from 'react-icons/md'
import { Button } from './Detail/styles'

export default function ManageHost() {
    const [posts,setPost] = useState([])
    const {currentUser} = useAuth()
    const navigate = useNavigate()
    
    useEffect(()=>{ 
        return(async()=>{
            setPost(currentUser.result?.posts)
        })
    })
    //console.log(posts);
    //require('../../Images/yn.jpg')
  return (
    <Container>
        <Hero onClick={()=>navigate('/Account')}>
        <Icons>
            <Avatar alt='Avatar' src={currentUser.result?.imageUrl ? currentUser.result?.imageUrl :currentUser.result?.username.charAt(0)} />
        </Icons>
        <HeaderColumn>
            <HeaderText style={{paddingRight:'1px'}}><MdPerson/> &nbsp;{currentUser.result?.name}</HeaderText>
            <HeaderText style={{paddingLeft:'10px'}}><MdEmail/> &nbsp;{currentUser.result?.email}</HeaderText>
        </HeaderColumn>
        <HeaderText><MdPersonPin/> &nbsp;{currentUser.result?.username}</HeaderText>
        </Hero>
        <Wrapper>
          {posts?.length !== null ? 
          <Grid>
              {posts?.map((post,index)=>(
                  <Items key={index}>
                      <Card
                       id={post._id}
                       name={post.name}
                       type={post.type}
                       photo={`${ImageUrl}/${post._id}/${post.photos[0]?.picture}`}
                       duration={post.duration}
                       state={post.state}
                       city={post.city}
                       category={post.category}
                       price={post.price}
                       minPrice={post.minPrice}
                       maxPrice={post.maxPrice}
                      />
                  </Items>
              ))}
          </Grid>
          :<StyledContainer>
              <Image src={require('../../Images/err.png')} />
              <h1>It's like you don't have any post</h1>
              <h3>If you want add your property click below to start now</h3>
              <Button onClick={()=>navigate('/Add')}>Create now</Button>
          </StyledContainer>
          }
        </Wrapper>
    </Container>
  )
}

export function Card({name,id,type,category,city,state,price,photo,maxPrice,minPrice}){
    const navigate = useNavigate()
    const priceConverter = new Intl.NumberFormat('ng-NG')
    return(
        <ItemCard onClick={()=>navigate(`/ManageDetail/${id}`)}>
            <CardBody>
                {name && <CardText style={{paddingLeft:'6px'}}>{name}</CardText>}
                <Image alt='images' src={photo} />
                <CardContent>            
                <div>                  
                    {type && category && <>
                    <CardText>{type}&nbsp;for&nbsp;{category}</CardText>
                    </>}
                    {city && state &&<CardText style={{textTransform:'capitalize'}}>{city}&nbsp;in&nbsp;{state}</CardText>}
                </div>
                <PriceItems>
                    {price && <>
                    <CardText>Price: &nbsp;&#8358;{priceConverter.format(price)}</CardText>
                    </>}
                    {minPrice && <CardText>Min Price: &nbsp;&#8358;{priceConverter.format(minPrice)}</CardText>}
                    {maxPrice && <CardText>Max Price: &nbsp;&#8358;{priceConverter.format(maxPrice)}</CardText>}
                </PriceItems>
                </CardContent>
            </CardBody>
            <CardIcons>
                <Icons>
                    <FaEdit/>
                </Icons>
                <Icons>
                    <MdDelete/>
                </Icons>
            </CardIcons>
        </ItemCard>
    )
}