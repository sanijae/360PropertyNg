import React from 'react'
import { Container, Heading, Texts, Wrapper } from './Style'

export default function Faqs() {
  return (
    <Container>
      <Wrapper width='80%'>
          <div className='d-flex w-100' style={{justifyContent:'space-between'}}>
            <Heading>Frequently Ask Question</Heading>
            <button className='btn btn-secondary' onClick={()=>window.location.pathname='/Contact'}>More Question Contact Us</button>
          </div>
          <Container className='mt-3 d-inline text-align-left'>
              <Heading>What is 360PropertyNg?</Heading>
              <Texts>
                  360 Property is the website that allow people to advertise their properties
                  online free of charge,and also connect people who is searching for to the providers 
              </Texts>
              <Heading>Do i need to pay before using 360PropertyNg?</Heading>
              <Texts>
                  No, all services provider by the 360PropertyNg are free
              </Texts>
              <Heading>Is 360PropertyNg an Agents/Developers/LandLords?</Heading>
              <Texts>
                  No, we are not but we aim to be the place 
                  for Nigerian property seekers to find details of all 
                  properties available to buy or rent.
              </Texts>
              <Heading>Which browser do i need to use to access 360PropertyNg?</Heading>
              <Texts>
                  Almost all modern browsers are supported
              </Texts>
              <Heading>
                  How to get the details of property?
              </Heading>
              <Texts>
                  Simply click on to the selected post card, the details page will automatically give the detail of the selected post
              </Texts>
              <Heading>
                  How to get property from 360PropertyNg?
              </Heading>
              <Texts>
                  you need to get to detail page, from here you will a button (call), then click on the the host phone number
                  will show, then call that number 
              </Texts>
              <Heading>
                  How to upload my property to the 360PropertyNg?
              </Heading>
              <Texts>
                You can upload your listing by signing up to the website and adding your property via the (Add Today/Add your property) section of the website.
              </Texts>
              <Heading>
                 Is there any limit to the number of properties i can list?
              </Heading>
              <Texts>
                  No, you may market as many for sale/to rent listings as you like.
              </Texts>
              <Heading>
                  Is there a limit to the number of photographs I can upload?
              </Heading>
              <Texts>
                 No, you may upload as many  photograph as you like for each property.
              </Texts>
          </Container>
      </Wrapper>
    </Container>
  )
}
