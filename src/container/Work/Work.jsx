import React from 'react'
import './Work.scss'
import {images} from '../../constant'
import {FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const workUrl = [images.Riby01, images.Riby02, images.Riby03, images.Riby02, images.Riby01, images.Riby02, images.Riby03,images.Riby01]
const workUrl1 = [images.Riby1, images.Riby2, images.Riby3, images.Riby2, images.Riby1, images.Riby2, images.Riby3,images.Riby1]

const Work = ({changeTheme, currentTheme}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className='app__work'>
      <div className='Work__Content'>
        <h2>Works</h2>
        <p>Some of the companies I have helped</p>

        <div className='work__img'>
          {currentTheme === 'dark' ? (
            <div>
              <Slider {...settings}>
                {workUrl.map((workImg) => (
                  <img className='img' src={workImg} alt='partners'/>
                ))}
              </Slider>
            </div>
          ) : (
            <div>
              <Slider {...settings}>
                {workUrl1.map((workImg1) => ( 
                    <img src={workImg1} alt='partners'/>  
                ))}
              </Slider>
            </div>
          )}
        </div>
        
        <Link to='/works'>
          <div className='work-profile'>
            <p>See my Work</p>
            <FiArrowRight />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Work