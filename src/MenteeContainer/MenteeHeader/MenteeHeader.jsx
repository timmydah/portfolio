import React from 'react'
import './MenteeHeader.scss'

import {AiOutlineArrowDown} from 'react-icons/ai'

const MenteeHeader = () => {
  return (
    <div className='mentee_header'>
        <div className='app_mentee'>
            <h3>Become a mentee</h3>
            <p>
                I understand how overwhelming it is 
                trying to grow your career in tech and not only earn money but also get recognition
                for your work. Whether you are a newbie or you have a reasonable number of experience, 
                I am confident that my 3 months mentorship programme on career growth is the one for you. 
            </p>
            <br/>
            <p>
                All you have to do is fill the form below and let’s get started! 
            </p>

            <div className='arrow'>
              <AiOutlineArrowDown/>
            </div>
            
        </div>
    </div>
  )
}

export default MenteeHeader