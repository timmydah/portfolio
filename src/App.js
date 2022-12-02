import React from 'react'
import Home from './Pages/Home/Home'
import MyBook from './Pages/Mybook/MyBook'
import {Routes, Route} from 'react-router-dom'

import './App.scss'
import MyArticle from './Pages/MyArticle/MyArticle'
import Mywork from './Pages/Mywork/Mywork'


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/books' element={<MyBook/>}/>
        <Route exact path='/articles' element={<MyArticle/>}/>
        <Route exact path='/works' element={<Mywork/>}/>
      </Routes>
        
    </div>
  )
}

export default App