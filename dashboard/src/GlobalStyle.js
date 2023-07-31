import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`
export const Section = styled.div`
`
export const AppBar = styled.nav` 
 width: 100%;
 height: 4em;
 align-items: center;
 display: flex;
 justify-content: space-between;
 background: #330033;
 color: #fff;
 position: fixed;
 z-index: 100;
`
export const Main = styled.div`
padding-top: 4em;
display: flex;
`
export const Sidebar = styled.div`
flex: 1;
position: fixed;
z-index: 50;
width: 20em;
max-width: 20em;
background: #330033;
color: #fff;
padding: 20px;
padding-top: 0px;
max-height: 100vh;

@media screen and (max-width:900px) {
    display: none;
}

`
export const Content = styled.div`
flex: 4;
padding-left: 20em;
margin: 10px;


@media screen and (max-width:900px) {
    padding-left: 0px;
}`

export const AuthContainer = styled.div`
width: 100%;
min-height: 100vh;
background: transparent;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 200;
border: none;
`