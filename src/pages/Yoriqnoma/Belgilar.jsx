import React from 'react'
import { PiShieldWarning } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFileText , BsFillSignStopFill } from "react-icons/bs";
import { CiWarning } from "react-icons/ci";
import { GoColumns } from "react-icons/go";
import { TbLayoutList } from "react-icons/tb";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { LuTruck } from "react-icons/lu";
import Infors from '../../components/Infors';


const Belgilar = () => {
  return (
    <div className='Main grid grid-cols-2 gap-4'>
        <Infors />
    <div className="signs" >
    <h1 className='mt-2 text-3xl'>Belgilar, chiziqlar va qoidalar</h1>
        <div className="flex py-1  mt-6 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <div className='flex px-4 py-3'>
                <BsFileText className=' text-2xl mr-2'  />
                <h1 className='' style={{fontWeight:'600'}}>Yo'l harakati qoidalari</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl ml-64'/>
            </div>
        </div>
        <div className="flex py-1  mt-3 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <div className='flex px-4 py-3'>
                <CiWarning className=' text-2xl   mr-2'   />
                <h1 className='' style={{fontWeight:'600'}}>Belgilar</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl ' style={{marginLeft:'355px'}}/>
            </div>
        </div>
        <div className="flex py-1  mt-3 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <div className='flex px-4 py-3'>
                <TbLayoutList className=' text-2xl   mr-2'   />
                <h1 className='' style={{fontWeight:'600'}}>Yotiq chiziqlar</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl' style={{marginLeft:'304px'}}/>
            </div>
        </div>
        <div className="flex py-1  mt-3 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <div className='flex px-4 py-3'>
                <GoColumns className=' text-2xl   mr-2'   />
                <h1 className='' style={{fontWeight:'600'}}>Tik chiziqlar</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl  ml-80'/>
            </div>
        </div>
        <div className="flex py-1  mt-3 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <div className='flex px-4 py-3'>
                <BsFillSignStopFill className=' text-2xl   mr-2'   />
                <h1 className='' style={{fontWeight:'600'}}>Foydalanishni taqiqlash</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl ' style={{marginLeft:'235px'}}/>
            </div>
        </div>
        <div className="flex py-1  mt-3 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <div className='flex px-4 py-3'>
                <GiPoliceOfficerHead className=' text-2xl   mr-2'   />
                <h1 className='' style={{fontWeight:'600'}}>Tartibga solish signallari</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl ' style={{marginLeft:'230px'}}/>
            </div>
        </div>
        <div className="flex py-1  mt-3 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <div className='flex px-4 py-3'>
                <LuTruck className=' text-2xl   mr-2'   />
                <h1 className='' style={{fontWeight:'600'}}>Yuk tashish</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl ml-80'/>
            </div>
        </div>
        <div className="flex py-1  mt-3 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <div className='flex px-4 py-3'>
                <PiShieldWarning className=' text-2xl   mr-2'   />
                <h1 className='' style={{fontWeight:'600'}}>Xavf belgilari</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl ' style={{marginLeft:'306px'}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Belgilar