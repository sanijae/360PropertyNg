import { Avatar, Box, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FaList, FaUser } from 'react-icons/fa'
import { MdEdit, MdEmail, MdAddAPhoto, MdDelete, MdDeleteForever, MdPassword } from 'react-icons/md'
import { useAuth } from '../../Hooks/useHooks'
import { ImageToBase64 } from '../../Api/Base64/ImageToBase64'
import { ModalContainer, Wrapper } from './Modal/ModalStyle'
import bcrypt from 'bcryptjs'
import { useNavigate } from 'react-router-dom'

export default function Account(){
    const {currentUser} = useAuth()
    const [openName,setOpenName] = useState(false)
    const [openEmail,setOpenEmail] = useState(false)
    const [openDelete,setOpenDelete] = useState(false)
    const [openPassword,setOpenPassword] = useState(false)
    const [openPicture,setOpenPicture] = useState(false)
    const navigate = useNavigate()
  return (
    <div>
    <ModalContainer>
       <Wrapper>
            <ListItemButton onClick={()=>{
                setOpenPicture(!openPicture)
            }}>
                <Avatar src={currentUser.result?.imageUrl ? currentUser.result?.imageUrl:''} />
                <ListItemSecondaryAction>
                    <MdAddAPhoto/>
                </ListItemSecondaryAction>
            </ListItemButton>
            <hr/>
            <ListItemButton onClick={()=>navigate('/ManageHost')}>
                <ListItemIcon>
                    <FaList/>
                </ListItemIcon>
                <ListItemText primary={'Manage your listing'} secondary='Manage your uploaded property ' />
                <ListItemSecondaryAction>
                    <MdEdit/>
                </ListItemSecondaryAction>
            </ListItemButton>
            <hr/>
            <ListItemButton onClick={()=>{
                setOpenName(!openName)
            }}>
                <ListItemIcon>
                    <FaUser/>
                </ListItemIcon>
                <ListItemText primary={currentUser.result?.name} secondary='update your name' />
                <ListItemSecondaryAction>
                    <MdEdit/>
                </ListItemSecondaryAction>
            </ListItemButton>
            <hr/>
            <ListItemButton onClick={()=>{
                setOpenEmail(!openEmail)
            }}>
                <ListItemIcon>
                    <MdEmail/>
                </ListItemIcon>
                <ListItemText primary={currentUser.result?.email} secondary='update your email' />
                <ListItemSecondaryAction>
                    <MdEdit/>
                </ListItemSecondaryAction>
            </ListItemButton>
            <hr/>
            <ListItemButton onClick={()=>{
                setOpenPassword(!openPassword)
            }}>
                <ListItemIcon>
                    <MdPassword/>
                </ListItemIcon>
                <ListItemText primary={'Password'} secondary='update your Password' />
                <ListItemSecondaryAction>
                    <MdEdit/>
                </ListItemSecondaryAction>
            </ListItemButton>
            <hr/>
            <ListItemButton onClick={()=>{
                setOpenDelete(!openDelete)
            }}>
                <ListItemIcon>
                    <MdDelete color='red'/>
                </ListItemIcon>
                <ListItemText sx={{color:'red'}} primary={'Delete'} secondary='Delete my Account' />
                <ListItemSecondaryAction>
                    <MdDeleteForever color='red'/>
                </ListItemSecondaryAction>
            </ListItemButton>
        </Wrapper>
    </ModalContainer>
        <UpdateName setOpenName={setOpenName} openName={openName} />
        <UpdateEmail setOpenEmail={setOpenEmail} openEmail={openEmail} />
        <Passwords setOpenPassword={setOpenPassword} openPassword={openPassword} />
        <DeleteAccount openDelete={openDelete} setOpenDelete={setOpenDelete} />
        <UpdatePicture setOpenPicture={setOpenPicture} openPicture={openPicture} />        
    </div>
  )
}


