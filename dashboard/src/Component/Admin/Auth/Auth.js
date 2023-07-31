import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid, IconButton } from '@mui/material'
import { Email, Person, RemoveRedEye } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin, registerAdmin } from '../../../Data/Actions/Admin'

export default function Auth() {
    const [showForm,setShowForm] = useState(true)
    const [showPassword,setShowPassword] = useState(false)
    const [errorss,setError] = useState('')
    const [users,setUsers] = useState({firstname:'',lastname:'',email:'',password:'',con_pass:''})
    const dispatch = useDispatch()
    const {errors} = useSelector((state)=>state.admins)

async function handleSubmit(e){
    e.preventDefault()
    try {
        setError('')
        if(showForm){
            dispatch(adminLogin({...users}))
            console.log(users);
            setError('')                
        }else{
            if(users.password === users.con_pass){
            dispatch(registerAdmin({...users}))
            console.log(users);
            setError('')
            }else{
                setError('Password did not match')
            } 
        }
    } catch (error) {
        setError(error.message)
    }
}
console.log(errors);
  return (
    <AuthContainer>
        <Container>
        <Wrapper>
            <Form onSubmit={handleSubmit} >
                <Title>{ showForm ? 'Login':'Register'}</Title>
                <FormWrapper>
                   <Grid container spacing={'streach'}>
                     { !showForm && <> <Grid xs={12} sm={12} md={6}>
                    <FormGroup>
                        <Label>First Name</Label>
                        <FormControl>
                            <Person/>
                            <FormInput placeholder='First Name' onChange={(e)=>setUsers({...users,firstname:e.target.value})} />
                        </FormControl>
                    </FormGroup>
                    </Grid>
                    <Grid xs={12} sm={12} md={6}>
                    <FormGroup>
                        <Label>Last Name</Label>
                        <FormControl>
                            <Person/>
                            <FormInput placeholder='Last Name' onChange={(e)=>setUsers({...users,lastname:e.target.value})} />
                        </FormControl>
                    </FormGroup>
                    </Grid> </>}
                    <Grid xs={12} sm={12} md={12}>
                    <FormGroup>
                        <Label>Email</Label>
                        <FormControl>
                            <Email/>
                            <FormInput placeholder='Email'  type={'email'} onChange={(e)=>setUsers({...users,email:e.target.value})} />
                        </FormControl>
                    </FormGroup>
                    </Grid>
                    <Grid xs={12} sm={12} md={!showForm ? '6':"12"}>
                    <FormGroup>
                        <Label>Password</Label>
                        <FormControl>
                            <FormInput placeholder='Password' type={ showPassword ? 'text': 'password'} 
                            onChange={(e)=>setUsers({...users,password:e.target.value})} />
                            <IconButton onClick={()=>setShowPassword(!showPassword)} >
                            <RemoveRedEye/>
                            </IconButton>
                        </FormControl>
                    </FormGroup>
                    </Grid>
                    {!showForm && <Grid xs={12} sm={12} md={6}>
                    <FormGroup>
                        <Label>Confirm Password </Label>
                        <FormControl>
                            <FormInput placeholder=' Repeat Password'  type={ showPassword ? 'text': 'password'}
                            onChange={(e)=>setUsers({...users,con_pass:e.target.value})} />
                            <IconButton onClick={()=>setShowPassword(!showPassword)}>
                            <RemoveRedEye/>
                            </IconButton>
                        </FormControl>
                    </FormGroup>
                    </Grid>}
                    </Grid>
                </FormWrapper>
                {errors && <Text style={{background:'#fff',color:'red'}} >{errors}</Text>}
                 {errorss && <Text style={{background:'#fff',color:'red'}} >{errorss}</Text>}
                <Submit type='submit'>{showForm ? 'Login':'Register'}</Submit>
                <Text>
                    {showForm ? 'Dont Have an account':'Already Have an account'}
                  <button onClick={()=>setShowForm(!showForm)}
                    style={{padding:'10px',border:'none',alignItems:'center',background:'transparent',color:'blue',cursor:"pointer",fontSize:'18px'}} >
                      {showForm ? 'Register':'Login'}
                 </button>    
                </Text>
            </Form>
        </Wrapper>
        </Container>
    </AuthContainer>
  )
}

const Container  = styled.div`
width: 100%;
align-items: center;
display: flex;
justify-content: center;
background: transparent;
color: inherit;
padding-top: 5em;
`
const Wrapper = styled.div`
width: 60%;
padding: 20px;
flex-direction: column;
margin: 10px auto;
border: 1px solid #fff;
background: transparent;
color: inherit;
border-radius: 20px;

@media screen and (max-width:900px) {
    width: 60%;
}
@media screen and (max-width:700px) {
    width: 70%;
}
@media screen and (max-width:400px) {
    width: 90%;
}
`
const Form = styled.form`
background: inherit;
color: inherit;
width: 100%;
align-items: flex-start;
flex-direction: column;
display: flex;
justify-content: center;
`
const Title = styled.p`
font-size: 20px;
padding: 10px;
align-items: center;
font-weight: bold;
width: 100%;
text-align: center;
`
const FormWrapper = styled.div`
text-align: left;
flex-direction: column;
padding: 10px;
width: 100%;
`
const FormGroup = styled.div`
flex-direction: column;
align-items: center;
border: none;
text-align: left;
margin: 10px auto;
`
const FormControl = styled.div`
display: flex;
align-items: center;
padding: 10px;
background: #fff;
color: #550055;
border: 1px solid #550055;
border-radius: 10px;
`
const Label = styled.label`
font-size: 18px;
padding: 10px;
color: inherit;
`
const FormInput = styled.input`
width: 100%;
padding: 10px;
align-items: center;
border: none;
outline: none;
font-size: 18px;
color: inherit;

:focus{
    outline: none;
}
`
const Submit = styled.button`
width: 100%;
margin: 10px auto;
padding: 20px;
border: 1px solid #fff;
border-radius: 1em;
align-items: center;
display: flex;
justify-content: center;
background: transparent;
color: inherit;
font-size: 20px;
font-weight: bold;

:hover{
    background: #fff;
    color: #550055;
}
`
const Text = styled.div`
width: 100%;
padding: 20px;
text-align: center;
align-items: center;
margin: 10px auto;
background: transparent;
color: ${({color})=>(color ? color : 'inherit')};
font-size: 18px;
`
const AuthContainer = styled.div`
width: 100%;
min-height: 250vh;
align-items: center;
background: #550055;
color: #fff;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 200;
border: none;
`