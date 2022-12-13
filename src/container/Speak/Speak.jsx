import React, {useState } from 'react'

import './Speak.scss'
import { images } from '../../constant'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const events = [
  { imgUrl: images.speak1, title:'Learning a skill in Web3.', location: 'Lagos, Nigeria.', time:'April 3rd, 2022'},
  { imgUrl: images.speak2, title:'Learning a skill in Web3.', location: 'Lagos, Nigeria.', time:'April 3rd, 2022'},
  { imgUrl: images.speak3, title:'Learning a skill in Web3.', location: 'Lagos, Nigeria.', time:'April 3rd, 2022'},
  { imgUrl: images.speak1, title:'Learning a skill in Web3.', location: 'Lagos, Nigeria.', time:'April 3rd, 2022'},
  { imgUrl: images.speak2, title:'Learning a skill in Web3.', location: 'Lagos, Nigeria.', time:'April 3rd, 2022'},
  { imgUrl: images.speak3, title:'Learning a skill in Web3.', location: 'Lagos, Nigeria.', time:'April 3rd, 2022'}
]

const Speak = () => {

  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className='speak'>
      <div className='app__speaks'>
        <h3>Speaking Engaements</h3>
        <p>The art of speaking is an innate attribute of mine that I have developed over the years. 
          I went from being shy and introverted to engaging an audience with thousands of listeners across the globe. 
          I have been privileged to host Twitter spaces, Youtube live streams educating people on how to grow their career 
          in tech and also tap into the opportunities in Web 3. 
        </p>

        <div className='app__profile app__fle'>
          <div className='controls'>
            <button onClick={sliderRef?.slickPrev}>
              <FaChevronLeft  />
            </button>
            <button onClick={sliderRef?.slickNext}>
              <FaChevronRight  />
            </button>
          </div>        

          <div className='pp'>

            <Slider ref={setSliderRef} {...sliderSettings}>
              {events.map((speak, index) => (
                <div className='app_profile-items'> 
                  <div className='space'>
                    <div>
                      <img src={speak.imgUrl} alt={speak.title} />
                    </div>
                    
                    <div className='speak_col'>
                      <h4 className='bold-text'>{speak.title}</h4>
                      <div className='location'>
                        <span>{speak.location} </span>
                        <div className='dot'></div>
                        <span>{speak.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speak