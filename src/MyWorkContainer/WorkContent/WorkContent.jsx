import React from 'react'

import './WorkContent.scss'
import { images } from '../../constant'
import {motion} from 'framer-motion'

const allWork = [
    { 
        imgUrl: images.work1, 
        title: 'FountainHead NFTs',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
    },
    { 
        imgUrl: images.work1, 
        title: 'FountainHead NFTs',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
    },
    { 
        imgUrl: images.work1, 
        title: 'FountainHead NFTs',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
    },
    { 
        imgUrl: images.work1, 
        title: 'FountainHead NFTs',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
    }
  ]
const WorkContent = () => {
    
    return (
        <div className='workContent__app'>
            <div className='workContent'>
                <div className='workContent_col1'>
                    {allWork.map((work) => (
                        // <div className='workContent_col2'>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.9 }}
                            className="workContent_col2"
                        >
                            <div className='workContent_col3'>
                                <h3>{work.title}</h3>
                                <p>{work.about}</p>
                                <hr></hr>
                                <p><span>Client:</span> Inioluwa</p>
                                <br></br>
                                <p><span>Role:</span> Blockchain App Developer</p>

                                <div className='workContent_col5'>
                                    <p>See Project</p>
                                    <div className='svg'>
                                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.00195 2.00463L11.9996 12.0023L2.00195 22" stroke="#ACD5E6" stroke-width="2.4706" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='workContent_img'>
                                <img src={images.work1} alt='work' />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default WorkContent