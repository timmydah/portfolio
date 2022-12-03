import React from 'react'
import './Header.scss'

// import {motion} from 'framer-motion'

import {images} from '../../constant'

import {FaLongArrowAltRight} from 'react-icons/fa'



const Header = () => {
  return (
    <div className='header__app'>
      <div className='header'>
        <div className='intro'>
          <h3>Hi, I am Grace <br></br>Omole</h3>
        </div>

        <div className='imagee'>
          <img src={images.Image} alt="img"/>
          <img className='overlay' src={images.background} alt="background" />
        </div>

        <div className='form'>
          <p> A Blockchain App Developer,<br/> Technical Writer and Public <br></br>Speaker</p>

          <form>
            <input 
              placeholder='Get in touch with me' 
            
            />
            <button><FaLongArrowAltRight/></button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Header

    {/* <div>
      <h3>Hi, I am Grace Omole</h3>
      <div className='form'>
      <p> A Blockchain App Developer, Technical Writer and Public Speaker</p>

      <form>
        <input 
          placeholder='Get in touch with me' 
        
        />
        <button><FaLongArrowAltRight/></button>
      </form>
    </div> */}