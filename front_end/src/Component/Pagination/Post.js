import React from 'react'

function Post({loading,posts}) {
  
    if(loading){
        return(
            <h1>Loading data.....</h1>
        )
    }
    return (
    <ul className='list-group mb-2'>
      {posts.map((post,i)=>(
          <li key={post.id}className='list-group-item' >{i}&nbsp;&nbsp;{post.title}</li>
      ))}
    </ul>    
  )
}

export default Post
