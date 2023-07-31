import React,{useState} from 'react'
import { Container, Form, FormContainer, FormTitle, FormWrapper, Input, InputWrapper, Label, SubmitButton } from './Style'

export default function ContactForm() {
  const [data,setData] = useState({name:'',email:'',title:'',content:''})
    function handleSubmit(e){
        e.preventDefault()
        try {
            alert('submit')
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <Container>
        <FormContainer>
            <FormWrapper>
                <Form onSubmit={handleSubmit}>
                    <FormTitle>Contact Us</FormTitle>
                    <InputWrapper>
                      <Label>Your Full Name</Label>
                      <Input placeholder='Enter your name here' onChange={(e)=>setData({...data,name:e.target.value})} />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Your Email</Label>
                      <Input placeholder='Enter email here' onChange={(e)=>setData({...data,email:e.target.value})} />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Title</Label>
                      <Input placeholder='Enter Title here' onChange={(e)=>setData({...data,title:e.target.value})} />
                    </InputWrapper>
                    <InputWrapper>
                      <Label>Content</Label>
                      <Input placeholder='Type the content' as='textarea'
                       rows={4} style={{border:'1px solid #000'}} onChange={(e)=>setData({...data,content:e.target.value})} />
                    </InputWrapper>
                    <SubmitButton type='submit'>Submit</SubmitButton>
                </Form>
            </FormWrapper>
        </FormContainer>
    </Container>
  )
}
