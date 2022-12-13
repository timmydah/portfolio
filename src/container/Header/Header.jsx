import React from 'react'
import './Header.scss'

import {motion} from 'framer-motion'

import {images} from '../../constant'

import {FaLongArrowAltRight} from 'react-icons/fa'



const Header = () => {
  return (
    <div className='head'>
      
      <motion.div
        whileInView={{ x: [-90, 0], opacity: [0, 100]}}
        transition = {{ duration: 0.5 }}
        id='home' className='app__header'
      >
        <div  className="app__header-info">
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <div>
                <h3>Hi, I am Grace <br/> Omole</h3>
                <div className='form'>
                  <p> A Blockchain App Developer,<br/> Technical Writer  and Public <br/> Speaker</p>
                  
                  <form>
                    <input 
                      placeholder='Get in touch with me' 
                    
                    />
                    <button><FaLongArrowAltRight/></button>
                  </form>  
                </div>
              </div>
            </div>
          </div>

        </div>

        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 100]}}
          transition = {{ duration: 0.5 }}
          className="app__header-img"
        >
          <img className='img1' src={images.Image} alt='profile-bg'/>
          <motion.img
            whileInView={{ scale: [0, 1]}}
            transition = {{ duration: 1, ease: 'easeInOut'}}
            src={images.background}
            alt='profile-bg2'
            className='overlay-shape'
          >

          </motion.img>
        </motion.div>
        
        <motion.div
          // whileInView={{ x: [-100, 0], opacity: [0, 100]}}
          // transition = {{ duration: 0.5 }}
          className="app__header-info2"
        >
          <div className='app__header-badge2'>
            <div className='form2'>
              <p> A Blockchain App Developer,<br></br> Technical Writer and Public <br></br> Speaker</p>

              <form>
                <input 
                  placeholder='Get in touch with me' 
                
                />
                <button><FaLongArrowAltRight/></button>
              </form>
            </div>
          </div>
          

        </motion.div>
        

      </motion.div>

    </div>
  )
}

export default Header