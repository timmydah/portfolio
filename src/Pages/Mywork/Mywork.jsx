import React, {useState} from 'react'
import { Navbar, Scroll, Footer } from '../../Component'
// import { ArticleHeader } from '../../MyArticleContainer'

import './Mywork.scss'

const Mywork = () => {

    const [theme, setTheme] = useState("dark")

    const changeTheme = () => {
        theme === "dark" ? setTheme('light') : setTheme('dark')
    }
    return (
        <div className='app' data-theme={theme}>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <Scroll />
            {/* <ArticleHeader/> */}
            <Footer />
            

        </div>
  )
}

export default Mywork