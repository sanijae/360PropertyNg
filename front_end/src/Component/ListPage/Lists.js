import { CircularProgress } from '@mui/material'
import React from 'react'
import { ImageUrl } from '../../Api/ApiCalls'
import ListsCard from './ListsCard'
import { Container, Grid, Items, Loading } from './ListStyle'

export default function Lists({post}) {
  

  return (
    <Container>
        {!post?.length ? <Loading>
            <CircularProgress size={'3em'} />
            <h1>Fetching data</h1>
        </Loading>
        : <Grid>
            {post?.map((res,index)=>(
                <>
                <Items key={index}>
                <ListsCard id={res._id} name={res.name}
                 type={res.type}
                 photo={`${ImageUrl}/${res._id}/${res.photos[0]?.picture}`}
                 duration={res.duration}
                 state={res.state}
                 city={res.city}
                 category={res.category}
                 price={res.price}
                 minPrice={res.minPrice}
                 maxPrice={res.maxPrice}
                 /></Items>
                 </>
            ))}            
        </Grid>    
        }    
    </Container>
  )
}
