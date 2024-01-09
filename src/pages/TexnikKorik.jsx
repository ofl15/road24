import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import Infors from '../components/Infors';

const TexnikKorik = () => {
  return (
    <div className='Main grid grid-cols-2 gap-4'>
        <Infors />
    <div className="signs" >
        <h1 className='mt-2 text-3xl'>Tonirovka</h1>
        <div className="flex py-1  mt-2 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <Link to='/135modda'>
            <div className='flex px-4 py-3'>
                <PiWarningCircleLight className=' text-2xl bg-slate-500 mr-2' style={{borderRadius:'50%'}} />
                <h1 className='' style={{fontWeight:'600'}}>BILISH MUHIM</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl ml-72'/>
            </div>
            </Link>
        </div>
        <div className="flex py-1  mt-2 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <div className='flex px-4 py-3'>
                <IoLocationSharp className=' text-2xl py-1 px-1 bg-slate-500 mr-2' style={{borderRadius:'50%'}} />
                <h1 className='' style={{fontWeight:'600'}}>DYHXX BO'LIMLARI</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl ml-64'/>
            </div>
        </div>
        {/* <h1 className='mt-2 text-xl'>Amalda</h1> */}
        <div className="flex py-3 gap-4">
            <div className="rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
                <div className='pl-5 pt-3 pb-3'>
                  <h2 className=' text-lg mb-3 pr-24' style={{fontWeight:'600'}}>Sizda majburiy texnik ko'rikdan o'tkazishingizga <span className=' text-blue-600'>3 yil  1 kun </span>bor</h2>
                  <h2 className=' text-sm' style={{fontWeight:'500'}}><span className=' opacity-60'>Transport ishlab chiqarilgan yili:</span>2017 yil</h2>
                  <h2 className=' text-sm' style={{fontWeight:'500'}}><span className=' opacity-60'>Texnik ko'rik majburiy bo'lish yili:</span>2017 yil gacha</h2>
                  <progress  max="100" value="70" className=' bg-blue-800' style={{borderRadius:'30%' , height:'7px', width:'455px' }}></progress>

                  <div className='flex'>
                    <h2 className=' text-sm ' style={{opacity:'0.5'}}>2017</h2>
                    <h2 className=' text-sm' style={{opacity:'0.5', marginLeft:'395px'}}>2027</h2>
                  </div>
                </div>
            </div>
        </div>
        <div className='flex py-3 gap-4'>
            <input type='button' className='flex justify-center items-center px-52 py-4 text-xl rounded-xl bg-gray-400 text-white desabled' disabled value="Tekshirish"/>
        </div>
      </div>
    </div>
  )
}

export default TexnikKorik