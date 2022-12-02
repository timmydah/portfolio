import React from 'react'
import './Footer.scss'
import {FaInstagram, FaLinkedinIn, FaTwitter,FaFacebookF, FaMedium, FaYoutube } from 'react-icons/fa'
import {FiArrowRight} from 'react-icons/fi'
import { images } from '../../constant'


const Footer = () => {

  return (
    <div className='footer'>
      <div className='app__footer'>
        <div className='footer_connect'>
          <p>Connect with me</p>
          <div>
            <div className='sm-border'>
              <FaLinkedinIn className='sm'/>
            </div>
            <div className='sm-border'>
              <FaTwitter className='sm'/>
            </div>
            <div className='sm-border'>
              <FaMedium className='sm'/>
            </div>
            <div className='sm-border'>
              <FaInstagram className='sm'/>
            </div>
            <div className='sm-border'>
              <FaYoutube className='sm'/>
            </div>
            <div className='sm-border'>
              <FaFacebookF className='sm'/>
            </div>
            
          </div>
        </div>

        <div className='mentee__form'>
          <p>Become a mentee</p>

          <form>
            <input 
              type='text'
              placeholder='Become a mentee form'

            />
            <button>
              <FiArrowRight />
            </button>
          </form>
        </div>

        <div className='app__navbar-logo'>
          <img className = 'logo' src={images.sig} alt='logo' />
          <img className = 'sig' src={images.logo} alt='signature' />
        </div>
      </div>
    </div>
  )
}

export default Footer