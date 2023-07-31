import React, { useState } from 'react'
import { useAuth } from '../../../Hooks/useHooks'
import { Title,Container,Forms, Wrapper, InputWrapper,
   Input, 
   ButtonWrapper,
   Button,
   Label,
   SpaceInput,
   StyledInput
   } from './AddStyles'
import {MdAdd} from 'react-icons/md'
import { ImArrowLeft2 } from 'react-icons/im'
import Files from 'react-files'
import { ImageList, ImageListItem, } from '@mui/material'
import { Amenities, Category, Features, Safety, Types } from './OptionsData'
import { Col, Row } from 'react-bootstrap'
import {styles,Option} from '../StyledSelect/Select'
import Select from 'react-select'
import axios from 'axios' 
import CurrencyInput from 'react-currency-input-field'

export default function CreatePost() {
  const [services,setServices] = useState({features:[],safety:[],amenities:[]})
  const [items,setItems] = useState({beds:'',tolets:'',bathrooms:'',shops:''})
  const [steps,setSteps] = useState(0)
  const [selectType,setType] = useState('')
  const [selectSpace,setSpace] = useState('')
  const [selectCategory,setCategory] = useState('')
  const [selectValue,setSelectValue] = useState({year:'',negotiable:''})
  const [duration,setDuration] = useState('')
  const [data,setData] = useState({name:'',desc:'',state:'',city:'',address:'',minPrice:'',maxPrice:'',price:''})
  const [images,setImage] = useState([])
  const [post,setPost] = useState()
  
   switch (steps) {
     case 0:
       return <Details 
          data={data} setData={setData}
          selectCategory={selectCategory} setCategory={setCategory}
          items={items} setItems={setItems}
          setType={setType} selectType={selectType}
          setSteps={setSteps} steps={steps}
          setPost={setPost}
       />
     case 1:
       return <Services 
          post={post}
          setSteps={setSteps} steps={steps}
          data={data} setData={setData}
          services={services} setServices={setServices}          
       />
     case 2:
       return <Pictures 
           post={post}
           images={images} setImage={setImage} 
           setSteps={setSteps} steps={steps}/>
     case 3:
       return <Prices 
          post={post}
          data={data} setData={setData}
          duration={duration} setDuration={setDuration} 
          selectValue={selectValue} setSelectValue={setSelectValue}
          setSteps={setSteps} steps={steps} />
     default:
      return <Details 
          data={data} setData={setData}
          selectCategory={selectCategory} setCategory={setCategory}
          selectSpace={selectSpace} setSpace={setSpace}
          setType={setType} selectType={selectType}
          setSteps={setSteps} steps={steps}/>
   }
}
function Details({setSteps,steps,items,setItems,data,setData,setType,selectType,selectCategory,setCategory,setPost}){
  const [catError,setCatError] = useState('')
  const [typeError,setTypeError] = useState('')
  const [nameError,setNameError] = useState('')
  const [descError,setDescError] = useState('')
  const [errors,setError] = useState('')

  function handledSelectType(e){
    setType(e.value)
  }
  function handledSelectCategory(e){
    setCategory(e.value)
  }
  
  function updateForm(e){
    setItems((prev)=>{
      return{...prev,...e}
    })
  }
  async function handleSubmit(e){
    e.preventDefault()
    const uid = localStorage.getItem('zimosId')

    if(data.name ===''){
      setNameError('Please give your place a nice title')
      setTypeError('')
      setCatError('')
      setDescError('')
    }else if(selectType===''){
      setTypeError('Please Select Type of Your Place')
      setNameError('')
      setCatError('')
      setDescError('')
    }else if(data.desc===''){
      setDescError('Please describe your place')
      setCatError('')
      setTypeError('')
      setNameError('')
    }else if(selectCategory===''){
      setCatError('Please select category for your place')
      setCatError('')
      setDescError('')
      setNameError('')
    }
    else{
      setNameError('')
      setCatError('')
      setDescError('')
      setTypeError('')
      try {
        const res = {
          'name':data.name,'desc':data.desc,
          'type':selectType,'category':selectCategory,
          'beds':items.beds,'toilets':items.tolets,
          'shops':items.shops,'bathrooms':items.bathrooms
        }
        const config = {
          Headers:{"Content-Type":"multipart/form-data"}
        }
        const nPost = await axios.post(`http://localhost:5000/Property/post/newPost/${uid}`,
        res,config)
         if(nPost.data.error){
           console.log(nPost.data.error);
           setError(nPost.data.error)
         }else{
           //window.location.pathname='/ManageHost'     
           setSteps(steps +1)
           console.log(nPost);   
           setPost(nPost.data) 
         }        
      } catch (error) {
        setError(error.message)
      } 
    }
  }
  
  return(
    <Container>
      <Wrapper>
        <Forms onSubmit={handleSubmit}>
          <Title>What kind of place you want host</Title>
          <InputWrapper>
          <Label>Give your place a title</Label>
           <StyledInput placeholder='eg 2 Bedroom Terraced duplex,Shopping Complex' 
           value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} />
           {nameError &&<div className='text-center text-danger'>{nameError}</div>}
          </InputWrapper>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
               <InputWrapper>
                  <Label>Type</Label>
                  <Select styles={styles} defaultvalue={selectType} options={Types}
                   onChange={handledSelectType} placeholder='Select Type' />
                 {typeError &&<div className='text-center text-danger'>{typeError}</div>}
               </InputWrapper>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <InputWrapper>
                <Label>Category</Label>
                <Select styles={styles} defaultvalue={selectCategory}  options={Category}
                 onChange={handledSelectCategory} placeholder='Select Category' />
                {catError &&<div className='text-center text-danger'>{catError}</div>}
              </InputWrapper>
            </Col>
            <Col xs={6} sm={6} md={4}>
              <InputWrapper>
                <Label>Bedrooms</Label>
                <SpaceInput placeholder='1xxxxx' type='number' onChange={(e)=>updateForm({beds:e.target.value})} />
              </InputWrapper>
            </Col>
            <Col xs={6} sm={6} md={4}>
              <InputWrapper>
                <Label>Toilets</Label>
                <SpaceInput placeholder='1xxxxx' type='number' onChange={(e)=>updateForm({tolets:e.target.value})}/>
              </InputWrapper>
            </Col>
            <Col xs={6} sm={6} md={4}>
              <InputWrapper>
                <Label>Bathrooms</Label>
                <SpaceInput placeholder='1xxxxx' type='number' onChange={(e)=>updateForm({bathrooms:e.target.value})} />
              </InputWrapper>
            </Col>
            <Col xs={6} sm={6} md={4}>
              <InputWrapper>
                <Label>Shops</Label>
                <SpaceInput placeholder='1xxxxx' type='number' onChange={(e)=>updateForm({shops:e.target.value})} />
              </InputWrapper>
            </Col>
          </Row>
          <InputWrapper>
            <Label>Describe *</Label>
            <StyledInput rows={6} as={'textarea'} value={data.desc} name='desc' onChange={(e)=>setData({...data,desc:e.target.value})} placeholder='Add Description...' />
            <small style={{fontSize:'13px',textAlign:'center',margin:'0',padding:'0'}}>
              describe your place with atleast 20 words</small>
            {descError &&<div className='text-center text-danger'>{descError}</div>}
          </InputWrapper>
          {errors &&<div className='alert text-alert text-center text-danger'>{errors}</div>}
          <ButtonWrapper style={{justifyContent:'center'}}>
            <Button style={{width:'70%'}} type='submit'>Save and continue</Button>
          </ButtonWrapper>
        </Forms>
      </Wrapper>
    </Container>
  )
}function Services({setSteps,steps,setServices,services,setData,data,post}){
  const [stateError,setStateError]= useState('')
  const [cityError,setCityError] = useState('')
  const [addrError,setAddrError] = useState('')
  const [errors,setError] = useState('')
 
  function updateForm(e){
   setData((prev)=>{
     return{...prev,[e.target.name]:e.target.value}
    })
  }
  function updateSelect(e){
    setServices((prev)=>{
      return{...prev,...e}
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    
    if(data.state === ''){
      setStateError('Please select state of your place')
      setCityError('')
      setAddrError('')
    }else if(data.city === ''){
      setCityError('Please select city of your place')
      setStateError('')
      setAddrError('')
    }else{
      setStateError('')
      setCityError('')
      setAddrError('')
      try {
        const res = {
          'city':data.city,'state':data.state,
          'address':data.address,
          'amenities':services.amenities?.map(sam=>sam.value),
          'safety':services.safety?.map(sam=>sam.value),
          'features':services.features?.map(sam=>sam.value)
        }
        const config = {
          Headers:{"Content-Type":"multipart/form-data"}
        }
        const nPost = await axios.put(`http://localhost:5000/Property/post/${post.result?._id}`,
        res,config)
         if(nPost.data.error){
           console.log(nPost.data.error);
           setError(nPost.data.error)
         }else{
           setSteps(steps +1)
           console.log(nPost);         
         }        
      } catch (error) {
        setError(error.message)
      } 
    }
  }
  //console.log(data);
  return(
    <Container>
      <Wrapper>
        <Forms onSubmit={handleSubmit}>
          <Title>What's provided in your place and Location</Title>
          <InputWrapper>
            <Label>Safety</Label>
            <Select isMulti 
             closeMenuOnSelect={false}
             styles={styles} options={Safety} 
             components={{Option}}             
             onChange={(e)=>updateSelect({safety:e})} 
             placeholder='Select Safety Tips' />
          </InputWrapper>
          <InputWrapper>
            <Label>Amenities</Label>
            <Select  styles={styles}
             options={Amenities}
             closeMenuOnSelect={false}
             components={{Option}}
             isMulti
             onChange={(e)=>updateSelect({amenities:e})}
             placeholder='Select Amenities In Your Place'
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Features</Label>
            <Select styles={styles} 
              options={Features} 
              components={{Option}}
              closeMenuOnSelect={false}
              isMulti
              onChange={(e)=>updateSelect({features:e})}
              placeholder='Select All The Features in your place'
             />
          </InputWrapper>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <InputWrapper>
                <Label>State</Label>
                <StyledInput placeholder='Enter State' 
                onChange={(e)=>setData({...data,state:e.target.value})} />
                {stateError &&<div className='text-center text-danger'>{stateError}</div>}
              </InputWrapper>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <InputWrapper>
                <Label>City</Label>
                <StyledInput placeholder='Enter City'
                onChange={(e)=>setData({...data,city:e.target.value})} />
                {cityError &&<div className='alert text-alert text-center text-danger'>{cityError}</div>}
              </InputWrapper>
            </Col>
          </Row>
          <InputWrapper>
            <Label>Address</Label>
            <Input placeholder='Enter address' name='address' value={data.address}
             onChange={updateForm} />
            {addrError &&<div className='alert text-alert text-center text-danger'>{addrError}</div>}
          </InputWrapper>
          {errors &&<div className='alert text-alert text-center text-danger'>{errors}</div>}
          <ButtonWrapper>
            <button className='btn btn-sm' style={{background:'#550055',color:'#fff'}} onClick={()=>setSteps(steps -1)}> <ImArrowLeft2/> </button>
            <Button type='submit'>Save and Continue</Button>
          </ButtonWrapper>
        </Forms>
      </Wrapper>
    </Container>
  )
}
function Pictures({setSteps,steps,images,setImage,post}){
  const [imgError,setImgError] = useState('')
  const [errors,setError] = useState('')
  function addImages(file){
    setImage(file)
  }
  async function validateForm(e){
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
        const nPost = await axios.put(`http://localhost:5000/Property/post/addImage/${post.result?._id}`,
        formData,config)
         if(nPost.data.error){
           console.log(nPost.data.error);
           setError(nPost.data.error)
         }else{
           setSteps(steps +1)
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
    <Container>
      <Wrapper>
        <Forms onSubmit={validateForm}>
          <Title>Add Some Pictures of your place</Title>
          <InputWrapper style={{display:'flex',cursor:'pointer'}}>
          <Files multiple clickable 
          onChange={addImages}
          maxFileSize={5000000000}
          minFileSize={5000}
          onError={onError}
          className='files-dropzone'>
            Select Your Pictures here
          </Files>
          <MdAdd/>
          </InputWrapper>
          <div className='text-center p'>All the images must be between 5kb to 200kb size</div>
          {imgError &&<div className='alert text-alert text-center text-danger'>{imgError}</div>}
          <ImageList variant='masonry'>
            {images.map((image,index)=>(
              <ImageListItem key={index}>
                <img alt='Pic' src={image.preview.url} srcSet={image} loading={'lazy'} />
              </ImageListItem>
            ))}
          </ImageList>
          {errors &&<div className='alert alert-text text-center text-danger'>{errors}</div>}
          <ButtonWrapper>
            <Button onClick={()=>setSteps(steps -1)}> <ImArrowLeft2/> </Button>
            <Button type='submit'> Save and Continue </Button>
          </ButtonWrapper>
        </Forms>
      </Wrapper>
    </Container>
  )
}
function Prices({setSteps,steps,data,setData,post,setSelectValue,selectValue}){
  const [errors,setError] = useState('')

  function updateChecked(e){
    const check = e.target.checked
    if(check){
    setSelectValue((prev)=>{
      return{...prev,[e.target.name]:e.target.value}
    })
  }else{
    setSelectValue('')
  }
  }
  async function handleSubmit(e){
    e.preventDefault()
      try {
        const res = {
          'price':data.price,'minPrice':data.minPrice,
          'maxPrice':data.maxPrice,
          'duration':selectValue.year,
          'negotiable':selectValue.negotiable
          }
        const config = {
          Headers:{"Content-Type":"multipart/form-data"}
        }
        const nPost = await axios.put(`http://localhost:5000/Property/post/${post.result?._id}`,
        res,config)
         if(nPost.data.error){
           console.log(nPost.data.error);
           setError(nPost.data.error)
         }else{
           //setSteps(steps +1)
           console.log(nPost);
           window.location.pathname='/ManageHost'         
         }        
      } catch (error) {
        setError(error.message)
      } 
  }

  return(
    <Container>
      <Wrapper>
        <Forms onSubmit={handleSubmit}>
          <Title>Lets set the price of your Place (&#8358;)</Title>
          <InputWrapper>
            <Label>Price &#8358;</Label>
            <CurrencyInput
             style={{background:'#fff',width:'100%',border:'1px solid #550055',
             borderRadius:'3px',padding:'10px'}}
             name='price'
             value={data.price}
             onValueChange={(e)=>setData({...data,price:e})}
             intlConfig={{locale:'ng-NG',currency:'NGN'}}
             disableAbbreviations={true}
             placeholder='Enter the price' />
            <small className='text-muted' style={{fontSize:'13px'}}>for a single space</small>
          </InputWrapper>
          <InputWrapper>
            <Label>Min Price &#8358;</Label>
            <CurrencyInput
             style={{background:'#fff',width:'100%',border:'1px solid #550055',
             borderRadius:'3px',padding:'10px'}}
             name='minPrice'
             value={data.minPrice}
             onValueChange={(e)=>setData({...data,minPrice:e})}
             intlConfig={{locale:'ng-NG',currency:'NGN'}}
             disableAbbreviations={true}
             placeholder='minimum price' />
            <small className='text-muted' style={{fontSize:'13px'}}>for a space like estate/shopping complex</small>
          </InputWrapper>
          <InputWrapper>
            <Label>Max Price &#8358;</Label>
            <CurrencyInput
             style={{background:'#fff',width:'100%',
             border:'1px solid #550055',borderRadius:'3px',padding:'10px'}}
             name='maxPrice'
             value={data.maxPrice}
             onValueChange={(e)=>setData({...data,maxPrice:e})}
             intlConfig={{locale:'ng-NG',currency:'NGN'}}
             placeholder='maximum price' />
            <small className='text-muted' style={{fontSize:'13px'}}>for a space like estate/shopping complex</small>
          </InputWrapper>     
          <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
            <Label>
              <Input type='checkbox'name='year' value={'year'} onChange={updateChecked} style={{width:'fit-content',marginRight:'10px'}} />
              price per year
            </Label>
            <Label>
              <Input type='checkbox'name='negotiable' value={'Negotiable'} onChange={updateChecked} style={{width:'fit-content',marginRight:'10px'}} />
              Negotiable
            </Label>
          </div>
          {errors &&<div className='alert alert-text text-center text-danger'>{errors}</div>}
          <ButtonWrapper>
            <Button onClick={()=>setSteps(steps -1)}> <ImArrowLeft2/> </Button>
            <Button type='submit'>Done</Button>
          </ButtonWrapper>
        </Forms>
      </Wrapper>
    </Container>
  )
} 
export function Preview({setSteps,steps,data,images,items,services
  ,selectValue,city,state,selectCategory,selectType}){
  const {errors,setError} = useAuth()
  const priceConvater = new Intl.NumberFormat('ng-NG')
  
  async function handleSubmit(e){
   e.preventDefault()
   const uid = localStorage.getItem('zimosId')
   try {
     const formData = new FormData()
     if(images !== null){
       images.map((image)=>formData.append('files',image))
     }else{
       formData.append('files',images)
     }
     if(services.amenities !== null){
       services.amenities?.map(sam=>formData.append('amenities',sam.value))
     }
     if(services.safety !== null){
       services.safety?.map(sam=>formData.append('safety',sam.value))
     }
     if(services.features !== null){
       services.features?.map(sam=>formData.append('features',sam.value))
     }
     formData.append('name',data.name)
     formData.append('desc',data.desc)
     formData.append('category',selectCategory)
     formData.append('type',selectType)
     formData.append('state',data.state)
     formData.append('city',data.city)
     formData.append('address',data.address)
     formData.append('price',data.price)
     formData.append('minPrice',data.minPrice)
     formData.append('maxPrice',data.maxPrice)
     formData.append('duration',selectValue.year)
     formData.append('negotiable',selectValue.negotiable)
     formData.append('beds',items.beds)
     formData.append('toilets',items.tolets)
     formData.append('shops',items.shops)
     formData.append('bathrooms',items.bathrooms)
     const config = {
       Headers:{"Content-Type":"multipart/form-data"}
     }
     const nPost = await axios.post(`http://localhost:5000/Property/post/newPost/${uid}`,formData,config)
      if(nPost.data.error){
        console.log(nPost.data.error);
        setError(nPost.data.error)
      }else{
        window.location.pathname='/ManageHost'         
      }        
   } catch (error) {
     setError(error.message)
   } 
 }
  return(
    <Container>
      <Wrapper>
        <Forms onSubmit={handleSubmit}>
          <Title>Check out and upload your post</Title>
          {data.name && <h3 className='p-2'>&nbsp;{data.name}&nbsp;{selectCategory}
          &nbsp;in&nbsp;{data.address}&nbsp;{data.city},&nbsp;{data.state}
          </h3>}
          {items.beds && <h5 className='p-2'>{items.beds}&nbsp;Bedrooms,&nbsp;&nbsp;
          {items.bathrooms && items.bathrooms+' Bathrooms,'}&nbsp;&nbsp;{items.tolets && items.tolets+' Toilets'}
          </h5>}
          {items.shops && <h3 className='p-2'>Shops:&nbsp;{items.shops}
          </h3>}
          {data.price && <h3 className='p-2'>Price:&nbsp;&#8358;{priceConvater.format(data.price)}
          {selectValue.year &&'/'+ selectValue.year}
          </h3>}
          {data.minPrice && <h4 className='p-2'>Min Price:&nbsp;&#8358;{priceConvater.format(data.minPrice)}
           {selectValue.year && '/'+selectValue.year}</h4>}
          {data.maxPrice && <h4 className='p-2'>Max Price:&nbsp;&#8358;{priceConvater.format(data.maxPrice)}
          {selectValue.year && '/'+selectValue.year}</h4>}
          {selectValue.negotiable && <h3 className='p-2'>Negotaibles: &nbsp;{selectValue.negotiable}</h3>}
          {errors && <div className='text-danger text-center h5'>{errors}</div>}
          <ButtonWrapper>
            <Button onClick={()=>{
              setSteps(steps -1)
              setError('')
            }}> <ImArrowLeft2/> </Button>
            <Button type='submit'>Post Now </Button>
          </ButtonWrapper>
         </Forms>
      </Wrapper>
    </Container>
  )
}

 