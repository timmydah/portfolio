import React from 'react'

import './MyBook2Header.scss'

import { images } from '../../constant'

const MyBook2Header = () => {
  return (
    <div className='app__book2'>
        <div className='book2__col'>
            <div className='book2__col1'>
                <h3>Getting started in web3</h3>
                <p>
                    I currently have 2 well-detailed ebooks on Web 3
                    authored by me, the first one titled “Getting 
                    Started in Web 3” is free and it gives you an
                    insight into what the concept is all about.
                </p>
                <br/>
                
                <div className='book2_download'>
                    <button>
                        Download Book
                    </button>
                    
                    <button>
                        See Reviews
                    </button>
                    {/* <div className='svg'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.0127 8.66682C2.0127 2.04545 6.70159 -0.666022 12.4391 2.64467L17.0681 5.31119L21.6971 7.97772C27.4346 11.2884 27.4346 16.7113 21.6971 20.022L17.0681 22.6886L12.4391 25.3551C6.70159 28.6658 2.0127 25.9543 2.0127 19.3329V13.9999V8.66682Z" stroke="white" stroke-width="2.24707" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> */}

                </div>
            </div>

            <div className='book2__col2'>
                <div className='articles__col3'>
                    <img src={images.Book1} alt='work' />
                    
                </div>   
            </div>
        </div>

    </div>
  )
}

export default MyBook2Header