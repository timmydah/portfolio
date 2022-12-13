import React, { useState } from 'react'

import './Navbar.scss'

import { Link } from 'react-router-dom'

import {motion} from 'framer-motion'
import { HiMenuAlt4, HiX} from 'react-icons/hi'
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

import {images} from '../../constant'


const Navbar = ({changeTheme, currentTheme}) => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img className = 'logo' src={images.sig} alt='logo' />
            <img className = 'sig' src={images.logo} alt='signature' />
        </div>
        <ul className='app__navbar-links'>
          <li className='app__flex'>
            <div />
            <Link to="/">Home</Link>
          </li>
          <li className='app__flex'>
            <div />
            <Link to="/books">Books</Link>
          </li>
          <li className='app__flex'>
            <div />
            <a href='https://iam-grace.medium.com/' target="_blank" rel="noreferrer">Articles</a>
            {/* <Link to="/articles">Articles</Link> */}
          </li>
          <li className='app__flex'>
            <div />
            <Link to='/works'>Works</Link>
          </li>
          <li className='app__flex'>
            <span className='div'/>
            <Link className='mentee' to="/mentee">Become a Mentee</Link>
          </li>

        </ul>

        
        {/* Color theme */}
        <li className='app__flex' onClick={changeTheme}>
          {currentTheme === 'dark' ? (
            <ImSun className='light' />
          ) : (
            <BsFillMoonFill className='dark' />
          )} 
        </li>

        {/* Navbar-menu */}
        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={()=> setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0]}}
              transition={{ duration: 0.85, ease: 'easeOut'}}
              className='nav-menu'
            >
              <HiX onClick={()=>setToggle(false)} />
              <ul>
                <li>
                  <Link to='/' onClick={()=>setToggle(false)}>Home</Link>                
                </li>
                <li>
                  <Link to='/books' onClick={()=>setToggle(false)}>Books</Link>
                </li>
                <li>        
                  <Link to='/articles' onClick={()=>setToggle(false)}>Articles</Link>       
                </li>
                <li>
                  <Link to='/works' onClick={()=>setToggle(false)}>Works</Link>
                </li>
                <li>               
                  <Link to='/mentee' onClick={()=>setToggle(false)}>Become a Mentee</Link>
                </li>
              </ul>
            </motion.div>
          )
          }
        </div>
    </nav>
  )
}

export default Navbar