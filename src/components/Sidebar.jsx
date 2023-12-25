import React from 'react'
import { FaCar } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { BsJournalText } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";


const Sidebar = () => {

  const sides = [ 'Garaj', 'To`lovlar' , 'Yo`riqnoma' , 'Sozlamalar'  ]
  return (
    <div className=' border-r-2 w-1/6 fixed ' style={{height: '91vh'}} >
      <div className=' block  border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
        < FaCar  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}/>
        <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}>Garaj</p>
      </div>
      <div className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
        < MdHistory  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}/>
        <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}>To`lovlar</p>
      </div>
      <div className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
        < BsJournalText  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}/>
        <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}>Yo`riqnoma</p>
      </div>
      <div className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
        < IoSettingsOutline  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}/>
        <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}>Sozlamalar</p>
      </div>
    </div>
  )
}

export default Sidebar