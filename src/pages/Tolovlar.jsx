import React from 'react'
import emoji from '../assets/emoji.png'
import { Link, useNavigate } from 'react-router-dom'
import Infors from '../components/Infors'

export default function Tolovlar() {

  return (
   <div className="tolovlar">
    <Infors />
    <div className="t-right">
      <p className='t-top'>To'lovlar:</p>
      <div className="center">
        <img src={emoji} alt="" />
        <div className="c-title">
          <h3>To'lov cheklari yo'q</h3>
          <p>Bu yerda jarimalar uchun qilingan to'lovlarning cheklarini <br /> ko'rishingiz mumkin</p>
          <Link to='/'><button>Asosiy sahifaga qaytish</button></Link>
        </div>
      </div>
    </div>
   </div>
  )
}
