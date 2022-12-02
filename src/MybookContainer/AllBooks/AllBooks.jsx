import React from 'react'
import './allBooks.scss'

import { images } from '../../constant'

const AllBooks = () => {
  return (
    <div className='allBooks__app'>
        <img src={images.Book1} alt='book1'/>
        <img src={images.Book2} alt='book2'/>
    </div>
  )
}

export default AllBooks