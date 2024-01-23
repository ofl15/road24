import React, { useState } from 'react'
import { RiUserSettingsLine } from "react-icons/ri";
import { IoCardOutline } from "react-icons/io5";
import { MdOutlinePolicy } from "react-icons/md";
import { MdOutlinePublic } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { BsFillShareFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Infors from '../components/Infors';



export default function Sozlamalar() {

  const [{username}] = useState(JSON.parse(localStorage.getItem("user")) || [])

  const navigate = useNavigate()

  // const isAuthenticated = localStorage.getItem("user") && localStorage.getItem("token")


  // if (!isAuthenticated) {
  //   return navigate('/login')
  // }

  const logOut = () => {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      navigate('/login')
  }


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
              <p>+998907189575</p>
            </div>
            <Link to='/card' className="s-item">
              <div className="s-icon">
              <IoCardOutline />
              </div>
              <div className="item-text">
                Karta 
              </div>
            </Link>
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
            <Link to='/contact' className="s-item">
              <div className="s-icon">
              <IoMdContacts />
              </div>
              <div className="item-text">
                Muroaat qilish
              </div>
            </Link>
            <div className="s-item">
              <div className="s-icon">
              <BsFillShareFill />
              </div>
              <div className="item-text">
                Ulashish
              </div>
            </div>
           {/* <Link to='/'> */}
           <button onClick={logOut} className="s-item-end">
              <div className="end-icon">
              <FaPowerOff />
              </div>
              <div className="text-item-end">
                Chiqish
              </div>
            </button>
           {/* </Link> */}
          </div>
        </div>
    </div>
  )
}
