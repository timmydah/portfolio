import React from 'react'
import './Connect.scss'
import { images } from '../../constant'
import { motion } from 'framer-motion'

const sm = [
  {
    imageUrl: images.instagram, 
    title:'Instagram',
    // svg: "width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0583 18.8163H30.0861V23.8113C31.5306 20.9385 35.235 18.3573 40.7997 18.3573C51.4674 18.3573 54 24.0759 54 34.5681V54H43.2V36.9576C43.2 30.9825 41.7555 27.6129 38.0781 27.6129C32.9778 27.6129 30.8583 31.2444 30.8583 36.9549V54H20.0583V18.8163ZM1.539 53.541H12.339V18.3573H1.539V53.541ZM13.8861 6.885C13.8865 7.79024 13.707 8.68653 13.3579 9.52179C13.0089 10.357 12.4974 11.1146 11.853 11.7504C10.5473 13.0481 8.77989 13.7745 6.939 13.77C5.10135 13.7688 3.33804 13.0442 2.0304 11.7531C1.38837 11.1151 0.878542 10.3567 0.530128 9.52137C0.181714 8.68601 0.00156366 7.79011 0 6.885C0 5.0571 0.729 3.3075 2.0331 2.0169C3.33959 0.724028 5.10365 -0.000807869 6.9417 6.75714e-07C8.7831 6.75714e-07 10.5489 0.726301 11.853 2.0169C13.1544 3.3075 13.8861 5.0571 13.8861 6.885Z" fill="#0A66C2"
  },
  {imageUrl: images.link, title:'Linkwdln'},
  {imageUrl: images.youtube, title:'Youtube'},
  {imageUrl: images.facebook, title:'Facebook'},
  {imageUrl: images.medium, title:'Medium'},
  {imageUrl: images.twitter, title:'Twitter'}
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
            whileHover={{ scale:1.05}}
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
      </motion.div>
    </div>
  )
}

export default Connect