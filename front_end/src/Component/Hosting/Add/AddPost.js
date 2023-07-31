import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Column,
     Container,Image,
      ImageWrapper,
      Rows,
      Texts, TextContainer, Title, Wrapper } from './PostStyle'
import { ImArrowRight2 } from 'react-icons/im';


export default function AddPost() {
    const navigate = useNavigate() 
  return ( 
      <Container>
          <Wrapper>
              <Rows>
                  <Column>
                   <ImageWrapper>
                    <Image alt='Create post' src={require('../../../Asset/5.png')} />
                   </ImageWrapper>
                  </Column>
                  <Column>
                   <TextContainer>
                        <Title>Add your property to flexpro</Title>
                        <Texts>FlexPro Will give you a chance to expand your business within nigeria</Texts>
                        <Texts>Add your property for free within a while to reach the thounsands</Texts>
                       <Button onClick={()=>navigate('/UserDetail')}>Add Now &nbsp; <ImArrowRight2/></Button>
                   </TextContainer>
                  </Column>
              </Rows>{/* 
              <Title>Why Us</Title>
              <Rows>
                  <Column>
                  <TextContainer>
                  <Title>We provide free services</Title>
                    <Texts>We provide flexible place to host and advertise your property online</Texts>
                    <Button onClick={''}>Learn More &nbsp; <ImArrowRight2/></Button>
                    </TextContainer>
                  </Column>
                  <Column>
                   <ImageWrapper>
                    <Image alt='Create post' src={require('../../../Asset/9.png')} />
                   </ImageWrapper>
                  </Column>
              </Rows>
              <Rows>
                  <Column>
                  <TextContainer>
                  <Title>Fast Growing</Title>
                    <Texts>We provide flexible place to host and advertise your property online</Texts>
                    <Button onClick={''}>Learn More &nbsp; <ImArrowRight2/></Button>
                    </TextContainer>
                  </Column>
                  <Column>
                   <ImageWrapper>
                    <Image alt='Create post' src={require('../../../Asset/8.png')} />
                   </ImageWrapper>
                  </Column>
              </Rows> */}
         </Wrapper>
      </Container>
  )
}
 