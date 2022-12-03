import React from 'react'
import './header1.scss'

import {AiOutlineArrowDown} from 'react-icons/ai'

const Header1 = () => {
  return (
    <div className='book_header'>
        <div className='app_book'>
            <h3>My Books</h3>
            <p>
                I currently have 2 well-detailed ebooks on Web 3 authored by me, 
                the first one titled “Getting 
                Started in Web 3” is free and it gives you an insight into what the concept is all about. 
            </p>
            <br/>
            <p>
                The second book is currently sold for 10,000 naira (please insert the link to selar) and it is titled “How To Position Yourself To Earn In Web 3”, in this book you will learn how 
                I have earned 10 times more on this new technology than I have earned in the last 4 years. 
            </p>

            <div className='arrow'>
              <AiOutlineArrowDown/>
            </div>
            
        </div>
    </div>
  )
}

export default Header1