export const UpdateName = ({openName,setOpenName}) => {
    const {nameUpdate,errors} = useAuth()
    const [data,setData] = useState({firstname:'',lastname:''})
    const updateForm = (e) =>{
        setData((prev)=>{
            return{...prev,[e.target.name]:e.target.value}
        })
    }
    const handleUpdate = (e) =>{
        e.preventDefault()
        try {
            nameUpdate({...data})
            window.location.pathname = '/Account'            
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
      <Modal centered show={openName} onHide={()=>setOpenName(!openName)}>
          <Modal.Header>
              <Modal.Title>Update Your Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Box sx={{display:'flex',alignItems:'flex-end',mb:2}}>
                  <ListItemIcon>
                      <FaUser/>
                  </ListItemIcon>
                  <TextField label='First Name' name='firstname' value={data.firstname} onChange={updateForm}
                   variant='standard' sx={{width:"100%"}} />
              </Box>
              <Box sx={{display:'flex',alignItems:'flex-end',mb:2}}>
                  <ListItemIcon>
                      <FaUser/>
                  </ListItemIcon>
                  <TextField label='Last Name' name='lastname' value={data.lastname} onChange={updateForm}
                   variant='standard' sx={{width:"100%"}} />
              </Box>
              {errors && <div className='text-danger'>{errors}</div>}
             </Modal.Body>
          <Modal.Footer>
              <Button variant='secondary' onClick={()=>setOpenName(!openName)}>Cancel</Button>
              <Button variant='primary' onClick={handleUpdate}>Save</Button>
          </Modal.Footer>
      </Modal>
    )
  }
    
export const UpdateEmail = ({openEmail,setOpenEmail}) => {
    const {userUpdate,errors} = useAuth()
    const [data,setData] = useState({email:''})
    const handleUpdate = (e) =>{
        e.preventDefault()
        try {
            console.log(data);
            userUpdate({email:data})
            window.location.pathname = '/Account'            
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
      <Modal centered show={openEmail} onHide={()=>setOpenEmail(!openEmail)}>
          <Modal.Header>
              <Modal.Title>Update Your Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Box sx={{display:'flex',alignItems:'flex-end',mb:2}}>
                  <ListItemIcon>
                      <MdEmail/>
                  </ListItemIcon>
                  <TextField label='Enter Email'name='email' type='email' value={data.email} onChange={(e)=>setData(e.target.value)} variant='standard' sx={{width:"100%"}} />
              </Box>
              {errors && <div className='text-danger'>{errors}</div>}
          </Modal.Body>
          <Modal.Footer>
              <Button variant='secondary' onClick={()=>setOpenEmail(!openEmail)}>Cancel</Button>
              <Button variant='primary' onClick={handleUpdate}>Save</Button>
          </Modal.Footer>
      </Modal>
    )
  }
export const Passwords = ({openPassword,setOpenPassword}) => {
    const {currentUser,passwordUpdate} = useAuth()
    const [errors,setErrors] = useState('')
    const [labels,setLabels] = useState('')
    const [showNew,setShowNew] = useState(false)
    const [oldPassword,setOldPassword] = useState('')
    const [updatePass,setUpdatePass] = useState({password:'',confirmPassword:''})
    const updateInput =(e)=>{
        setUpdatePass((prev)=>{
            return{...prev,[e.target.name]:e.target.value}
        })
    }
    const handleUpdate = async() =>{
        try {
            const passCompare = await bcrypt.compare(oldPassword,currentUser.result?.password)
            if(passCompare){
                setErrors('')
                setShowNew(true)
                console.log(updatePass);
                const checkPass =  updatePass.password !== updatePass.confirmPassword
                    if(updatePass.password ==='' || updatePass.confirmPassword ===''){
                        setLabels('Enter new password')
                    }else{
                        setErrors('')
                        if(checkPass){
                            setErrors('Password dont match')
                        }else{
                            setErrors('')
                            passwordUpdate({password:updatePass.password});
                            window.location.pathname='/Account'
                        }
                    }
            }else{
                setErrors('Invalid Old Password')
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Modal style={{marginTop:'20px'}} centered show={openPassword} onHide={()=>setOpenPassword(!openPassword)} keyboard={false} backdrop='static'>
        <Modal.Header>
            <Modal.Title>Update my password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {labels && <div className='text-secondary bg-light h4 text-center w-100  pt-2'>{labels}</div>}
            {!showNew && 
            <TextField variant='standard'type='password' sx={{width:'100%',mb:2,p:2}} label='Old Password'
            placeholder='old password' onChange={(e)=>setOldPassword(e.target.value)} />
            }
            {showNew && <>
            <TextField variant='standard'type='password' value={updatePass.password} sx={{width:'100%',mb:2,p:2}} label='New Password'
             placeholder='new password'name='password' onChange={updateInput} />
            <TextField variant='standard' type='password' value={updatePass.confirmPassword} sx={{width:'100%',mb:2,p:2}} label='Confirm new Password' 
            placeholder='confirm new password' name='confirmPassword'onChange={updateInput} />
            </>}
            {errors && <div className='text-danger text-center w-100'>{errors}</div>}
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={()=>setOpenPassword(!openPassword)}>Cancel</Button>
            <Button variant='primary' type='button' onClick={handleUpdate}>Save</Button>
        </Modal.Footer>
    </Modal>
  )
}

export const DeleteAccount = ({openDelete,setOpenDelete}) =>{
    const {deleteAccount} = useAuth()

    const deletes = ()=>{
        try {
            deleteAccount()
            window.location.pathname='/Account'
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Modal show={openDelete} onHide={()=>setOpenDelete(!openDelete)} centered >
            <Modal.Header>
                <Modal.Title>Delete My Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>Notice</h2>
                <p>If you delete your account all post you have create will also be deleted</p>
                <span>By click below button your Account will deleted</span>
                <Button variant='danger'onClick={deletes} style={{width:'100%'}}>Yes Delete My Account</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={()=>setOpenDelete(!openDelete)} style={{width:'100%'}}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}
export const UpdatePicture = ({openPicture,setOpenPicture}) => {
    const {userUpdate,errors} = useAuth()
    const [image,setImage] = useState({imageUrl:''})

    const uploads = async(e) =>{
        const file = e.target.files[0]
        const img64 = await ImageToBase64(file)
        setImage(img64)
    }

    const handleUpdate = (e) =>{
        e.preventDefault()
        try {
            userUpdate({imageUrl:image})
            window.location.pathname='/Account'
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
      <Modal centered show={openPicture} onHide={()=>setOpenPicture(!openPicture)}>
          <Modal.Header>
              <Modal.Title>Update Your Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ListItemButton>
                  <label style={{display:'flex'}}>
                  <Avatar src={image} />
                   <input type='file' name='imageUrl' style={{display:'none'}} onChange={(e)=>uploads(e)} />
                  <ListItemSecondaryAction>
                      <MdAddAPhoto/>
                </ListItemSecondaryAction>
                </label>
              </ListItemButton>
              {errors && <div className='text-danger w-100'>{errors}</div>}
             </Modal.Body>
          <Modal.Footer>
              <Button variant='secondary' onClick={()=>setOpenPicture(!openPicture)}>Cancel</Button>
              <Button variant='primary' onClick={handleUpdate}>Save</Button>
          </Modal.Footer>
      </Modal>
    )
  }
  