import React, {useState} from 'react'
import { Navbar, Scroll, Footer } from '../../Component'
import MenteeForm from '../../MenteeContainer/MenteeForm/MenteeForm'
import MyBook2Content from '../../MyBook2Container/MyBook2Content/MyBook2Content'
import MyBook2Header from '../../MyBook2Container/MyBook2Header/MyBook2Header'



import './MyBook2.scss'

const MyBook2 = () => {
    const [theme, setTheme] = useState("dark")

    const changeTheme = () => {
        theme === "dark" ? setTheme('light') : setTheme('dark')
    }

    return (
        <div className='ap myBook2'>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <Scroll />
            <MyBook2Header/>
            <MyBook2Content />
            
            <Footer />
        </div>
    )
}

export default MyBook2