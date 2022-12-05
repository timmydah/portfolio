import React, {useState} from 'react'
import { Navbar, Scroll, Footer } from '../../Component'

import {Header1, AllBooks} from '../../MybookContainer'



import './myBook.scss'

const MyBook = () => {
    const [theme, setTheme] = useState("dark")

    const changeTheme = () => {
        theme === "dark" ? setTheme('light') : setTheme('dark')
    }

    return (
        <div className='ap myBook'>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <Scroll />
            <Header1/>
            <AllBooks />
            <Footer />
            {/*  */}
        </div>
    )
}

export default MyBook