import React from 'react'
import './Connect.scss'
import { images } from '../../constant'
import { motion } from 'framer-motion'

const sm = [
  {imageUrl: images.instagram, title:'Instagram'},
  {imageUrl: images.link, title:'Linkln'},
  {imageUrl: images.youtube, title:'Youtube'},
  {imageUrl: images.facebook, title:'Facebook'},
  {imageUrl: images.medium, title:'Medium'},
  {imageUrl: images.twitter, title:'Twitter'}
]

const Connect = () => {

  return (
    <div className='connect'>
      <div className='app__connect'>
        <p>
          If you’ve been searching for the right person to guide you through everything relating 
          to frontend development and blockchain technology, great news,<span>you are in the right
             place</span>. 
        </p>

        <h2>
          Let’s Stay Connected. 
        </h2>

        <div className='connect__profile'>
          {sm.map((media, index) => (
            <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 0.5}}
            transition={{ duration: 0.5, type: 'tween'}}
            className='app__profile-items'
            key={media.title + index}
          >
            <div className='divs'>
              <img src={media.imageUrl} alt={media.title} />
            </div>
            
            <p className='media_name'>{media.title}</p>
      
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Connect