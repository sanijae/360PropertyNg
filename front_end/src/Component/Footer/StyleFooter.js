import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
margin: auto;
padding: auto;
align-items: center;
background: rgba(0,0,0,.7);
color: #fff;
bottom: 0;
left: 0 ;
right: 0;

`
export const Texts = styled.div`
align-items: center;
padding: 0px;
cursor: pointer;
`

export const Items = styled.div`
font-size: 15px;
align-items: center;
padding: 10px;
cursor: pointer;
`
export const ItemsWrapper = styled.div`
align-items: center;
padding: 10px;
display: flex;
justify-content: space-between;
width: 100%;
`
export const Wrapper = styled.div`
padding: 30px;
background: transparent;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
text-align: center;
align-items: flex-start;
`
export const WrapperContainer = styled.div`
background: transparent;
padding: 10px;
`