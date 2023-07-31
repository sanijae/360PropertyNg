import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: ${({display})=>(display ? display : 'flex')};
justify-content: ${({justify})=>justify ? justify : 'center'};
background-color: transparent;
`
export const Wrapper = styled.div`
width: ${({width})=>(width ? width:'70%')};
background-color: #fff;
border-radius: 10px;
padding: 30px;
margin: 20px auto;

@media screen and (max-width:700px){
    width:95%
}
`
export const Row = styled.div`
width: 100%;
background-color: #fff;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(20em,1fr));
padding: 10px;
gap: 10px;
margin: auto;


`
export const Column = styled.div`
flex-direction: column;
margin: auto;
width: 100%;
`
export const Heading = styled.div`
font-size: 18px;
font-weight: bold;
padding: 10px;
`
export const Texts = styled.div`
font-size: 15px;
padding: 10px;
margin: auto;
`
export const Image = styled.img`
width: 100%;
height: 20em;
border-radius: 10px;

@media screen and (max-width:900px){
width:100%
}
`
export const Buttons = styled.button`
width:50%;
height: 3em;
color: #550055;
font-weight: bold;
background-color: transparent;
border: 1px solid #550055;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;

:hover{
    background-color: #550055;
    color: #fff;
}
`
export const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
padding-left: 10px;
padding-right: 10px;
align-items: center;
margin: auto;
width: 100%;
`
//Detail Styled

export const DRows = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media screen and (max-width:900px){
    flex-direction: column;
}
`
export const DColumn = styled.div`
width: ${({width})=>(width ? width:'70%')};
background-color: #fff;
padding: 10px;

@media screen and (max-width:900px){
    width: 100%;
}
`