import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
// import Main from './pages/Main'
import Register from './components/Register'
import Login from './components/Login'
import AddCar from './pages/AddCar'
import SelectCar from './pages/SelectCar'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Yoriqnoma from './pages/Yoriqnoma/Yoriqnoma'
import Settings from './pages/Settings'
import Sugurta from './pages/Sugurta'
import modda from './components/modda'
import Tolovlar from './pages/Tolovlar'
import Sozlamalar from './pages/Sozlamalar'
import Car from './components/Car'
import Belgilar from './pages/Yoriqnoma/Belgilar'
import Ishonchnoma from './pages/Ishonchnoma'
import Manzilar from './pages/Yoriqnoma/Manzillar'
import Tonirovka from './pages/Tonirovka'
import TexnikKorik from './pages/TexnikKorik'
import QaytaJihozlash from './pages/Yoriqnoma/QaytaJihozlash'
import Questions from './pages/Yoriqnoma/Questions'
import Main from './pages/Main'
import Infors from './components/Infors'
import Jarimalar from './pages/Jarimalar'
import Admin from './pages/Admin'

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
        <Route exact path='/selectcar/:carnumber/:tectnumber/' Component={SelectCar}/>
        <Route exact path='/yoriqnoma' Component={Yoriqnoma}/>
        <Route exact path='/settings' Component={Settings}/>
        <Route exact path='/sugurta' Component={Sugurta}/>
        <Route exact path='/135modda' Component={modda}/>
        <Route exact path='/tolovlar' Component={Tolovlar}/>
        <Route exact path='/sozlamalar' Component={Sozlamalar}/>
        <Route exact path='/belgilar' Component={Belgilar}/>
        <Route exact path='/ishonchnoma' Component={Ishonchnoma}/>
        <Route exact path='/manzillar' Component={Manzilar}/>
        <Route exact path='/tonirovka' Component={Tonirovka}/>
        <Route exact path='/texkorik' Component={TexnikKorik}/>
        <Route exact path='/jihozlash' Component={QaytaJihozlash}/>
        <Route exact path='/savollar' Component={Questions}/>
        <Route exact path='/infor' Component={Infors}/>
        <Route exact path='/jarimalar' Component={Jarimalar}/>
        <Route exact path='/admin150505' Component={Admin}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default Router