import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Hooks/useHooks'
import { Button, Container, Forms,
   InputWrapper, Label, StyledInput, 
   Title, Wrapper } from './AddStyles'

export default function UserDetail() {
    const [user,setUser] = useState()
    const [errors,setError] = useState('')
    const id = localStorage.getItem('zimosId')
    const [data,setData] = useState({name:user?.businessname,desc:user?.businessdesc,
        phone:user?.phone,address:user?.businessaddress})
    const {currentUser} = useAuth()
    const navigate = useNavigate()
useEffect(()=>{
    return(async()=>{
      setUser(currentUser.result)
    })
},[currentUser, user])

    async function uploadData(e){
        e.preventDefault()
        try {
            setError('')
            const res = await axios.put('http://localhost:5000/Property/user/update/'+id,{
                businessname:data.name,
                businessdesc:data.desc,
                businessaddress:data.address,
                phone:data.phone
            })
            if(res.data.error){
              setError(res.data.error);
            }else{
              //navigate('/CreatePost')
              setError('')
              alert('Your data updated you can now proceed to upload your property')
            }
        } catch (error) {
            console.log(error.message);
        }
    } 
  return (
    <Container>
      <Wrapper>
          <Forms onSubmit={uploadData}>
              <Title>If this is your first post please confirm your contact details</Title>
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <InputWrapper>
                    <Label>Business/Company name</Label>
                    <StyledInput placeholder='Agent,Developer,landlord....'
                     value={data.name}
                    onChange={(e)=>setData({...data,name:e.target.value})} />
                  </InputWrapper>
                </Col>
                <Col xs={12} sm={12} md={6}>
                  <InputWrapper>
                    <Label>Business/Company phone </Label>
                    <StyledInput placeholder='number....'
                    value={data.phone}
                    onChange={(e)=>setData({...data,phone:e.target.value})} />
                  </InputWrapper>
               </Col>               
              </Row>
              <InputWrapper>
               <Label>Business/Company address</Label>
               <StyledInput as='textarea' rows={4}
               value={data.address}
                placeholder='address of your office....'
               onChange={(e)=>setData({...data,address:e.target.value})} />
              </InputWrapper>
              <InputWrapper>
               <Label>Business/Company description</Label>
               <StyledInput as='textarea' rows={6}
               value={data.desc}
               placeholder='Describe your business....'
               onChange={(e)=>setData({...data,desc:e.target.value})} />
              </InputWrapper>
              {errors && <div className='text-danger text-center'>{errors}</div>}
              <Button type='submit' style={{width:'100%',margin:'1em auto'}}>Update before continue</Button>
              <Button type='button' onClick={()=>navigate('/CreatePost')}
               style={{width:'100%'}}> Proceed to upload</Button>
          </Forms>
      </Wrapper>
    </Container>
  )
}
