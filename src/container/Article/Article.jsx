import React from 'react'
import './Article.scss'
import { Link } from 'react-router-dom';

import {FaLongArrowAltRight} from 'react-icons/fa'

import {images} from '../../constant';

const Article = ({currentTheme, changeTheme}) => {
  return (
    <div className='article'>
      <div className='app__article'>
        <div className='article__content'>
          {currentTheme === 'dark' ? (
             <img src={images.article} alt='article' />
          ): (
            <img src={images.article2} alt='article' />
          )}
        </div>

        <div className='article__info'>
          <h2>Article</h2>

          <p>
            In the world where we live today, access to valuable information is quite important. 
            I absolutely love 
            writing as much as I love reading and learning about new concepts, I have published so many 
            great articles on my medium account.  
            </p>
            <br></br>
            <p>
              I have done all the research so you dont have to stress yourself
              , you re just a click away from getting free access to resources
              on Web 3, NFTs, blockchain technology, frontend development and career growth
            </p>
          <br></br>
          
          <div className='article__icon'>
            <p>Read my articles</p>
            <Link to='/articles'>
              <div className='link'>
                <FaLongArrowAltRight /> 
              </div>
                        
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Article