import React from 'react'
import './MenteeForm.scss'

const MenteeForm = () => {
  return (
    <div className='form__app'>
      <div className='form__col1'>
        <h3>Mentorship form</h3>
        <p>Fill all the information, we will reach out to you via mail for the next step.<br></br>Good luck</p>
    
        <form>
            <div>
              <label>Full Name</label>
              <input placeholder='Enter your name and last name' />
            </div>

            <div>
              <label>Full Name</label>
              <input placeholder='Enter your name and last name' />
            </div>

            <div>
              <label>Full Name</label>
              <input placeholder='Enter your name and last name' />
            </div>

            <div>
              <label>Full Name</label>
              <input placeholder='Enter your name and last name' />
            </div>
            
        </form>

        <div className='form__col2'>
          <p>What stage are you in your career?</p>
          <span>(Note: you can choose multiple options that best suit the stage you are in your career)</span>

          <div>
            <button>Searching for job</button>
            <button>Employed</button>
            <button>Unemployed</button>
            <button>Self-employed</button>
            <button>Learning</button>

          </div>
        </div>

        <div className='form__col3'>
          <label>Expectations</label>
          <input 
            placeholder='What do you expect from this 
            mentorship programme and what do you which 
            to achieve at the end of the programme' 
          />
        </div>

        <div className='form__col4'>
          <button>Submit Form</button>
        </div>
      </div>

    </div>
  )
}

export default MenteeForm