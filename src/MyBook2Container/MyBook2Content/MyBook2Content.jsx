import React from 'react'
import './MyBook2Content.scss'

const MyBook2Content = () => {
  return (
    <div className='bookContent__app'>
      <div className='form__col1'>
        <h3>bookContent</h3>
        <p>
          Write a review on what you’ve learnt and how this book has helped you. Your review will help others in 
          making decision to get this book that will also help them.
        </p>
    
        <form>
            <div>
              <label>Name</label>
              <input placeholder='Enter your name here...' />
            </div>

            <div>
              <label>Email Address</label>
              <input placeholder='Enter your email address...' />
            </div>
            
        </form>

        <div className='bookContent__col3'>
          <label>Your review about the book</label>
          <input 
            placeholder='Write your review about the book' 
          />
        </div>

        <div className='bookContent__col4'>
          <button>Submit Form</button>
        </div>
      </div>

    </div>
  )
}

export default MyBook2Content