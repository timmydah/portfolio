import React from 'react'
import Home from './Pages/Home/Home'
import MyBook2 from './Pages/Mybook2/MyBook2'
import {Routes, Route} from 'react-router-dom'

import './App.scss'
// import MyArticle from './Pages/MyArticle/MyArticle'
import Mywork from './Pages/Mywork/Mywork'
import Mentee from './Pages/Mentee/Mentee'


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/books' element={<MyBook2/>}/>
        {/* <Route exact path='/articles' element={<MyArticle/>}/> */}
        <Route exact path='/works' element={<Mywork/>}/>
        <Route exact path='/mentee' element={<Mentee />} />
      </Routes>
        
    </div>
  )
}

export default App