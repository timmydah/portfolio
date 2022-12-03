import React from 'react'

import './ArticleHeader.scss'

import { images } from '../../constant'

const ArticleHeader = () => {
  return (
    <div className='app__articles'>
        <div className='articles'>
            <div className='articles__col1'>
                <h2>My Articles</h2>
                <p>
                    In the world where we live today, access to valuable information is quite important. 
                    I absolutely love writing as much as I love reading and learning
                    about new concepts, I have published so many great articles on my medium account.  
                </p>
                <br/>
                <p>
                    I have done all the research so you don’t have to stress yourself, 
                    you’re just a click away from getting free access to resources on Web 3, 
                    NFTs, blockchain technology, frontend development and career growth
                </p>
                <br/>
            </div>

            <div className='articles__col2'>
                <div className='articles__col3'>
                    <img src={images.article3} alt='article' />
                    <img className='shapes' src={images.background2} alt='background' />
                </div>   
            </div>
        </div>

    </div>
  )
}

export default ArticleHeader