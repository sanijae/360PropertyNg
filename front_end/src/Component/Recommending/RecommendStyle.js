import styled from 'styled-components'

export const Container = styled.div`
background: transparent;
padding: 10px;
margin: 0px;
width: 100%;

@media screen and (max-width:400px) {
    padding: 0px;
}
`
export const CardItem = styled.div`
width:100%;
margin:3px;
border: 1px solid #550055;
border-radius:1em;
`
export const Image = styled.img`
width:100%;
object-fit: cover;
border-radius:1em;
`
export const CardContent = styled.div`
display:flex;
padding: 10px;
width:100%;
justify-content: space-between;
`
export const Text = styled.div`
font-size:18px;
color:#000;
background-color: #fff;
`