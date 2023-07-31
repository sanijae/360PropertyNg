import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
background: inherit;
color: inherit;
position: relative;


`
export const Menus = styled.div`
width: 100%;
padding: 20px;
flex-direction: column;
height: 100vh;
background: #330033;
color: #fff;
position: absolute;
top: 3.7em;
z-index: 20;
left: 0;
right: 0;

@media screen and (min-width:900px) {
    display: none;
}
`
export const ItemWrapper = styled.div`
`
export const Items = styled.div`
width: 100%;
padding: 10px;
display: flex;
align-items: center;
background: inherit;
color: inherit;
cursor: pointer;
border: 1px solid #fff;
margin-top: 20px;
border-radius: 10px;

:hover{
    background: #fff;
    color: #550055;
    border-radius: 10px;
    border: none;
}

p{
    padding-left: 20px;
}
`

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`
export const Avatar = styled.img`
width: 40px;
height: 40px;
object-fit: cover;
border-radius: 100%;
`
export const Icon = styled.div`
align-items: center;
padding: 4px;
background: #fff;
color: #330033;
font-weight: bold;
cursor: pointer;
`
export const Brand = styled.div`
font-size: 20px;
font-weight: bold;
padding: 10px;

@media screen and (max-width:900px) {
    display: none;
}
`
export const Text = styled.div`
font-size: 18px;
`
export const SignButton = styled.button`
padding: 5px;
border: none;
border-radius: 10px;
background: #fff;
color: #330033;
align-items: center;

:hover{
    background: #550055;
    color: #fff;
}
`
export const Hamburger = styled.div`
display: none;

@media screen and (max-width:900px) {
    display: block;
    cursor: pointer;
}
`