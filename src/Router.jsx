import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Main from './pages/Main'
import Register from './pages/Register'
import Login from './pages/Login'
import AddCar from './pages/AddCar'
import SelectCar from './pages/SelectCar'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Yoriqnoma from './pages/Yoriqnoma'
import Settings from './pages/Settings'
import Sugurta from './components/Sugurta'
import modda from './components/modda'
import Tolovlar from './pages/Tolovlar'
import Sozlamalar from './pages/Sozlamalar'

const Router = () => {
  return (
    <BrowserRouter >
    <Navbar />
    <div className=' mt-16  '>
    <Sidebar className="  "/>
      <div  style={{marginLeft:"183px"}}>
      <Routes className='' >
        <Route exact path='/' Component={Main}/>
        <Route exact path='/register' Component={Register}/>
        <Route exact path='/login' Component={Login}/>
        <Route exact path='/addcar' Component={AddCar}/>
        <Route exact path='/selectcar' Component={SelectCar}/>
        <Route exact path='/yoriqnoma' Component={Yoriqnoma}/>
        <Route exact path='/settings' Component={Settings}/>
        <Route exact path='/sugurta' Component={Sugurta}/>
        <Route exact path='/135modda' Component={modda}/>
        <Route exact path='/tolovlar' Component={Tolovlar}/>
        <Route exact path='/sozlamalar' Component={Sozlamalar}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default Router