import styled from 'styled-components'

export const ModalContainer = styled.div`
background-color: #550055;
width:100%;
height: 100vh;
padding: 40px;
align-items: center;
display: flex;
justify-content: center;
`
export const Wrapper = styled.div`
text-align: center;
width: 60%;
background-color: #fff;
border: none;
border-radius: 2em;
padding: 20px;
margin: 10px;


@media screen and (max-width:800px) {
    width: 80%;
}
@media screen and (max-width:600px) {
    width: 100%;
}
`
export const ModalItems = styled.div`
text-align: left;
width: 100%;
padding: 10px;
align-items: center;
margin-bottom: 20px;
`