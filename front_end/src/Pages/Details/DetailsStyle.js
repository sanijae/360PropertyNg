import styled from 'styled-components'
import Slider from 'react-slick'

export const Container = styled.div`
background: #550055;
display: flex;
justify-content: center;
width: 100%;
height: 100%;
margin: auto;
`
export const Wrapper = styled.div`
width: 95%;
margin: auto;
background: #fff;
color:#000;
`
export const WrapperRow = styled.div`
background: transparent;
color: inherit;
padding: 10px;
margin: auto;
display: flex;
width: 100%;
color: inherit;
justify-content: space-between;

@media screen and (max-width:1100px) {
    flex-direction: column;
}
`
export const ImagesContainer = styled.div`
width: 60%;
padding:auto;

@media screen and (max-width:1100px) {
    width:100%;
}
`
export const StyledSlider = styled(Slider)`
width:100%;
margin:auto;
`
export const ButtonContainer = styled.div`
 display :flex;
 width:100%;
 align-items: center;
 padding:10px;
 margin:auto;
 justify-content: space-between;
 background: transparent;
`
export const Image = styled.img`
width:100%;
object-fit: cover;
border-radius: 1em;
`
export const Texts = styled.p`
font-size: 18px;
margin :auto;
text-transform: capitalize;
`
export const PriceText = styled.div`
font-size: 1em;
color: #550066;
font-weight: bold;
font-style: italic;
`

export const DescContainer = styled.div`
width: 100%;
padding: 20px;
align-items: flex-start;
background: rgba(255,255,255,.5);
color: inherit;
border: none;
border-radius: 1em;
`
export const DescText = styled.div`
font-size: 18px;
margin:auto;
width: 100%;
`
export const Line = styled.div`
width: 100%;
height: 2px;
background: #550055;
margin-top: 4px;


`
export const Button = styled.button`
background: #550055;
color: #fff;
border: none;
border-radius: 10px;

&:hover{
    background: #fff;
    color: #550055;
    border: 1px solid #550055;
}
`
export const Column = styled.div`
flex-direction: column;
border-radius: 1em;
padding: 10px;
width:40%;

@media screen and (max-width:1100px) {
   width:100%
}
`
export const ItemCard = styled.div`
font-size: 1.2em;
margin:auto;
border-radius: 10px;
width:100%;
margin: 2em auto;
padding: 10px;
`
export const TextBox = styled.div`
width:100%;
padding: 10px;
`
export const StyledInput = styled.input`
width:100%;
border:1px solid #550055;
border-radius: 10px;
outline:none;
padding: 5px;
&:focus{
    outline:none
}
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
export const Prices = styled.div`
width: 100%;
padding: 10px;

@media screen and (max-width:1100px) {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
@media screen and (max-width:500px) {
   flex-direction: column;
}
`
export const SmallScreen = styled.div`
display: none;
width: 100%;

@media screen and (max-width:1100px) {
   display: block;
}
`
export const LargeScreen = styled.div`
width: 100%;

@media screen and (max-width:1100px) {
   display: none;
}
`