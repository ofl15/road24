import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const Tonirovka = () => {
  return (
    <div className='Main grid grid-cols-2 gap-4'>
      <div className="info">
        <div className="flex px-3 py-3  ml-28 mt-16">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://avatars.mds.yandex.net/i?id=4389e8786c88c834f03d64eb00578b99ed9daed7-9231751-images-thumbs&n=13" alt="Sunset in the mountains"/>
            </div>
        </div>
      <div className='inp ml-52  mt-20'>
        <input type="text" value="80 A777AA" className=' bg-slate-300   pl-10 py-2 text-2xl  justify-center items-center w-48' style={{color:'#198e7c'}}/>
      </div>

    </div>
    <div className="signs" >
        <h1 className='mt-2 text-3xl'>Tonirovka</h1>
        <div className="flex py-3 gap-4 ">
            <div className="rounded-2xl overflow-hidden shadow-lg cursor-pointer py-6 px-4" style={{width:'500px' , border:'solid 1px #003', fontWeight:'600'}}>
                <p>Ushbu ma'lumot YHXX ning yagona avtomatlashtirilgan axborot tizimidan to'gridan-tog'ri olinmoqda
                 </p>
            </div>
        </div>
        <div className="flex py-1  mt-2 rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
            <Link to='/135modda'>
            <div className='flex px-4 py-3'>
                <PiWarningCircleLight className=' text-2xl bg-slate-500 mr-2' style={{borderRadius:'50%'}} />
                <h1 className='' style={{fontWeight:'600'}}>BILISH MUHIM</h1>
                <MdOutlineKeyboardArrowRight className='text-2xl ml-72'/>
            </div>
            </Link>
        </div>
        <h1 className='mt-2 text-xl'>Amalda</h1>
        <div className="flex py-3 gap-4">
            <div className="rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'500px'}}>
                <div className='pl-5 pt-3 pb-3'>
                  <h2 className=' text-lg' style={{fontWeight:'600'}}>Old va orqa oynalar</h2>
                  <h2 className=' text-sm' style={{fontWeight:'500'}}> 10 oy , 4 kun</h2>
                  <progress  max="100" value="10" className=' bg-blue-800' style={{borderRadius:'30%' , height:'7px', width:'455px' }}></progress>

                  <div className='flex'>
                    <h2 className=' text-sm ' style={{opacity:'0.5'}}>04-noy 2023</h2>
                    <h2 className=' text-sm ml-72' style={{opacity:'0.5'}}>04-noy 2024</h2>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tonirovka