import React from 'react'
import './allBooks.scss'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'


import { images } from '../../constant'

const AllBooks = () => {
  return (
    <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.0 }}
        className="allBooks_app"
      >
        <Link to='/Mybook2'>
          <div className='link'>
            <img src={images.Book1} alt='book1'/>
          </div> 
        </Link>

        <Link to='/Mybook'>
          <div className='link'>
            <img src={images.Book2} alt='book2'/>
          </div> 
        </Link>
          
      </motion.div>
  )
}

export default AllBooks