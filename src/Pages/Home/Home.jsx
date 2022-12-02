import React, { useState } from 'react'
// import useLocalStorage from 'use-local-storage'

// import {Switch, Route, Link} from 'react-router-dom'
import { History,Header, Article, Book, Connect, Footer, Speak, Work } from '../../container'
import { Navbar } from '../../Component'
// import Scroll from '../Component/Scroll/Scroll'

import './Home.scss'


const Home = () => {
  const [theme, setTheme] = useState("dark")

  const changeTheme = () => {
    theme === "dark" ? setTheme('light') : setTheme('dark')
  }

  return (
    <div className='app' data-theme={theme}>
      <scroll />
      <Navbar changeTheme={changeTheme} currentTheme={theme}/>
      <Header/>
      <div className='his'>
        <History changeTheme={changeTheme} currentTheme={theme}/>
      </div>
      <Work changeTheme={changeTheme} currentTheme={theme}/>      
      <Book />
      <Article changeTheme={changeTheme} currentTheme={theme}/>
      <Speak />
      <Connect />
      <Footer />
    </div>
  )
}

export default Home