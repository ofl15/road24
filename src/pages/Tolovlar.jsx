import React from 'react'
import emoji from '../assets/emoji.png'
import { Link } from 'react-router-dom'

export default function Tolovlar() {
  return (
   <div className="tolovlar">
     <div className="info ">
        <div className="flex px-3 py-3  ml-28">
            <div className="max-w-sm rounded overflow-hidden shadow-lg  margin-t">
                <img className="w-full" src="https://avatars.mds.yandex.net/i?id=4389e8786c88c834f03d64eb00578b99ed9daed7-9231751-images-thumbs&n=13" alt="Sunset in the mountains"/>
            </div>
        </div>
      <div className='inp ml-52  mt-20'>
        <input type="text" value="80 A777AA" className=' bg-slate-300   pl-10 py-2 text-2xl  justify-center items-center w-48' style={{color:'#198e7c'}}/>
      </div>

    </div>
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
