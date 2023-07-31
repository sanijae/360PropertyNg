import React from 'react'

function Paginate({postPerPage,totalPost,page}) {
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalPost/postPerPage); i++){
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number)=>(
          <li key={number} className='page-item'>
            <a href={`/post?page=${page}`} className='page-link' onClick={()=>page+1}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Paginate
