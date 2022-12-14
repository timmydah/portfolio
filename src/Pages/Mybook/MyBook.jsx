import React  from 'react'
import { Navbar2, Scroll, Footer } from '../../Component'

import {Header1, AllBooks} from '../../MybookContainer'



import './myBook.scss'

const MyBook = () => {

    return (
        <div className='ap myBook'>
            <Navbar2 />
            <Scroll />
            <Header1/>
            <AllBooks />
            <Footer />
            {/*  */}
        </div>
    )
}

export default MyBook