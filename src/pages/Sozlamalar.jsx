import React from 'react'
import { RiUserSettingsLine } from "react-icons/ri";
import { IoCardOutline } from "react-icons/io5";
import { MdOutlinePolicy } from "react-icons/md";
import { MdOutlinePublic } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { BsFillShareFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Sozlamalar() {
  return (
    <div className='sozlamalar'>
        <div className="s-left">
        <div className="info">
        <div className="flex px-3 py-3 ml-28">
            <div className="max-w-sm rounded overflow-hidden shadow-lg s-margin-t">
                <img className="w-full" src="https://avatars.mds.yandex.net/i?id=4389e8786c88c834f03d64eb00578b99ed9daed7-9231751-images-thumbs&n=13" alt="Sunset in the mountains"/>
            </div>
        </div>
      <div className='inp ml-52  mt-20'>
        <input type="text" value="80 A777AA" className=' bg-slate-300   pl-10 py-2 text-2xl  justify-center items-center w-48' style={{color:'#198e7c'}}/>
      </div>

    </div>
        </div>
        <div className="s-right"> 
          <div className="title">
            <p>Sozlamalar</p>
          </div>
          <div className="s-items">
            <div className="s-item-one">
            <div className="s-icon">
            <RiUserSettingsLine />
            </div>
              <button className='s-btn'>TASDIQLANMAGAN</button>
              <p>+998907189575</p>
            </div>
            <div className="s-item">
              <div className="s-icon">
              <IoCardOutline />
              </div>
              <div className="item-text">
                Kartalar
              </div>
            </div>
            <div className="s-item">
              <div className="s-icon">
              <MdOutlinePolicy />
              </div>
              <div className="item-text">
                Maxfiylik siyosati
              </div>
            </div>
            <div className="s-item">
              <div className="s-icon">
              <MdOutlinePublic />
              </div>
              <div className="item-text">
                Ommaviy oferta
              </div>
            </div>
            <div className="s-item">
              <div className="s-icon">
              <IoMdContacts />
              </div>
              <div className="item-text">
                Muroaat qilish
              </div>
            </div>
            <div className="s-item">
              <div className="s-icon">
              <BsFillShareFill />
              </div>
              <div className="item-text">
                Ulashish
              </div>
            </div>
           <Link to='/'>
           <div className="s-item-end">
              <div className="end-icon">
              <FaPowerOff />
              </div>
              <div className="text-item-end">
                Chiqish
              </div>
            </div>
           </Link>
          </div>
        </div>
    </div>
  )
}
