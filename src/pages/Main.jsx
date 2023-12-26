import React from 'react'
import { GiCctvCamera } from "react-icons/gi";
import { MdOutlineShield, MdSpeed } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbShadow } from "react-icons/tb";


const Main = () => {
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
        <div class="flex py-3  mt-6 grid-cols-2">
            <div class=" rounded overflow-hidden shadow-lg cursor-pointer">
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
            </div>
        </div>
        <div class="flex py-3   grid-cols-2 gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg pr-16 cursor-pointer">
                <div className='pl-5 pt-3 pb-3 pr-2'>
                  < ImProfile style={{opacity:'0.7'}} className=' text-2xl'/>
                  <h2 className=' text-lg'> <span  style={{opacity:'0.7'}}>Sug'urta </span> • OSAGO</h2>
                  <h2 className=' text-xl' > 4 oy , 22 kun</h2>
                  <progress  max="100" value="55" className=' bg-blue-800' style={{borderRadius:'30%' , height:'7px' }}></progress>
                  <h2 className=' text-sm ' style={{opacity:'0.5'}}>15-may 2024</h2>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg pr-16 cursor-pointer">
                <div className='pl-5 pt-3 pb-3 pr-2'>
                  < MdSpeed style={{opacity:'0.7'}} className=' text-2xl'/>
                  <h2 className=' text-lg'> Texnik ko'rik</h2>
                  <h2 className=' text-xl' >1yil, 5 oy , 7 kun</h2>
                  <progress  max="100" value="30" className=' bg-blue-800' style={{borderRadius:'30%' , height:'7px' }}></progress>
                  <h2 className=' text-sm ' style={{opacity:'0.5'}}>30-may 2025</h2>
                </div>
            </div>
        </div>
        <div class="flex py-3  grid-cols-2 gap-4">
            <div class=" rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'252px'}}>
                <div className='pl-5 pt-3 pb-3 pr-2'>
                  <ImProfile style={{opacity:'0.6'}} className=' text-2xl' />
                  <h2 className=' text-lg' style={{opacity:'0.7'}}>Ishonchnoma</h2>
                  <h2 className=' text-sm ' style={{opacity:'0.5'}}>Muddati tugashdan oldin eslatmalarni olish uchun ma'lumot qo'shing</h2>
                </div>
            </div>
            <div class=" rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'252px'}}>
                <div className='pl-5 pt-3 pb-3 pr-2'>
                  <TbShadow style={{opacity:'0.6'}} className=' text-2xl' />
                  <h2 className=' text-lg' style={{opacity:'0.7'}}>Tonirovka</h2>
                  <h2 className=' text-sm ' style={{opacity:'0.5'}}>Tonirovka ma'lumotlari topilmadi</h2>
                </div>
            </div>
        </div>
        <div class="flex py-3 grid-cols-2 gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg  cursor-pointer" style={{width:'252px'}}>
                <div className='pl-5 pt-3 pb-3 pr-2'>
                  < BsFillFuelPumpFill style={{opacity:'0.6'}} className=' text-2xl'/>
                  <h2 className=' text-lg'> Avtomobil moyi</h2>
                  <h2 className=' text-xl' > 1 oy , 23 kun</h2>
                  <progress  max="100" value="55" className=' bg-blue-800' style={{borderRadius:'30%' , height:'7px' }}></progress>
                  <h2 className=' text-sm ' style={{opacity:'0.5'}}>15-fevral 2024</h2>
                </div>
            </div>
            <div class=" rounded overflow-hidden shadow-lg cursor-pointer" style={{width:'252px'}}>
                <div className='pl-5 pt-3 pb-3 pr-2'>
                  <BsFillFuelPumpFill style={{opacity:'0.6'}} className=' text-2xl' />
                  <h2 className=' text-lg' style={{opacity:'0.7'}}>Gaz</h2>
                  <h2 className=' text-sm ' style={{opacity:'0.5'}}>Muddati tugashdan oldin eslatmalarni olish uchun ma'lumot qo'shing</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main