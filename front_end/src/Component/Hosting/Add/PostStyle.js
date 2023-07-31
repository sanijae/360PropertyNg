import styled from 'styled-components'

export const Container = styled.div`
background-color: #550055;
align-items: center;
text-align: center;
display: flex;
justify-content: center;
margin: auto;
width: 100%;
`
export const Wrapper = styled.div`
width: 90%;
align-items: center;
background: #fff;
border-radius:1em;
color:#550055;
padding: 10px;
margin: 4em auto;
`
export const Rows = styled.div`
width: 100%;
padding: 10px;
margin: auto;
flex-direction: ${({reverse})=>(reverse ? 'row-reverse':'row')};
display: flex;
justify-content:space-between;
align-items:center;
color: ${({color})=>(color ? color:'inherit')};
background: ${({bg})=>(bg ? bg:'transparent')};

@media screen and (max-width:700px) {
    flex-direction:column;
}
`
export const Column = styled.div`
flex-direction:column;
align-items:center;
border-radius:1em;
color: ${({color})=>(color ? color:'inherit')};
background: ${({bg})=>(bg ? bg:'transparent')};
`
export const ImageWrapper = styled.div`
`
export const Image = styled.img`
max-height:700px;
border: none;
width:35em;
object-fit:cover;

@media screen and (max-width:1100px) {
    width: 25em;
}
@media screen and (max-width:900px) {
    width: 18em;
}
@media screen and (max-width:700px) {
    width: 100%;
    height: 300px;
}
`
export const TextContainer = styled.div`
width: 100%;
padding: 20px;
align-items:center;
text-align:left;
`
export const Title = styled.p`
font-size: 20px;
font-weight:bold;
text-transform:uppercase;
`
export const Texts = styled.p`
font-size: 17px;
`
export const Button = styled.button`
border:1px solid #550055;
background: transparent;
align-items:center;
padding:10px;
border-radius:1em;
color:#550055;
margin:auto;
width: 80%;
`