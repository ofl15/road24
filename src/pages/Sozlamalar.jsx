import React from 'react'
import { RiUserSettingsLine } from "react-icons/ri";
import { IoCardOutline } from "react-icons/io5";
import { MdOutlinePolicy } from "react-icons/md";
import { MdOutlinePublic } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { BsFillShareFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Infors from '../components/Infors';



export default function Sozlamalar() {
  return (
    <div className='sozlamalar'>
        <div className="s-left">
        <Infors />
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
