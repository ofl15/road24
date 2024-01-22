import React from 'react'
import { GiCctvCamera } from "react-icons/gi";
import { MdOutlineShield, MdSpeed } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbShadow } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Infors from './Infors';


const Car = () => {
  return (
    <div className='Main grid grid-cols-2 gap-4  '>
      <Infors />

    <div className="signs" >
    <div className="flex py-3  mt-6 grid-cols-2">
        <div className=" rounded overflow-hidden shadow-lg cursor-pointer">
          <Link to='/jarimalar'>
            <div className='flex grid-cols-2 gap-'>
              <div className='pl-5 pt-3 pb-3 pr-20'>
                <GiCctvCamera style={{opacity:'0.6'}} className=' text-2xl' />
                <h2 className=' text-lg' style={{opacity:'0.7'}}>YHXX jarimalari</h2>
                <h2 className=' text-2xl' style={{opacity:'0.5'}}>Hammasi yaxshi</h2>
                <h2 className=' text-sm ' style={{opacity:'0.5'}}>jarimalar yo'q</h2>
              </div>
              <div className=' pt-3 pb-3 pr-20'>
                < MdOutlineShield style={{opacity:'0.7'}} className=' text-2xl'/>
                <h2 className=' text-lg' style={{opacity:'0.7'}}>MIB jarimalari</h2>
                <h2 className=' text-2xl' style={{opacity:'0.5'}}>Hammasi yaxshi</h2>
                <h2 className=' text-sm ' style={{opacity:'0.5'}}>jarimalar yo'q</h2>
              </div>
            </div>
          </Link>
        </div>
    </div>
    <div className="flex py-3   grid-cols-2 gap-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg pr-16 cursor-pointer">
          <Link to="/sugurta">
            <div className='pl-5 pt-3 pb-3 pr-2'>
                < ImProfile style={{opacity:'0.7'}} className=' text-2xl'/>
                <h2 className=' text-lg'> <span  style={{opacity:'0.7'}}>Sug'urta </span> • OSAGO</h2>
                <h2 className=' text-xl' > 4 oy , 22 kun</h2>
                <progress  max="100" value="55" className=' bg-blue-800' style={{borderRadius:'30%' , height:'7px' }}></progress>
                <h2 className=' text-sm ' style={{opacity:'0.5'}}>15-may 2024</h2>
            </div>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg pr-16 cursor-pointer">
          <Link to='texkorik'>
            <div className='pl-5 pt-3 pb-3 pr-2'>
              < MdSpeed style={{opacity:'0.7'}} className=' text-2xl'/>
              <h2 className=' text-lg'> Texnik ko'rik</h2>
              <h2 className=' text-xl' >1yil, 5 oy , 7 kun</h2>
              <progress  max="100" value="30" className=' bg-blue-800' style={{borderRadius:'30%' , height:'7px' }}></progress>
              <h2 className=' text-sm ' style={{opacity:'0.5'}}>30-may 2025</h2>
            </div>
          </Link>
        </div>
    </div>
    <div className="flex py-3  grid-cols-2 gap-4">
        <div className=" rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'252px'}}>
          <Link to='/ishonchnoma'>
            <div className='pl-5 pt-3 pb-3 pr-2'>
              <ImProfile style={{opacity:'0.6'}} className=' text-2xl' />
              <h2 className=' text-lg' style={{opacity:'0.7'}}>Ishonchnoma</h2>
              <h2 className=' text-sm ' style={{opacity:'0.5'}}>Muddati tugashdan oldin eslatmalarni olish uchun ma'lumot qo'shing</h2>
            </div>
          </Link>
        </div>
        <div className=" rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'252px'}}>
          <Link to='/tonirovka'>
            <div className='pl-5 pt-3 pb-3 pr-2'>
              <TbShadow style={{opacity:'0.6'}} className=' text-2xl' />
              <h2 className=' text-lg' style={{opacity:'0.7'}}>Tonirovka</h2>
              <h2 className=' text-sm ' style={{opacity:'0.5'}}>Tonirovka ma'lumotlari topilmadi</h2>
            </div>
          </Link>
        </div>
    </div>
    <div className="flex py-3 grid-cols-2 gap-4">
        <Link to='/oil' className="max-w-sm rounded overflow-hidden shadow-lg  cursor-pointer" style={{width:'252px'}}>
            <div className='pl-5 pt-3 pb-3 pr-2'>
              < BsFillFuelPumpFill style={{opacity:'0.6'}} className=' text-2xl'/>
              <h2 className=' text-lg'> Avtomobil moyi</h2>
              <h2 className=' text-xl' > 1 oy , 23 kun</h2>
              <progress  max="100" value="55" className=' bg-blue-800' style={{borderRadius:'30%' , height:'7px' }}></progress>
              <h2 className=' text-sm ' style={{opacity:'0.5'}}>15-fevral 2024</h2>
            </div>
        </Link>
        <Link to='/gas' className=" rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'252px'}}>
            <div className='pl-5 pt-3 pb-3 pr-2'>
              <BsFillFuelPumpFill style={{opacity:'0.6'}} className=' text-2xl' />
              <h2 className=' text-lg' style={{opacity:'0.7'}}>Gaz</h2>
              <h2 className=' text-sm ' style={{opacity:'0.5'}}>Muddati tugashdan oldin eslatmalarni olish uchun ma'lumot qo'shing</h2>
            </div>
        </Link>
    </div>
  </div>
    {/* <hr style={{width:"202%" , border:'solid 2px #198e7c'}}/> */}
    </div>
  )
}

export default Car