import React from 'react'
import './allBooks.scss'
import {Link} from 'react-router-dom'

import { images } from '../../constant'

const AllBooks = () => {
  return (
    <div className='allBooks__app'>
      <Link to='/Mybook2'>
        <div className='link'>
          <img src={images.Book1} alt='book1'/>
        </div> 
      </Link>
        
        <img src={images.Book2} alt='book2'/>
    </div>
  )
}

export default AllBooks