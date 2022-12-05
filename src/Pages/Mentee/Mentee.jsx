import React, {useState} from 'react'
import { Navbar, Scroll, Footer } from '../../Component'
import MenteeHeader from '../../MenteeContainer/MenteeHeader/MenteeHeader'

// import {Header1, AllBooks} from '../../MybookContainer'



import './Mentee.scss'

const Mentee = () => {
    const [theme, setTheme] = useState("dark")

    const changeTheme = () => {
        theme === "dark" ? setTheme('light') : setTheme('dark')
    }

    return (
        <div className='app myBook' data-theme={theme}>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <Scroll />
            <MenteeHeader />
            <Footer />
        </div>
    )
}

export default Mentee