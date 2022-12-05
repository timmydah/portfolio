import React, {useState} from 'react'
import { Navbar, Scroll, Footer } from '../../Component'
import { WorkHeader, WorkContent } from '../../MyWorkContainer'


import './Mywork.scss'

const Mywork = () => {

    const [theme, setTheme] = useState("dark")

    const changeTheme = () => {
        theme === "dark" ? setTheme('light') : setTheme('dark')
    }
    return (
        <div className='ap mywork'>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <Scroll />
            <WorkHeader />
            <WorkContent />
            <Footer />
            

        </div>
  )
}

export default Mywork