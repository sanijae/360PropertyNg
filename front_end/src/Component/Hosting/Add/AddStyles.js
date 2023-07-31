import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
padding: 30px;
margin: 0;
background: #550055;
justify-content: center;
`
export const Wrapper = styled.div`
align-items: center;
display: block;
justify-content: stretch;
width: 60%;
height: fit-content;
background: #fff;
color: #550055;
padding: 40px;
border-radius: 1em;

@media screen and (max-width:750px){
    width:80%;
}
@media screen and (max-width:650px){
    width:100%;
}
`
export const Forms = styled.form`
flex-direction: column;
width: 100%;
padding: 10px;
background: transparent;
align-items: center;
justify-content: center;
color: inherit;
`
export const Title = styled.p`
text-align: center;
font-weight:bold;
font-size: 20px;
`
export const InputWrapper = styled.div`
align-items: center;
text-align: left;
justify-content: center;
margin-top: 20px;
margin-bottom: 10px;
`
export const Label = styled.label`
font-size: 17px;
`
export const Input = styled.input`
outline: none;
border: none;
align-items: center;
width: 100%;
border-bottom: 1px solid #000;

&:focus{
    outline: none;
}
`
export const SpaceInput = styled.input`
outline: none;
border: 1px solid #550055;
width: 100%;
padding-left: 2px;
margin: auto;
align-items: center;

&:focus{
    outline: none;
}
`
export const TextArea = styled.input`
border-radius: 1em;
padding: 10px;
width: 100%;

&:focus{
  outline: none;
}
`
export const ButtonWrapper =styled.div`
display: flex;
padding: 10px;
justify-content: space-between;
width: 100%;
`
export const Button = styled.button`
background: ${({bg})=>(bg ? bg:'#550055')};
width: fit-content;
border: none;
border-radius: 1em;
color: ${({color})=>(color ? color:'#fff')};
cursor: pointer;
padding: 10px;

/* @media screen and (max-width: 300px){
  width: 100%;
} */
`

export const StyledInput = styled.input`
width:100%;
border:1px solid #550055;
border-radius: 10px;
padding: 10px;
align-items: center;
background-color: transparent;
color: #550055;

&:focus{
  outline: none;
}
`