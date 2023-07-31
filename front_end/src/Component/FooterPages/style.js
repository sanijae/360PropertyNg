import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: ${({display})=>(display ? display : 'flex')};
justify-content: center;
background-color: transparent;
`
export const Wrapper = styled.div`
width: 70%;
background-color: #fff;
border-radius: 10px;
padding: 30px;
margin: 20px auto;

@media screen and (max-width:700px){
    width:95%
}
`
export const Heading = styled.div`
font-size: 18px;
font-weight: bold;
padding: 10px;
`
export const Texts = styled.div`
font-size: 15px;
padding: 10px;
`
export const StyledLi = styled.li`
font-size: 17px;
padding: 10px;
`