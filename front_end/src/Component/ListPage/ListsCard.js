import React from 'react' 
import { useNavigate } from 'react-router-dom'
import { Body,ItemCard,Image,CardContent, CardItems, CardText } from './ListStyle'

export default function ListsCard({name,id,type,category,city,state,space,price,photo,maxPrice,minPrice}) {
  const navigate = useNavigate()
  const priceConverter = new Intl.NumberFormat('ng-NG')
  return (
    <ItemCard onClick={()=>navigate(`/Details/${id}`)}>
        <Body> 
            {name && <>
               <CardText style={{paddingLeft:'6px'}}>{name}</CardText>
            </>}
            <Image alt='images' src={photo} />
            <CardContent>            
              <CardItems>                  
                  {type && category && <>
                  <CardText>{type}&nbsp;for&nbsp;{category}</CardText>
                  </>}                  
                  {city && <CardText>At&nbsp;{city}&nbsp;</CardText>}
              </CardItems>
              <CardItems>
                  {price && <>
                  <CardText>Price: &nbsp;&#8358;{priceConverter.format(price)}</CardText>
                  </>}
                  {minPrice && <CardText>Min Price: &nbsp;&#8358;{priceConverter.format(minPrice)}</CardText>}
                  {maxPrice && <CardText>Max Price: &nbsp;&#8358;{priceConverter.format(maxPrice)}</CardText>}
              </CardItems>              
            </CardContent>
        </Body>
    </ItemCard>
  )
}
