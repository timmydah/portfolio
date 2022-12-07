import React from 'react'
import './Book.scss'
import {Link} from 'react-router-dom'

import {images} from '../../constant';
import {FaLongArrowAltRight} from 'react-icons/fa'

const Book = () => {
  return (
    <div className='app__book'>
      <div className='book__content'>
        <h2>Books</h2>

        <p>I currently have 2 well-detailed ebooks on Web 3 authored by me,the first one titled “Getting Started in Web 3” is free and it gives you
            an insight into what the concept is all about. 
        </p>
        <br></br>
        <p>
          The second book is currently sold for 
          10,000 naira here and it is titled “How To Position Yourself To Earn In Web 3”, 
          in this book you will learn how I have earned 10 times more on this new technology than
          I have earned in the last 4 years.
        </p>

        <div className='book__img'>
          <div className='subbook__img'>
            <img src={images.Book1} alt='book'/>
            <img src={images.Book2} alt='book'/>
          </div>
          <div className='book__icon'>
            <p>See My Work</p>

            <Link to='/books'>
              <div className='link'>
                <FaLongArrowAltRight/>
              </div> 
            </Link>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Book