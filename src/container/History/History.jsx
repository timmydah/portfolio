import React from 'react'
import './History.scss'
import {Link} from 'react-router-dom'

import { images } from '../../constant'

const History = ({changeTheme, currentTheme}) => {
  return (
    <div>
      {currentTheme === 'dark' ? (
        <div className='app__history history1'>
          <div className='history__content content1'>
            <div className='img__history'>
              <div className='sub__img'>
                <img src={images.dev} alt='dev'/>
                <p>Development & Training</p>
                
                <img src={images.writing} alt='dev'/>
                <p>Writing</p>
              </div> 
            </div>
            
            <div className='speaks'>
              <img src={images.speaking} alt='dev' />
              <p>Speaking</p>
            </div>

            
            <div className='app__history_info1'> 
              <h2>Brief History</h2>
              <p>
              Grace Omole is a B.Tech graduate of Mathematics at the Federal 
              University of Technology Akure, Nigeria. 
              </p>
              
              <br></br>

              <p>
              She started her career as a frontend developer and has helped various companies in 
              providing multifaceted technical solutions across a wide range of software platforms 
              even in the web3 space for over 5 years.  She has mentored over ten people with their
              career growth in the tech space. Due to her passion for impacting knowledge, She has
              trained over 1500 people in partnership with SeedDev, Matrix Labs, Tech4Teens and Google
              CS First in skills ranging from frontend development, scratch programming, and python.
              </p>

              <br></br>

              <p>
              Grace Omole thrives to impact knowledge in more people globally which made her start 
              writing on frontend and blockchain majorly on Medium. She's the author of two ebooks 
              She's also an award winner of the Most Valuable Person (MVP) at Neptunn in the year 2018. 
              She is currently the Tech Lead at NIYO GROUP, empowering black women in tech globally.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='app__history history2'>
          <div className='history__content2'>
            <div className='content__col'>
              <div className='app__history_info2'>
                <h2>Brief History</h2>
                
                <p>
                  Started off my career in tech due to my love for mathematics, 
                  I was super thrilled when I realised that I could use Java to solve mathematical equations 
                  but after a while, it started becoming too deep and instead of hopping out, guess what I did? 
                </p>
                <span></span>
                <p>
                  I delved into frontend development and in the last 4 years, 
                  I have acquired and been able to develop innovative and technical skills
                  necessary to successfully provide any company with multifaceted solutions across a wide range
                  of software platforms. 
                </p>

                <br></br>

                <p>
                  Just last year, I stumbled upon blockchain technology and the
                  limitless opportunities embedded in the Web 3 space. Currently I work as 
                  a blockchain app developer and I pride myself in being a great writer, I have authored 2 
                  ebooks as well as several articles on medium. 
                </p>

                <br></br>

                <p>
                I am very much interested in learning and teaching about the evolving
                Web 3 space and block chain technology in general. Never heard of Web 3? Check out my free ebook <Link to='/books'>here</Link>
                </p>
                

              </div>

              <div className='skills__col'>
                <h2>Major Skills</h2>
                <div className='img__history2'>
                  <div className='sub__img sub__img2'>
                    <div>
                      <img src={images.dev} alt='dev'/>
                      <p>Development & Training</p>
                    </div>
                    
                    <div>
                      <img src={images.writing} alt='dev'/>
                      <p>Writing</p>
                    </div>

                    <div>
                      <img src={images.speaking} alt='dev' />
                      <p>Speaking</p>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      )

      }
      

    </div>
  )
}

export default History