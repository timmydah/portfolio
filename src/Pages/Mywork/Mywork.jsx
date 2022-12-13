import React from 'react'
import { Navbar, Scroll, Footer } from '../../Component'
import { WorkHeader, WorkContent } from '../../MyWorkContainer'


import './Mywork.scss'

const Mywork = () => {

    return (
        <div className='ap mywork'>
            <Navbar />
            <Scroll />
            <WorkHeader />
            <WorkContent />
            <Footer />
            

        </div>
  )
}

export default Mywork