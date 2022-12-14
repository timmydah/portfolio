import React from 'react'
import './Connect.scss'
import { images } from '../../constant'
import { motion } from 'framer-motion'

const sm = [
  {
    imageUrl: images.instagram, title:'Instagram', url:'https://instagram.com/olayinka2241?igshid=YmMyMTA2M2Y='
  },
  {imageUrl: images.link, title:'Linkedln', url:"https://www.linkedin.com/in/grace-olayinka-a9a37a188"},
  {imageUrl: images.youtube, title:'Youtube', url:"https://m.youtube.com/channel/UCenVuRqWJJTjAPMo7qH-1yQ?fbclid=PAAabLXZHMTyrcVUmkdIRHebkxJc9cQpxlK-jxRpJAunMNCN-6HFvih8A4PHU"},
  {imageUrl: images.facebook, title:'Facebook', url:""},
  {imageUrl: images.medium, title:'Medium', url:"https://iam-grace.medium.com/"},
  {imageUrl: images.twitter, title:'Twitter', url:"https://twitter.com/graceomole3?s=21&t=kgJmisAScjnGXj5lcAm6Qw"}
]

const Connect = () => {

  return (
    <div className='connect'>
      {/* <div className='app__connect'> */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 100]}}
        transition = {{ duration: 0.5 }}
        className="app__connect"
      >
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
            // whileHover={{ scale:1.05}}
            // transition={{ duration: 0.5, type: 'tween'}}
            className='app__profile-items'
            key={media.title + index}
          >
            <a href={media.url} target="_blank" rel="noreferrer" >
              <div className='divs'>
              
               <img src={media.imageUrl} alt={media.title} />
              
              </div>
              <p className='media_name'>{media.title}</p>
            </a>
            
            
      
          </motion.div>
          ))}


        </div>
      </motion.div>
    </div>
  )
}

export default Connect