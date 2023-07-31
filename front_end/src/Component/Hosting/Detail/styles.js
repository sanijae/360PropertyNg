import styled from 'styled-components'

export const Wrapper = styled.div`
padding-top:20px;
width: 80%;
background: #fff;
color: #000;
border: none;
border-radius: 2em;
margin: auto;
flex-direction: column;
align-items: center;

@media screen and (max-width:700px) {
    width: 95%;
}
`
export const Hero = styled.div`
width: 100%;
/* position: relative; */
height: 25rem;
margin: auto;
background: transparent;

@media screen and (max-width:600px) {
    height: 20rem;
}
`
export const BtnWrapper = styled.div`
width: 100%;
display: flex;
margin: auto;
padding: 20px;
align-items: center;
justify-content: center;
`
export const Button = styled.button`
width: 60%;
margin: auto;
padding: 20px;
text-transform: capitalize;
align-items: center;
text-align: center;
border: 1px solid #550055;
background: transparent;
border-radius: 1em;
`
export const Images = styled.img`
width: 100%;
height: 25rem;
border-radius: 1em;
object-fit: cover;

@media screen and (max-width:600px) {
    height: 20rem;
}
`
export const Rows = styled.div`
width: 100%;
padding: 10px;
margin: auto;
align-items: flex-start;
background: transparent;
display: flex;
justify-content: space-between;

@media screen and (max-width:400px) {
    flex-direction: column;
}
`
export const Columns = styled.div`
margin: auto auto 10px auto;
text-align: center;
flex-direction: column;
padding: 10px;
background: transparent;
`
export const Title = styled.div`
margin: auto;
font-size: 18px;
text-transform: capitalize;
`
export const Texts = styled.div`
margin:auto ;
font-size: 18px;
text-transform: capitalize;
`
export const Desc = styled.div`
width: 100%;
background: rgba(0,0,0,.6);
color: #fff;
font-size: 16px;
align-items: stretch;
padding: 20px 20px;
margin: auto;
`
export const Line = styled.div`
width: 100%;
height: 2px;
background: #550055;
margin: 5px auto 5px auto;
padding: 1px;
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