import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import Infors from '../components/Infors';

const Sugurta = () => {
  return (
    <div className='Main grid grid-cols-2 gap-4'>
        <Infors />
    <div className="signs" >
        <h1 className='mt-2 text-3xl'>Sug'urta</h1>
        <div className="flex py-1  mt-6 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <Link to='/135modda'>
            <div className='flex px-4 py-3'>
                <PiWarningCircleLight className=' text-2xl bg-slate-500 mr-2' style={{borderRadius:'50%'}} />
                <h1 className='' style={{fontWeight:'600'}}>BILISH MUHIM</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl ml-72'/>
            </div>
            </Link>
        </div>
        <div className="flex py-3 gap-4">
            <div className="rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
                <div className='pl-5 pt-3 pb-3'>
                  <div className='flex'>
                    <h1 style={{opacity:'0.7'}} className=' text-lg mb-2'>OSAGO</h1>
                    <h1 style={{opacity:'0.7'}} className=' text-lg mb-2 ml-56'>"O'zbekiston" EISK AJ</h1>
                  </div>
                  <h2 className=' text-lg' style={{fontWeight:'600'}}>EUIL 0820611</h2>
                  <h2 className=' text-sm' style={{fontWeight:'500'}}> 4 oy , 22 kun</h2>
                  <progress  max="100" value="20" className=' bg-blue-800' style={{borderRadius:'30%' , height:'7px', width:'455px' }}></progress>

                  <div className='flex'>
                    <h2 className=' text-sm ' style={{opacity:'0.5'}}>25-okt 2023</h2>
                    <h2 className=' text-sm ml-72' style={{opacity:'0.5'}}>24-okt 2024</h2>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sugurta