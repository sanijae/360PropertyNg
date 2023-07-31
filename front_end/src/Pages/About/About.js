import React from 'react'
import { Container,Wrapper,Texts, Title,
    Hero, 
    HeroWrapper} from './Style'
import { Abouts } from './DataAbout'
export default function About() {
  return ( 
    <Container>
      <Wrapper>
       <Hero>
         <img style={{width:'100%',maxHeight:'100vh',objectFit:'cover'}} alt='About us'
          src={Abouts.image} />
         <HeroWrapper>
            <Title>{Abouts.title}</Title>
              <Texts>
                360PropertyNg is a web-based platform that let property Agents, Developers, Landlords and other vendors to
                place their property online free of charge.
                We neither Agents nor Developers we just provides place to advertise their property in Nigeria.
                Our users can search their need on the platform and see all the property features,location,services, prices and anything about the property,
                 and they can also contact owner directly for next action.
              </Texts>
              <Texts>We served our users with the best experience by connecting them with verified property vendors nationwide.</Texts>
              <Texts>We try to simplify the way for nigerians to get the desire property anywhere anytime for free by visiting the platform.</Texts>
         </HeroWrapper> 
         </Hero>
       </Wrapper>
    </Container>
  )
}
