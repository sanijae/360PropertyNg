import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../../Hooks/useHooks'
import { Container } from '../HostStyle'
import { Hero, Images,Wrapper, Rows,Texts, Line, Desc, BtnWrapper, Button, Loading } from './styles'
import { MdBed, MdEdit,} from 'react-icons/md'
import { Carousel, CarouselItem, Col, Modal, Row } from 'react-bootstrap'
import { ImageUrl } from '../../../Api/ApiCalls'
import { CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, 
  DialogTitle, IconButton, ImageList, ImageListItem} from '@mui/material'
import { Input, InputWrapper, Label, StyledInput, TextArea } from '../Add/AddStyles'
import { FaBath, FaEdit, FaPlus, FaToilet } from 'react-icons/fa'
import { BsShop } from 'react-icons/bs'
import { Category } from '../Add/OptionsData'
import Select from 'react-select'
import { styles } from '../StyledSelect/Select'
import Files from 'react-files'
import axios from 'axios'

export default function ManageDetail() {
  const [post,setPosts] = useState([])
  const [loading,setLoading] = useState(true)
  const {getPostById} = useAuth()
  const id = useParams().id
  const priceConverter = new Intl.NumberFormat('ng-NG')
  const [openDelete,setOpenDelete] = useState(false)
  const [openDesc,setOpenDesc] = useState(false)
  const [openPrice,setOpenPrice] = useState(false)
  const [openImages,setOpenImages] = useState(false)
  const [openSelect,setOpenSelect] = useState(false)

  useEffect(()=>{
    return(async()=>{
      try {
        const posts = await getPostById(id)
        setPosts(posts.data.result)
        setLoading(false)
      } catch (error) {
        //alert(error.message)        
      }
    })
  }) 

 //console.log(post);
  return (
    <Container>
      <Wrapper>
      {loading ? <Loading>
        <CircularProgress size='5em'/>
        <h1>Wait data is Loading</h1>
      </Loading>
      :
      <div>
        <Hero>
          <Carousel style={{height:'100%',width:'100%'}}>
            {post.photos?.map((photo,index)=>(
              <CarouselItem style={{height:'100%',width:'100%'}} key={index}>
                <Images alt='Hero2' src={`${ImageUrl}/${post._id}/${photo.picture}`} />
              </CarouselItem>
            ))}
          </Carousel>
        </Hero>
        <Line/>
        <Row>
          <div style={{display:'flex',justifyContent:'space-between',margin:'auto'}}>
            {post.beds && <p style={{paddingLeft:'5px'}}><MdBed size='2em'/>&nbsp;{post.beds}Beds</p>}
            {post.toilets && <p style={{paddingLeft:'10px'}}><FaToilet/>&nbsp;{post.toilets}Toilets</p>}
            {post.bathrooms && <p style={{paddingLeft:'10px'}}><FaBath/>&nbsp;{post.bathrooms}Bathrooms</p>}
            {post.shops && <p style={{paddingLeft:'10px'}}><BsShop/>&nbsp;{post.shops}Shops</p>}               
            <button className='btn btn-sm' style={{background:'#fff',border:'1px solid #550055',borderRadius:'10px'}} 
            onClick={()=>setOpenImages(!openImages)} ><FaEdit/> Images</button>
          </div>
        </Row>
        <Rows>
          <div>
            {post.name && <Texts>{post.name}&nbsp;for&nbsp;{post.category}
            <IconButton onClick={()=>setOpenSelect(!openSelect)}>
                <MdEdit/>
              </IconButton></Texts>}
            {post.address && <Texts>{post.address}&nbsp;{post.city}</Texts>}
          </div>
          <div>
            {post.price && <Texts>Price&nbsp;&#8358;{priceConverter.format(post.price)}{post.duration && '/'+post.duration}
              <IconButton onClick={()=>setOpenPrice(!openPrice)}>
                <MdEdit/>
              </IconButton></Texts>}
            {post.minPrice && <Texts>Min Price&nbsp;&#8358;{priceConverter.format(post.minPrice)}
            {post.duration && '/'+post.duration}
            <IconButton onClick={()=>setOpenPrice(!openPrice)}>
                <MdEdit/>
              </IconButton></Texts>}
            {post.maxPrice && <Texts>Max Price&nbsp;&#8358;{priceConverter.format(post.maxPrice)}
            {post.duration && '/'+post.duration}
            <IconButton onClick={()=>setOpenPrice(!openPrice)}>
                <MdEdit/>
              </IconButton></Texts>}
          </div>            
        </Rows>
        <Row>
          <Col xs={6} sm={6} md={4} lg={4}>
            {post.features && <h5>Features</h5>}
            {post.features?.map((am,i)=><div key={i} >
              <div className='d-flex p-2 align-items-center'>
                <input type='checkbox'  value={am} readOnly checked/><div>{am}</div>
              </div>
            </div>)}
          </Col>
          <Col xs={6} sm={6} md={4} lg={4}>
            {post.amenities && <h5>Amenities</h5>}
            {post.amenities?.map((am,i)=><div key={i} >
              <div className='d-flex p-2 align-items-center'>
                <input type='checkbox'  value={am} readOnly checked/><div>{am}</div>
              </div>
            </div>)}
          </Col>
          <Col xs={6} sm={6} md={4} lg={4}>
            {post.safety && <h5>Safety</h5>}
            {post.safety?.map((am,i)=><div key={i} >
              <div className='d-flex p-2 align-items-center'>
                <input type='checkbox'  value={am} readOnly checked/><div>{am}</div>
              </div>
            </div>)}
          </Col>
        </Row>
        <Desc>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <h5>Description</h5>
            <IconButton onClick={()=>setOpenDesc(!openDesc)}>
               <MdEdit/>
            </IconButton>
          </div>
          <Texts>
            {post.desc}
          </Texts>
        </Desc>
        <BtnWrapper>
          <Button onClick={()=>setOpenDelete(!openDelete)}>Delete this post</Button>
        </BtnWrapper>
        </div>
        }
      </Wrapper>
      <DeleteDialog openDelete={openDelete} setOpenDelete={setOpenDelete} post={post}/>
      <DescDialog openDesc={openDesc} setOpenDesc={setOpenDesc} post={post} />
      <PriceDialog openPrice={openPrice} setOpenPrice={setOpenPrice} post={post} />
      <ImageDialog setOpenImages={setOpenImages} openImages={openImages} post={post} />
      <SelectDialog openSelect={openSelect} setOpenSelect={setOpenSelect} post={post} />
    </Container>
  )
}

