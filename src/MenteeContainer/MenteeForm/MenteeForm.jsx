import React from 'react'
import './MenteeForm.scss'

const MenteeForm = () => {
  return (
    <div className='form__app'>
        <div className='form__col1'>
            <h3>Mentorship form</h3>
            <p>Fill all the information, we will reach out to you via mail for the next step.Good luck</p>
        
            <form>
                <label>Full Name</label>
                <input placeholder='Enter your name and last name' />
            
                <label>Full Name</label>
                <input placeholder='Enter your name and last name' />

                <label>Full Name</label>
                <input placeholder='Enter your name and last name' />

                <label>Full Name</label>
                <input placeholder='Enter your name and last name' />

            </form>

            <p>What stage are you in your career?</p>
            <span>(Note: you can choose multiple options that best suit the stage you are in your career)</span>

            
        </div>

    </div>
  )
}

export default MenteeForm