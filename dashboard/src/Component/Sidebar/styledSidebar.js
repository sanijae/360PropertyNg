import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
height: 100vh;
padding: 10px;
display: flex;
flex-direction: column;
`
export const Items = styled.div`
width: 100%;
padding: 10px;
display: flex;
background: transparent;
color: inherit;
margin-top: 20px;
cursor: pointer;
border: 1px solid #fff;
align-items: center;
border-radius: 10px;

:hover{
	background: #fff;
	color: #330033;
	border-radius: 10px;
	border: none;
}

p{
	padding-left: 20px;
}
`
export const LogButton = styled.button`
width: 100%;
padding: 10px;
align-items: center;
border: none;
border-radius: 1px solid #fff;
background: #fff;
color: #550055;
font-size: 20px;
font-weight: bold;
position: absolute;
left: 0;
right: 0;
bottom: 6em;

:hover{
	background: #550055;
	color: #fff;
}
`
export const Line = styled.div`
width: 100%;
height: 1em;
background: #fff;
`