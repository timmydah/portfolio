import React  from 'react'
import { Navbar, Scroll, Footer } from '../../Component'

import {Header1, AllBooks} from '../../MybookContainer'



import './myBook.scss'

const MyBook = () => {

    return (
        <div className='ap myBook'>
            <Navbar />
            <Scroll />
            <Header1/>
            <AllBooks />
            <Footer />
            {/*  */}
        </div>
    )
}

export default MyBook