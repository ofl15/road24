import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Main from './pages/Main'

const Router = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path='/' Component={Main}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router