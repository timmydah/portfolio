import React from 'react'
import { Navbar, Scroll, Footer } from '../../Component'
import MenteeForm from '../../MenteeContainer/MenteeForm/MenteeForm'
import MenteeHeader from '../../MenteeContainer/MenteeHeader/MenteeHeader'

import './Mentee.scss'

const Mentee = () => {

    return (
        <div className='ap mentee' >
            <Navbar />
            <Scroll />
            <MenteeHeader />
            <MenteeForm />
            <Footer />
        </div>
    )
}

export default Mentee