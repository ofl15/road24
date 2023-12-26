import React from 'react'
import { ImProfile } from "react-icons/im";
import { TiCancel } from "react-icons/ti";
import { MdDirectionsCarFilled } from "react-icons/md";
import { BsFileText } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa6";
import { PiCarProfileLight } from "react-icons/pi";
import { CiCircleQuestion } from "react-icons/ci";

const Yoriqnoma = () => {
  return (
    <div className='Main grid grid-cols-2 gap-4'>
      <div className="info">
        <div class="flex px-3 py-3  ml-28 mt-16">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://avatars.mds.yandex.net/i?id=4389e8786c88c834f03d64eb00578b99ed9daed7-9231751-images-thumbs&n=13" alt="Sunset in the mountains"/>
            </div>
        </div>
      <div className='inp ml-52  mt-20'>
        <input type="text" value="80 A777AA" className=' bg-slate-300   pl-10 py-2 text-2xl  justify-center items-center w-48' style={{color:'#198e7c'}}/>
      </div>

    </div>
    <div className="signs" >
        <div class="flex py-3   grid-cols-2 gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg pr-12 pb-5 cursor-pointer">
                <div className='pl-16 pt-3 pb-3 pr-2 '>
                  < TiCancel style={{opacity:'0.7', marginLeft:'27px'}} className='mt-8 justify-center items-center flex text-6xl'/>
                  <h2 className=' text-xl justify-center items-center flex ' style={{fontWeight:'600'}}> Jarimalar YHQ</h2>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg pr-5 cursor-pointer" style={{width:'252px'}}>
                <div className='pl-7 pt-3 pb-3 pr-2 '>
                  < MdDirectionsCarFilled style={{opacity:'0.7', marginLeft:'74px'}} className=' mt-8 justify-center items-center flex text-4xl' />
                  <h2 className=' text-xl justify-center items-center flex mt-2' style={{fontWeight:'600'}}> Manzillar (Texnik ko'rik va Texpasport)</h2>
                </div>
            </div>
        </div>
        <div class="flex py-3   grid-cols-2 gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg pr-5 cursor-pointer" style={{width:'252px'}}>
                <div className='pl-7 pt-3 pb-3 pr-2 '>
                  < BsFileText style={{opacity:'0.7' , marginLeft:'74px'}} className='mt-8 justify-center items-center flex text-4xl' />
                  <h2 className=' text-xl justify-center items-center flex mt-2' style={{fontWeight:'600'}}>Belgilar, chiziqlar va qoidalar</h2>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg pr-5 cursor-pointer" style={{width:'252px'}}>
                <div className='pl-7 pt-3 pb-3 pr-2 '>
                  < FaCarSide style={{opacity:'0.7' , marginLeft:'74px'}} className='mt-8 justify-center items-center flex text-4xl' />
                  <h2 className=' text-xl justify-center items-center flex mt-2' style={{fontWeight:'600'}}>Avtomobil sotib olish  va sotish</h2>
                </div>
            </div>
        </div>
        <div class="flex py-3   grid-cols-2 gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg pr-5 cursor-pointer" style={{width:'252px'}}>
                <div className='pl-7 pt-3 pb-3 pr-2 '>
                  < PiCarProfileLight style={{opacity:'0.7' , marginLeft:'74px'}} className='mt-8 justify-center items-center flex text-4xl' />
                  <h2 className=' text-xl justify-center items-center flex mt-2' style={{fontWeight:'600'}}>Avtomobilni qayta jihozlash</h2>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg pr-5 cursor-pointer" style={{width:'252px'}}>
                <div className='pl-7 pt-3 pb-3 pr-2 '>
                  < CiCircleQuestion style={{opacity:'0.7' , marginLeft:'74px'}} className='mt-8 justify-center items-center flex text-4xl' />
                  <h2 className=' text-xl justify-center items-center flex mt-2' style={{fontWeight:'600'}}>Ko'p so'raladigan savollar</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Yoriqnoma