import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Edit,Bed,Bathroom } from '@mui/icons-material'
import {useNavigate, useParams} from 'react-router-dom'
import { ImageUrl ,getPost} from '../../API/Axios'
import Deletes from './DeletesPost'

const Price = new Intl.NumberFormat('ng-NG')

export default function Detail() {
    const [openDelete,setOpenDelete] = useState(false)
    const [posts,setPost] = useState()
    const postId = useParams().id
    const navigate = useNavigate()
    
    useEffect(()=>{
        return(async()=>{
            try {
                const {data} = await getPost(postId)
                setPost(data.result)
            } catch (error) {
                console.log(error.message);
            }
        })
    },[postId])
    console.log(posts);
    return (
    <Wrapper>
      <Hero>
         <Image alt='Pictures' src={`${ImageUrl}/${posts?._id}/${posts?.photos[0]?.picture}`} />
         <Prices>
             {posts?.price && <p>{`${Price.format(posts?.price)}/ ${posts?.duration}`}</p>}
             {posts?.minPrice && <p>{`${Price.format(posts?.minPrice)}/ ${posts?.duration}`}</p>}
             {posts?.maxPrice && <p>{`${Price.format(posts?.maxPrice)}/ ${posts?.duration}`}</p>}
             {posts?.negotiable && <p style={{fontSize:'17px',paddingTop:'10px'}}>{posts?.negotiable}</p>}
         </Prices>
         <HeroItems>
             <Button onClick={()=>navigate(`/Images/${posts._id}`)}> Show Me All Pictures</Button>
             <ItemWrapper>
                <Icon>
                    <span>{posts?.beds}</span>
                    <Bed/>
                </Icon>
                <Icon>
                    <span>{posts?.bathrooms}</span>
                    <Bathroom/>
                </Icon>
                <Icon>
                    <span>{posts?.toilets}</span>
                    <Bed/>
                </Icon>
             </ItemWrapper>
         </HeroItems>
      </Hero>
        <Header>
                <Container>
                    {posts?.name && <Heading>{posts?.name}&nbsp;For&nbsp;{posts?.category} </Heading>}       
                </Container>
                <Container>
                    {posts?.address && <Heading>In &nbsp;{posts?.address},&nbsp;{posts?.city},&nbsp;{posts?.state} </Heading>}       
                </Container>
        </Header>
      <Container>
        <Header>
            <Row>
                <Heading>Services Provided</Heading>
                <Icon>
                    <Edit/>
                </Icon>
            </Row>
        </Header>
        <Rows>
            <Container style={{paddingTop:'20px'}}>
                {posts?.features &&  <div style={{fontSize:'20px'}} >Features Tips</div>}
                {posts?.features && posts?.features?.map((feature,i)=>(
                    <div key={i}>
                        <Text style={{alignItems:'center',display:'flex'}}>
                            <input type={'checkbox'} checked readOnly/>
                            <p>{feature}</p>
                        </Text>
                    </div>
                ))}
            </Container>
            <Container style={{paddingTop:'20px'}}>
                {posts?.amenities &&  <div  style={{fontSize:'20px'}}>Amenities Tip</div>}
                {posts?.amenities?.map((amenity,i)=>(
                    <div key={i}>
                        <Text style={{alignItems:'center',display:'flex'}}>
                            <input type={'checkbox'} checked readOnly/>
                            <p>{amenity}</p>
                        </Text>
                    </div>
                ))}
            </Container>
            <Container style={{paddingTop:'20px'}}>
                {posts?.safety &&  <div  style={{fontSize:'20px'}}>Safety Tips</div>}
                {posts?.safety && posts?.safety?.map((st,i)=>(
                    <div key={i}>
                        <Text style={{alignItems:'center',display:'flex'}}>
                            <input type={'checkbox'} checked readOnly/>
                            <p>{st}</p>
                        </Text>
                    </div>
                ))}
            </Container>
        </Rows>
        <Text>Features</Text>
      </Container>
      <Container>
        <Header>
            <Row>
                <Heading>Description</Heading>
                <Icon>
                    <Edit/>
                </Icon>
            </Row>
        </Header>
        <Text>{posts?.desc}</Text>
      </Container>
      <Header>
          <Button onClick={()=>setOpenDelete(!openDelete)} >Delete/Suspend This Post</Button>
      </Header>
      <Deletes openDelete={openDelete} setOpenDelete={setOpenDelete} post={posts} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
flex-direction: column;
`
const Row = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
width: 100%;
background: transparent;
color: inherit;
`
const Header = styled.div`
background: rgb(20,10,10);
color: #fff;
padding: 20px;
width: 100%;
`
const Text = styled.p`
font-size: 17px;
padding: 10px;
`
const Heading = styled.p`
font-size: 20px;
padding: 20px;
`
const Icon = styled.div`
cursor: pointer;
align-items: center;
display: flex;
justify-content: center;
padding: 4px;
font-size: 20px;
color:#fff;
`
const Image = styled.img`
width: 100%;
height: 30em;
border-radius: 10px;
object-fit: cover;
top: 0;
left: 0;
right: 0;
position: absolute;
z-index: -2;
`
const Hero = styled.div`
position: relative;
width: 100%;
height: 30em;
margin: auto;
margin-bottom: 10px;
`
const HeroItems = styled.div`
align-items: center;
background: rgba(0,0,0,.3);
color: #00f;
padding: 10px;
position: absolute;
bottom: 0;
left: 0;
right: 0;
bottom: 0;
text-align: center;
border-radius: 0 0 10px 10px;
`
const ItemWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
padding: 10px;
`
const Button = styled.button`
width: 100%;
padding: 10px;
align-items: center;
border-radius: 10px;
border: 1px solid #fff;
background: rgba(0,0,0,.5);
color: #fff;
font-size: 20px;

:hover{
    background: rgba(0,0,0,.7);
    color: whitesmoke;
}
`
const  Prices = styled.div`
align-items: center;
background: rgba(0,0,0,.3);
color: #fff;
padding: 10px;
font-size: 20px;
font-weight: bold;
width:fit-content;
margin-right: 20px;
border-radius: 20px;
position: absolute;
top: 10px;
right: 0;
text-align: center;
border-radius: 10 10 0 0;
`
const Rows = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
gap: 20px;
`