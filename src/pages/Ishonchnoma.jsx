import React from 'react'
import {Link} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

export default function Ishonchnoma() {
  return (
  <>
    <div className="box11">
        <Link className='btnishonchnoma' to="/" type='button'><IoIosArrowBack/></Link>
        <h1 className='text1'>Ishonchnoma</h1>
    </div>
    <h1 className='text23'>Amal qilish mudati</h1>
    <div className="boxinp">
       < input className='inp11' type="date"  />
       < input className='inp11' type="date"  />
       
    </div>
    <br />
    <h1 className='text23'>Ishonchnoma turi</h1>

    <select className='www' id="cars">
  <option value="volvo">Bir martalik</option>
  <option value="saab">Maxsus</option>
  <option value="opel">Umumiy</option>
  </select>
  <br /><br />
  <h1 className='text23'>Kimga berilgan</h1>
  <input className='wwwe' type="text"placeholder='F.I.SH' />
  <div className="boxqws">
  <h1 className='text232'>Seriya</h1>
  <h1 className='text232'>Raqami</h1>
    
  </div>
    <div className="boxqw">
  < input className='inp111' type="text" placeholder='AAA'  />
  < input className='inp111' type="number" placeholder='01234567'  />
    </div>
    <br /><br />
    <div className="boxpo">
        <Link to="/"
        type="button" className='btn1'> Yopish</Link>
        <Link to="/"
        type="button"
          className='btn2'>Qo'shish</Link>
        </div>
    </>
  )
}