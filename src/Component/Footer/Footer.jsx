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
              <a href='https://www.linkedin.com/in/grace-olayinka-a9a37a188' target="_blank" rel="noreferrer">
                <FaLinkedinIn className='sm'/>
              </a>
            </div>
            <div className='sm-border'>
              <a href='https://twitter.com/graceomole3?s=21&t=kgJmisAScjnGXj5lcAm6Qw' target="_blank" rel="noreferrer">
                <FaTwitter className='sm'/>
              </a>
            </div>
            <div className='sm-border'>
              <a href='https://iam-grace.medium.com/' target="_blank" rel="noreferrer">
                <FaMedium className='sm'/>
              </a>
            </div>
            <div className='sm-border'>
              <a href='https://instagram.com/olayinka2241?igshid=YmMyMTA2M2Y=' target="_blank" rel="noreferrer">
                <FaInstagram className='sm'/>
              </a>
            </div>
            <div className='sm-border'>
              <a href='https://m.youtube.com/channel/UCenVuRqWJJTjAPMo7qH-1yQ?fbclid=PAAabLXZHMTyrcVUmkdIRHebkxJc9cQpxlK-jxRpJAunMNCN-6HFvih8A4PHU' target="_blank" rel="noreferrer">
                <FaYoutube className='sm'/>
              </a>
            </div>
            <div className='sm-border'>
              <a href='fff' target="_blank" rel="noreferrer">
                <FaFacebookF className='sm'/>
              </a>
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