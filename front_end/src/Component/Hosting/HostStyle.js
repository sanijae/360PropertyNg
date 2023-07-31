import styled from 'styled-components'

export const Container = styled.div`
background-color: #fff;
background-image: url(require('../../Images/1.jpg'));
background-size: cover;
background-repeat: no-repeat;
align-items: center;
display: flex;
flex-direction: column;
width:100%;
`
export const Wrapper = styled.div`
border: none;
width: 100%;
margin: auto;
background: #fff;
border-radius: 0px 0px 2em 2em;
color: #550055;
padding: 10px;
`
export const Hero = styled.div`
width: 85%;
padding: 20px;
margin: auto;
align-items: center;
display: flex;
justify-content: space-between;
border: none;
border-radius: 1em 1em 8px 8px;
background: #fff;
color: #000;
cursor: pointer;

@media screen and (min-width:1200px) {
    width: 94%;
}
@media screen and (max-width:500px) {
    width: 97%;
}
`
export const ItemCard = styled.div`
width: 100%;
margin: auto;
align-items: center;
border: 1px solid #550055;
border-radius: 1em;
background: transparent;
flex-direction: column;
`
export const CardHeader = styled.div`
width: 100%;
padding: 10px;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0px 0px 5px 5px rgba(0,0,0,.5);
`
export const CardBody = styled.div`
width: 100%;
height: fit-content;
align-items: center;
flex-direction: column;
margin: auto;
`
export const CardContent = styled.div`
width: 100%;
padding: 10px;
align-items: center;
border: none;
display: flex;
justify-content: space-between;
`
export const CardIcons = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
padding: 20px;
margin: auto;
`
export const PriceItems = styled.div`
border: none;
align-items: center;
`
export const Avatar = styled.img`
border: none;
margin: auto;
padding: auto;
align-items: center;
border-radius: 50%;
width: 40px;
height: 40px;
`
export const HeaderText = styled.div`
display: flex;
align-items: center;

@media screen and (max-width:500px) {
    flex-direction: column;
}
`
export const HeaderColumn = styled.div`
width: auto;
display: flex;
justify-content: space-between;

@media screen and (max-width:350px) {
    flex-direction: column;
}
`
export const StyledContainer = styled.div`
 width: 100%;
 text-align: center;
 padding: 30px;
 background-color: transparent;
 color: #550055;
 flex-direction: column;
`