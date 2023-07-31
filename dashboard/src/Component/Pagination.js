import React from 'react'
import styled from 'styled-components'

export default function Pagination({total,perPage,page,nextPage,prevPage}) {
  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(total/perPage); i++){
      pageNumbers.push(i)
  }

    return (
    <Container>
        <Button>Prev</Button>
      {pageNumbers.map((number)=>(
          <Wrapper key={number}>          
            <Links>{number}</Links>
          </Wrapper>
      ))}
      <Button>Next</Button>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
padding: 20px;
align-items: center;
display: flex;
justify-content: center;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
`
const Links = styled.div`
cursor: pointer;
background: rgb(20,10,10);
border-radius: 10px;
align-items: center;
padding: 10px;
margin: 10px;
`
const Button = styled.button`
border: none;
border-radius: 10px;
align-items: center;
padding: 10px;
margin: 10px;
`