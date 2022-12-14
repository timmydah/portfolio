import React from 'react'

import './MyBook2Header.scss'

import { images } from '../../constant'
import {motion} from 'framer-motion'

const MyBook2Header = () => {
  return (
    <div className='app__book2'>
        {/* <div className='book2__col'> */}
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="book2__col"
        >
            <div className='book2__col1'>
                <h3>Getting started in web3</h3>
                <p>
                    I currently have 2 well-detailed ebooks on Web 3
                    authored by me, the first one titled “Getting 
                    Started in Web 3” is free and it gives you an
                    insight into what the concept is all about.
                </p>
                <br/>

                <div className='articles__col5'>
                    <img src={images.Book1} alt='work' />    
                </div>

                <div className='book2_download'>
                    <button>
                        Download Book
                    </button>
                    
                    <button>
                        See Reviews
                    </button>
                </div>
            </div>

            <div className='book2__col2'>
                <div className='articles__col3'>
                    <img src={images.Book1} alt='work' />    
                </div>   
            </div>
        </motion.div>

    </div>
  )
}

export default MyBook2Header