import styled from "styled-components";

export const Container = styled.div`
padding: 10px;
align-items: center;
justify-content: center;
margin: 0;
width: 100%;
color:#550055;
background: #fff;
`
export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3,33.3%);
width: 100%;

@media screen and (max-width:1100px) {
    grid-template-columns: repeat(2,50%);
}
@media screen and (max-width:700px) {
    grid-template-columns: repeat(1,100%);
}
`
export const Items = styled.div`
margin: 7px;
color: inherit;
align-items: center;
justify-content: center;
display: flex;
font-weight: bold;
color: #000;
background: #fff;
border-radius: 1em;
overflow: hidden;
box-shadow:0px 5px 0px 4px rgb(255,255,255) ;
`

export const ItemCard = styled.div`
align-items: center;
width: 100%;
height: 100%;
margin: auto;
background: transparent;
flex-direction: column;
border: 1px solid #550055;
border-radius: 1em;
cursor: pointer;
`
export const Body = styled.div`
width: 100%;
margin: auto;
height: fit-content;
flex-direction: column;
`
export const Image = styled.img`
width:100%;
height: 20em;
object-fit: cover;
`
export const CardContent = styled.div`
display: flex;
padding: 10px;
align-items: flex-start;
justify-content: space-between;
width: 100%;
margin: auto;

@media screen and (max-width:350px) {
    flex-direction: column;
}
`
export const CardItems = styled.div`
flex-direction: column;
margin: auto;
align-items: flex-start;

@media screen and (max-width:350px) {
    padding: 10px;
}
`
export const CardText = styled.div`
font-size: 14px;
text-transform: capitalize;
margin: auto;
width: 100%;
`
export const Icons = styled.div`
align-items: center;
justify-content: center;
cursor: pointer;
`
export const Loading = styled.div`
width: 100%;
height: 100vh;
padding-top: 5em;
text-align: center;
align-items: center;
background-color: transparent;
color: #550055;
font-size: 30px;
`