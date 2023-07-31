import styled from 'styled-components'

export const Container = styled.div`
padding: 30px;
display: flex;
margin: 0px;
width: 100%;
height: 100vh;
align-items: center;
justify-content: space-evenly;
background-color: #550055;
`
export const Wrapper = styled.div`
padding: 10px;
margin: 10px;
display: flex;
width: 80%;
align-items: center;
background-color: #fff;
border-radius: 2em;
border: none;
flex-direction: column;

@media screen and (max-width:600px) {
    width:100%
}
`
export const InfoContainer = styled.div`
padding: 10px;
margin: 20px;
margin-left: 30px;
margin-right: 30px;
align-items: center;
width: 100%;
cursor: pointer;
display: flex;
justify-content: space-around;
text-align: center;
background-color: rgba(0,0,0,0);
box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.5);
border-radius: 2em;
`
export const SettingContainer = styled.div`
margin: 10px;
margin-bottom: 20px;
align-items: center;
padding: 10px;
border: none;
width: 100%;
`
export const SettingItems = styled.div`
padding: 10px;
margin: 10px;
align-items: center;
justify-items: stretch;
border-radius: 2em;
border: none;
background-color: rgba(0,0,0,0.5);
`
export const LogoutButton = styled.button`
background-color: #550055;
padding: 10px;
margin: 20px;
align-items: center;
font-size: 20px;
color: #fff;
width: 100%;
height: 3em;
border: none;
border-radius: 2em;
`