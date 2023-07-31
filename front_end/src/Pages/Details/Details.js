import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BsFillChatFill, BsShop } from 'react-icons/bs'
import { FaArrowCircleLeft, FaArrowCircleRight, FaBath, FaBed, FaPhone, FaToilet } from 'react-icons/fa'
import { MdSend } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import { ImageUrl } from '../../Api/ApiCalls'
import Recommend from '../../Component/Recommending/Recommend'
import { useAuth } from '../../Hooks/useHooks'
import {Container,DescContainer,DescText,Image,ImagesContainer,PriceText,
  Line,Wrapper, WrapperRow, Button, StyledSlider, ButtonContainer, Column, ItemCard,
   Texts, TextBox, StyledInput, Loading, Prices, SmallScreen, LargeScreen} from './DetailsStyle'
import {BiMap} from 'react-icons/bi'
import { CircularProgress } from '@mui/material'
  
export default function Details() {
  const [showChat,setShowChat] = useState(false)
  const [showNumber,setShowNumber] = useState(false)
  const [post,setPost] = useState([])
  const [images,setImages] = useState([])
  const [sliderRef,setSliderRef] = useState(null)
  const [indexs,setIndexs] = useState(0)
  const {getPostById} = useAuth()
  const id = useParams().id
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)


  const sliderSetting = {
    dots:false,arrows:false,infinite:true,
    speed:500,slidesToShow:4,
    slidesToScroll:1,
    beforeChange:(current,newPage)=>setIndexs(current),
    afterChange:(i)=>setIndexs(i),
    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow:4,
          slidesToScroll:1,
          infinite:true,
          dots:false
        }
      },
      {
        breakpoint:600,
        settings:{
          slidesToShow:3,
          slidesToScroll:1,
          infinite:true,
          dots:false
        }
      },
      {
        breakpoint:400,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:false
        }
      },
    ]
  }
  useEffect(()=>{
    return(async()=>{
      const posts = await getPostById(id)
      setPost(posts.data)
      setImages(posts.data?.result?.photos)
      setLoading(false)
    })
  },[getPostById, id, images, post])
  const  pricesConverter = new Intl.NumberFormat('ng-NG')
  console.log(post.result?.hostedBy);
  return (
    <Container>
      <Wrapper>
        {loading ? <Loading>
          <CircularProgress size={'3em'} />
          <h1>Data is fetching</h1>
        </Loading>
        :
         <div>
          <WrapperRow>
              <ImagesContainer>
              <div>
              <Image style={{padding:'5px',height:'25em'}} alt='Index picture' 
                src={`${ImageUrl}/${post.result?._id}/${images[indexs]?.picture}`}/>
              <StyledSlider {...sliderSetting} ref={setSliderRef} >
                {images?.map((image,index)=>(
                      <div key={index}>
                        <Image alt='Detail Image' style={{padding:'5px',height:'10em'}}
                        onClick={()=>setIndexs(index)}
                        src={`${ImageUrl}/${post.result?._id}/${image.picture}`} />                                      
                      </div>
                  ))}
              </StyledSlider>
              </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                  {post.result?.beds && <DescText style={{flexDirection:'column',textAlign:'center'}}>
                    <FaBed size={'1em'}/>
                    <DescText>{post.result?.beds}&nbsp;Bedrooms</DescText>
                    </DescText>}
                  {post.result?.bathrooms && <DescText style={{flexDirection:'column',textAlign:'center'}}>
                    <FaBath size={'1em'}/>
                    <DescText>{post.result?.bathrooms}&nbsp;Bathrooms</DescText>
                    </DescText>}
                  {post.result?.toilets && <DescText style={{flexDirection:'column',textAlign:'center'}}>
                    <FaToilet size={'1em'}/>
                    <DescText>{post.result?.toilets}&nbsp;Toilets</DescText>
                    </DescText>}
                  {post.result?.shops && <DescText style={{flexDirection:'column',textAlign:'center'}}>
                    <BsShop size={'2em'}/>
                    <DescText>{post.result?.shops}&nbsp;Shops</DescText>
                    </DescText>}                  
                </div>
              <div>
                <Button className='btn btn-sm' onClick={()=>navigate('/AllImages/'+id)}>See all the images</Button>
                <ButtonContainer>
                  <IconContext.Provider value={{size:'2em',color:'#550055'}}>
                    <FaArrowCircleLeft onClick={sliderRef?.slickPrev}/>
                    <FaArrowCircleRight  onClick={sliderRef?.slickNext}/>
                  </IconContext.Provider>
                </ButtonContainer>
              </div>
              <SmallScreen>
                <Column>
                  <Prices>
                    <div>
                      {post.result?.name && <Texts>{post.result?.name}&nbsp;for&nbsp;{post.result?.category}</Texts>}
                      {post.result?.address && <Texts><BiMap color='#550055'/> {post.result?.address}&nbsp;{post.result?.city}</Texts>}
                    </div>
                    <div className='mt-1 p-3' style={{borderRadius:'10px',background:'rgba(0,0,0,.3)'}}>
                      {post.result?.price && <PriceText>Price&nbsp;&#8358;&nbsp;{pricesConverter.format(post.result?.price)}{post.result?.duration && '/'}{post.result?.duration}</PriceText>}
                      {post.result?.minPrice && <PriceText>Min Price&nbsp;&#8358;&nbsp;{pricesConverter.format(post.result?.minPrice)}
                      {post.result?.duration  && '/'+post.result?.duration}</PriceText>}
                      {post.result?.maxPrice && <PriceText>Max Price&nbsp;&#8358;&nbsp;{pricesConverter.format(post.result?.maxPrice)}
                      {post.result?.duration  && '/'+post.result?.duration}</PriceText>}                 
                      {post.result?.negotiable &&<h5>{post.result?.negotiable}</h5>}
                  </div>
                </Prices>
                <ItemCard>
                  <h3>Hosted By</h3>
                  <Texts>{post.result?.hostedBy.businessname}</Texts>
                  <DescText>{post.result?.hostedBy.businessdesc}</DescText>
                  <DescText>{post.result?.hostedBy.businessaddress}</DescText>
                  <div style={{display:'flex',paddingTop:'10px',justifyContent:'space-between',width:'100%'}}>
                    <div>{post.result?.hostedBy.phone && <Button className='btn'onClick={()=>setShowNumber(!showNumber)} >
                      Call for this&nbsp;<FaPhone/></Button>}</div>                    
                  {showNumber && <h2>{post.result?.hostedBy.phone}</h2>}
                  </div>
                </ItemCard>
                </Column>
              </SmallScreen>
              <DescContainer>
                  <h3>Description</h3>
                  <DescText>{post.result?.desc}</DescText>
              </DescContainer>
              <DescContainer style={{background:'rgba(0,0,0,.2)',borderRadius:'1px'}}>
                <Row>
                  <Col xs={6} sm={6} md={4} lg={4}>
                  {post.result?.features && <h5>Features</h5>}
                  {post.result?.features?.map((am,i)=><div key={i} >
                    <div className='d-flex p-2 align-items-center'>
                      <input type='checkbox'  value={am} readOnly checked/><div>{am}</div>
                    </div>
                  </div>)}
                </Col>
                <Col xs={6} sm={6} md={4} lg={4}>
                  {post.result?.amenities && <h5>Amenities</h5>}
                  {post.result?.amenities?.map((am,i)=><div key={i}>
                    <div className='d-flex p-2 align-items-center'>
                      <input type='checkbox'  value={am} readOnly checked/><div>{am}</div>
                    </div>
                  </div>)}
                </Col>
                <Col xs={6} sm={6} md={4} lg={4}>
                  {post.result?.safety && <h5>Safety</h5>}
                  {post.result?.safety?.map((am,i)=><div key={i}>
                    <div className='d-flex p-2 align-items-center'>
                      <input type='checkbox'  value={am} readOnly checked/><div>{am}</div>
                    </div>
                  </div>)}
                </Col>
                </Row>
              </DescContainer>        
              <DescContainer>
                <h3>Safety Tips</h3>
                <DescText>
                  Do not make any upfront payment before seeing this property and 
                  the agent you contacted physically. FlexPro is not liable
                  for monetary transactions between you and the agents.
                  The contact agent on properties listed on
                  FlexPro does not represent FlexPro. 
                  FlexPro will not mandate agents to ask for fees upfront.
                </DescText>
              </DescContainer>
              <DescContainer >
                <h3>Disclaimer</h3>
                <DescText>
                  The information displayed about this property comprises a property advertisement.
                  This property listing does not constitute property particulars.
                  FlexPro makes no warranty as to the accuracy of the advertisement or 
                  any associated information,
                  and FlexPro has no control over the content.
                  This information is provided and maintained by the host.
                  FlexPro shall not in any way be held liable
                  for the actions of any host on this website.            
                </DescText>
              </DescContainer>
              {post.result?.city && <h3>Similar post from {post.result?.city}:</h3>}
              <Line/>
              <Recommend post={post}/>
              </ImagesContainer>
              <Column>
               <LargeScreen>
                  <Prices>
                    <div>
                      {post.result?.name && <Texts>{post.result?.name}&nbsp;for&nbsp;{post.result?.category}</Texts>}
                      {post.result?.address && <Texts><BiMap size={'2em'} /> {post.result?.address}&nbsp;{post.result?.city}</Texts>}
                    </div>
                    <div className='mt-1 p-3' style={{borderRadius:'10px',background:'rgba(0,0,0,.3)'}}>
                      {post.result?.price && <PriceText>Price&nbsp;&#8358;&nbsp;{pricesConverter.format(post.result?.price)}{post.result?.duration && '/'}{post.result?.duration}</PriceText>}
                      {post.result?.minPrice && <PriceText>Min Price&nbsp;&#8358;&nbsp;{pricesConverter.format(post.result?.minPrice)}
                      {post.result?.duration  && '/'+post.result?.duration}</PriceText>}
                      {post.result?.maxPrice && <PriceText>Max Price&nbsp;&#8358;&nbsp;{pricesConverter.format(post.result?.maxPrice)}
                      {post.result?.duration  && '/'+post.result?.duration}</PriceText>}                 
                      {post.result?.negotiable &&<h5>{post.result?.negotiable}</h5>}
                  </div>
                </Prices>
                <ItemCard>
                  <h3>Hosted By</h3>
                  <h4>{post.result?.hostedBy.businessname}</h4>
                  <DescText>{post.result?.hostedBy.businessdesc}</DescText>
                  <h6><BiMap size={'2em'}/>&nbsp;{post.result?.hostedBy.businessaddress}</h6>
                  {showNumber && <h2>{post.result?.hostedBy.phone}</h2>}
                  <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                    <div>{post.result?.hostedBy.phone && <Button className='btn'onClick={()=>setShowNumber(!showNumber)} >
                      Call for this&nbsp;<FaPhone/></Button>}</div>
                    <div>{post.result?.hostedBy.email && <Button className='btn' onClick={()=>setShowChat(!showChat)}>
                      Make request&nbsp;<BsFillChatFill/></Button>}</div>                         
                  </div>
                  {showChat && <TextBox>
                    <StyledInput as='textarea' placeholder='Type your request here' />
                    <Button className='btn btn-sm mt-1 w-100'><MdSend/> Send</Button>
                    </TextBox>}
                </ItemCard>
                <h3 >More on&nbsp;{post.result?.type}:</h3>
              </LargeScreen>
              </Column>
            </WrapperRow>            
        </div>}
      </Wrapper>
    </Container>
  )
}
