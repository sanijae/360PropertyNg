import styled from 'styled-components'

export const Container = styled.div`
background-color: #550055;
align-items: center;
text-align: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
width: 100%;
`
export const FormContainer = styled.div`
display: flex;
justify-content: center;
margin: 0 -15px -15px -15px;
align-items: center;
padding-top: 2em;
`
export const FormWrapper = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
flex-direction: column;
padding: 40px;
background-color: #fff;
color: #000;
border: 20px;
max-width: 60%;
margin: 30px;

@media screen and (max-width:800px) {
    max-width: 100% !important;
    flex-basis: 100%;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px;
width: 100%;
`
export const FormTitle = styled.p`
font-size: 30px;
line-height: 1.2px;
line-break: 1;
align-items: center;
font-weight: bold;
`
export const InputWrapper = styled.div`
border: 10px;
border-radius: 1em;
padding: 20px;
display: flex;
flex-direction: column;
margin-bottom: 10px;
width: 100%;
display: flex;
align-items: stretch;
justify-content: left;
text-align: left;
`
export const Label = styled.label`
font-size: 18px;
padding: 10px;
margin-bottom: 2px;
align-items: center;
`
export const Input = styled.input`
outline: none;
padding: 10px;
font-size: 20px;
align-items: center;
width: 100%;
border: none;
border-bottom: 1px solid #000;
border-radius: 1em;
`
export const SubmitButton =styled.button`
border-radius: 2em;
border: none;
align-items: center;
font-size: 20px;
width: 100%;
height: 3em;
padding: 10px;
margin-bottom: 10px;
background: #550055;
color: #fff;
`