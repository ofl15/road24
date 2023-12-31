import React from 'react'
import { FaCar } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { BsJournalText } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Sidebar = () => {

  return (
    <div className=' border-r-2 fixed ' style={{height: '91vh' , width:'12%'}} >
      <Link to="/" className=' block  border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
        < FaCar  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
        <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>Garaj</p>
      </Link>
      <Link to='/tolovlar' className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
        < MdHistory  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
        <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>To`lovlar</p>
      </Link>
      <Link to="/yoriqnoma" className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
        < BsJournalText  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
        <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>Yo`riqnoma</p>
      </Link>
      <Link to="/sozlamalar" className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
        < IoSettingsOutline  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
        <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>Sozlamalar</p>
      </Link>
    </div>
  )
}

export default Sidebar