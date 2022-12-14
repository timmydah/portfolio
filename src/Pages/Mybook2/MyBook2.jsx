import React  from 'react'
import { Navbar2, Scroll, Footer } from '../../Component'

import MyBook2Content from '../../MyBook2Container/MyBook2Content/MyBook2Content'
import MyBook2Header from '../../MyBook2Container/MyBook2Header/MyBook2Header'



import './MyBook2.scss'

const MyBook2 = () => {

    return (
        <div className='ap myBook2'>
            <Navbar2 />
            <Scroll />
            <MyBook2Header/>
            <MyBook2Content />
            
            <Footer />
        </div>
    )
}

export default MyBook2