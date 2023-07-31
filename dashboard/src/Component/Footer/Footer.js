import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material"


export default function Footer() {
  return (
    <Container>
      <Row>
          <Text>&copy;&nbsp;360PropertyNg</Text>
          <IconContainer>
             <Icon>
                 <Facebook/>
             </Icon>
             <Icon>
                 <Twitter/>
             </Icon>
             <Icon>
                 <Instagram/>
             </Icon>
             <Icon>
                 <YouTube/>
             </Icon>
          </IconContainer>
      </Row>
    </Container>
  )
}

const Container =  styled.div`
width: 100%;
align-items: center;
padding: 20px;
`
const Row  = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width:500px) {
    flex-direction: column;
}
`
const Icon = styled.div`
cursor: pointer;
align-items: center;
padding: 10px;
margin: ${({mt})=>(mt ? mt:'')}
`
const Text = styled.div`
font-size: 18px;
font-weight: bold;
`
const IconContainer = styled.div`
display: flex;
align-items: center;
`