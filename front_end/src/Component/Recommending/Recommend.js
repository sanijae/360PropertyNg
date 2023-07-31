import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getPostByCity, ImageUrl } from '../../Api/ApiCalls'
import { Container,CardContent,CardItem,Image,Text, } from './RecommendStyle'

export default function Recommend({post}) {
    const [recommend,setRecommend] = useState([])
        
    useEffect(()=>{
        return(async()=>{
            const posts = await getPostByCity(post.result?.city)
            setRecommend(posts.data?.result)
        })
    })
    const filterPost = recommend.filter((postId)=> postId._id !== post.result._id)
    //console.log(post.photos);
  return (
    <Container>
        <Row> 
            {filterPost.map((post,index)=>(
                <Col xs={12} sm={12} md={6} key={index}>
                   <Card 
                   id={post._id}
                   photo={`${ImageUrl}/${post._id}/${post.photos[0]?.picture}`}
                   name={post.name}
                   type={post.type}
                   duration={post.duration}
                   state={post.state}
                   city={post.city}
                   category={post.category}
                   space={post.space}
                   price={post.price}
                   minPrice={post.minPrice}
                   maxPrice={post.maxPrice}
                   />
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export function Card({name,id,type,category,photo,city,state,space,price,maxPrice,minPrice}){
    const navigate = useNavigate()
    const priceConverter = new Intl.NumberFormat('ng-NG')
    return(
        <CardItem onClick={()=>navigate(`/Details/${id}`)}>
                <Image alt='images' src={photo} />
                <CardContent>            
                    <div>                  
                        {name && category && <>
                        <Text>{name}&nbsp;for&nbsp;{category}</Text>
                        </>}
                    </div>
                    <div>
                        {price && <>
                        <Text>&#8358;{priceConverter.format(price)}</Text>
                        </>}
                        {minPrice && <Text>&#8358;{priceConverter.format(minPrice)}</Text>}
                        {maxPrice && <Text>&#8358;{priceConverter.format(maxPrice)}</Text>}
                    </div>
                </CardContent>
        </CardItem>
    )
} 