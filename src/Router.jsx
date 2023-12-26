import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Main from './pages/Main'
import Register from './pages/Register'
import Login from './pages/Login'
import AddCar from './pages/AddCar'
import SelectCar from './pages/SelectCar'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const Router = () => {
  return (
    <BrowserRouter >
    <Navbar />
    <div className=' mt-16  '>
    <Sidebar className="  "/>
      <div  style={{marginLeft:"253px"}}>
      <Routes className='' >
        <Route exact path='/' Component={Main}/>
        <Route exact path='/register' Component={Register}/>
        <Route exact path='/login' Component={Login}/>
        <Route exact path='/addcar' Component={AddCar}/>
        <Route exact path='/selectcar' Component={SelectCar}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default Router