export function DeleteDialog({openDelete,setOpenDelete,post}){
  const {deletePost} = useAuth()
  async function handleDelete(){
    try {
      await deletePost(post._id)
      window.location.pathname='/ManageHost'
    } catch (error) {
      console.log(error.message);
    }
  }
  return(
    <div>
      <Dialog onClose={()=>setOpenDelete(openDelete)} open={openDelete} >
        <DialogTitle>Delete a post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are sure want delete this post
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className='btn btn-secondary' onClick={()=>setOpenDelete(!openDelete)}>Cancel</button>
          <button className='btn btn-danger' onClick={handleDelete}>Yes, Delete it</button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export function DescDialog({openDesc,setOpenDesc,post}){
  const {updatePost} = useAuth()
  const [desc,setDesc] = useState(post.desc)
  async function handleEdit(){
    try {
      await updatePost(post._id,{desc:desc})
      setOpenDesc(!openDesc)
    } catch (error) {
      console.log(error.message);
    }
  }
  return(
    <Modal onHide={()=>setOpenDesc(!openDesc)} centered size='md' show={openDesc}>
      <Modal.Header>
        <Modal.Title>Update Description</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Label>Description</Label>
        <TextArea rows={7} as='textarea' placeholder='type description' value={desc} onChange={(e)=>setDesc(e.target.value)} />
        <div style={{fontSize:'13px',textAlign:'center',margin:'0',padding:'0'}}>describe your place with atleast 40 words</div>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-secondary' onClick={()=>setOpenDesc(!openDesc)}>Cancel</button>
        <button className='btn btn-primary' onClick={handleEdit} >save</button>
      </Modal.Footer>
    </Modal>
  )
}
export function PriceDialog({openPrice,setOpenPrice,post}){
  const [price,setPrice] = useState(post.price)
  const [minPrice,setMinPrice] = useState(post.minPrice)
  const [maxPrice,setMaxPrice] = useState(post.maxPrice)
  const {updatePost} = useAuth()
  async function handleUpdate(){
    try {
      await updatePost(post._id,{price:price,minPrice:minPrice,maxPrice:maxPrice})
      setOpenPrice(!openPrice)
    } catch (error) {
      console.log(error.message);
    }
  }
  return(
    <Modal onHide={()=>setOpenPrice(!openPrice)} centered size='md' show={openPrice}>
      <Modal.Header>
        <Modal.Title>Update Price</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       {post.price && <InputWrapper>
          <Label>Price</Label>
          <Input name='Desc' placeholder='desc' value={price} onChange={(e)=>setPrice(e.target.value)} />
        </InputWrapper>}
        {post.minPrice &&<InputWrapper>
          <Label>Min Price</Label>
          <Input name='Desc' placeholder='desc' value={minPrice} onChange={(e)=>setMinPrice(e.target.value)} />
        </InputWrapper>}
        {post.maxPrice &&<InputWrapper>
          <Label>Max Price</Label>
          <Input name='Desc' placeholder='desc' value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} />
        </InputWrapper> }       
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-secondary' onClick={()=>setOpenPrice(!openPrice)}>Cancel</button>
        <button className='btn btn-primary' onClick={handleUpdate} >save</button>
      </Modal.Footer>
    </Modal>
  )
}
export function SelectDialog({openSelect,setOpenSelect,post}){
  const [name,setName] = useState(post.name)
  const [category,setCategory] = useState(post.category)

  const {updatePost} = useAuth()
  async function handleUpdate(){
    try {
      await updatePost(post._id,{name:name,category:category})
      setOpenSelect(!openSelect)
    } catch (error) {
      console.log(error.message);
    }
  }

  return(
    <Modal onHide={()=>setOpenSelect(!openSelect)} centered size='md' show={openSelect}>
      <Modal.Header>
        <Modal.Title>Update Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputWrapper>
          <Label>Update Name</Label>
          <StyledInput onChange={(e)=>setName(e.target.value)}/>
        </InputWrapper>     
        <InputWrapper>
          <Label>Update Category</Label>
          <Select styles={styles} onChange={(e)=>setCategory(e.value)} options={Category} />
        </InputWrapper>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-secondary' onClick={()=>setOpenSelect(!openSelect)}>Cancel</button>
        <button className='btn btn-primary' onClick={handleUpdate} >save</button>
      </Modal.Footer>
    </Modal>
  )
}

export function ImageDialog({openImages,setOpenImages,post}){
  const [images,setImages] = useState([])
  const [imgError,setImgError] = useState('')
  const [errors,setError] = useState('')
  function addImages(file){
    setImages(file)
  }
  async function submitData(e){
    e.preventDefault()
    if(images.length <5){
      setImgError('Please select atleast five(5) images')
    }else if(images.length >50){
      setImgError('Please you can only uploads maximum of 50 images')
    }else{
      setImgError('')
      try {
        const formData = new FormData()
        if(images !== null){
          images.map((image)=>formData.append('files',image))
        }else{
          formData.append('files',images)
        }
        const config = {
          Headers:{"Content-Type":"multipart/form-data"}
        }
        const nPost = await axios.put(`http://localhost:5000/Property/post/addImage/${post._id}`,
        formData,config)
         if(nPost.data.error){
           console.log(nPost.data.error);
           setError(nPost.data.error)
         }else{
           console.log(nPost);         
         }        
      } catch (error) {
        setError(error.message)
      } 
    }
  }
  function onError(error,file){
    setImgError(error.code +':'+error.message)
  }
  return(
    <Modal onHide={()=>setOpenImages(!openImages)} centered size='md' show={openImages}>
      <Modal.Header>
        <Modal.Title>Update Images</Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center'>   
        <InputWrapper className='text-center'>
          <Files multiple clickable 
          onChange={addImages}
          maxFileSize={50000}
          minFileSize={5000}
          onError={onError}
          className='files-dropzone'>
            Select Your Pictures here &nbsp;&nbsp;
            <FaPlus/>
          </Files>
        </InputWrapper>
        <div className='text-center h5'>All the images must be between 5kb to 50kb size</div>
          {imgError &&<div className='alert text-alert text-center text-danger'>{imgError}</div>}
          <ImageList variant='masonry'>
            {images.map((image,index)=>(
              <ImageListItem key={index}>
                <img alt='Pic' src={image.preview.url} srcSet={image} loading={'lazy'} />
              </ImageListItem>
            ))}
          </ImageList>
          {errors &&<div className='alert alert-text text-center text-danger'>{errors}</div>}
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-secondary' onClick={()=>setOpenImages(!openImages)}>Cancel</button>
        <button className='btn btn-primary' onClick={submitData} >save</button>
      </Modal.Footer>
    </Modal>
  )
}