import { Container,FormWrapper,FormTitle,InputWrapper,Input,SubmitButton,Form, Label, FormContainer } from './AuthStyle'
import React, { useState } from 'react'
import {useAuth} from '../../Hooks/useHooks'


export default function Auth() {
  const [isSignIn,setIsSignIn] = useState(false)
  const [data,setData] = useState({firstname:'',lastname:'',username:'',email:'',password:''}) 
  const {signIn,errors,signUp} = useAuth()

  const updateForm =(e)=>{
    setData((prev)=>{
      return{...prev,[e.target.name]:e.target.value}
    })
  }
  
  const submitData = async(e)=>{
    e.preventDefault()
    try {
        if(isSignIn){
         signUp({...data})        
        }else{
        signIn({...data})      
      }
       } catch (error) {
        console.log(error);
      }
    }
  return (
    <Container>
      <FormContainer>
       <FormWrapper>
         <Form onSubmit={submitData}>
           <FormTitle>{isSignIn ? 'Sign Up': 'Sign In'}</FormTitle>
            {errors && <div className='text-danger h6'>{errors}</div>}
            {isSignIn && <>
           <InputWrapper>
             <Label>First Name</Label>
            <Input placeholder='First Name' name='firstname' value={data.firstname} onChange={updateForm} />
           </InputWrapper>
           <InputWrapper>
             <Label>Last Name</Label>
            <Input placeholder='Last Name'  name='lastname' value={data.lastname} onChange={updateForm} />
           </InputWrapper>
           <InputWrapper>
             <Label>Username</Label>
            <Input placeholder='username'  name='username' value={data.username} onChange={updateForm} />
           </InputWrapper>
           </>}
           <InputWrapper>
             <Label>Email</Label>
            <Input placeholder='Email' type='email'  name='email' value={data.email} onChange={updateForm} />
           </InputWrapper>
           <InputWrapper>
             <Label>Password</Label>
            <Input placeholder='Password' type='password'  name='password' value={data.password} onChange={updateForm} />
           </InputWrapper>
           {isSignIn && <>
           <InputWrapper>
             <Label>Confirm Password</Label>
            <Input placeholder='Confirm Password' type='password' />
           </InputWrapper>
           </>}
           <SubmitButton type='submit'>{isSignIn ? 'Sign Up': 'Sign In'}</SubmitButton>
           <p>{isSignIn ? 'Already have an Account':'Dont have an Account'} <span className='text-primary'
           style={{cursor:'pointer'}}
           onClick={()=>setIsSignIn(!isSignIn)}>
             {isSignIn ? 'Sign In': 'Sign Up'}
             </span></p>
         </Form>
       </FormWrapper>
       </FormContainer>
    </Container>
  )
}
