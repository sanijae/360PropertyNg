import { CircularProgress, Container, ImageList, ImageListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getPost, ImageUrl } from '../../API/Axios'
import styled from 'styled-components'


export default function Images() {
    const [images,setImages] = useState([])
    const [isLoading,setLoading] = useState(true)
    const [errors,setError] = useState('')
    const postId = useParams().id

    useEffect(()=>{
        return(async()=>{
          try {
            const {data} = await getPost(postId)
            setImages(data.result)
            setLoading(false)
          } catch (error) {
              setError(error.message);
          }
        })
    },[postId])
    console.log(images);


  return (
    isLoading ? 
        <Containers>
            <h1>Fetching Data</h1>
            <CircularProgress size={'10em'} />
            {errors && <Containers style={{color:'red',fontSize:'20px',fontWeight:'bold'}}> {errors} </Containers>}
        </Containers>
    :
        <Container>
            <ImageList variant='masonry'>
                {images.photos?.map((img,i)=>(
                    <ImageListItem key={i}>
                        <img alt='Images' src={`${ImageUrl}/${images?._id}/${img.picture}`} srcSet={img} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
  )
}

const Containers = styled.div`
width: 100%;
height: 100vh;
background: transparent;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`