import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../Hooks/useHooks'
import { Container, Wrapper } from './DetailsStyle'
import { ImageUrl } from '../../Api/ApiCalls'
import { ImageList, ImageListItem } from '@mui/material'

export default function AllImages() {
    const [postImg,setPostImg] = useState([])
    const [post,setPost] = useState([])
    const {getPostById} = useAuth()
    const id = useParams().id
    

    useEffect(()=>{
        return(async()=>{
            const postImages = await getPostById(id)
             setPost(postImages.data?.result)
        })
    })
    useEffect(()=>{
        return(()=>{
            setPostImg(post.photos)
        })
    })
  return (
    <Container style={{height:'100vh'}}>
        <Wrapper style={{background:'transparent'}}>
            <ImageList variant={'masonry'}>
            {postImg?.map((img,index)=>(
                <ImageListItem key={index}>
                <img alt={img.picture} src={`${ImageUrl}/${post._id}/${img.picture}`} loading={'lazy'} style={{borderRadius:'1em',objectFit:'cover'}} />
                </ImageListItem>
            ))}
            </ImageList>
        </Wrapper>
    </Container>
  )
}
