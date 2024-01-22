import React from 'react'
import { Link } from 'react-router-dom'
import Infors from './Infors'
import { FaChevronLeft } from "react-icons/fa6";

function Gaz() {
  return (
    <div className='GAS grid grid-cols-2 gap-4'>
          <Infors />
      <div className="">
        <div className="column">
          <div className='columns flex mt-1'>
            <div className='column is-1'>
              <Link to='/'>
                <button value="<" className=' px-4 py-4 bg-gray-500 rounded-full '>
                  <FaChevronLeft />
                </button>
              </Link>
            </div>
            <div className="">
              <p className='ml-60 mt-1 mb-20 text-3xl' style={{fontWeight:'600'}}>Gaz</p>
            </div>
          </div>
          <div className="ges_name">
            <p className=' opacity-65'>Nomi</p>
            <input className=' border-black bg-gray-100 rounded-xl px-5 py-4' style={{width:'86vh'}} type="text" placeholder='ГБО 3, Метан, Пропан' />
          </div>

          <div className=" mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <p className='opacity-65'>Ishlab ciqarilgan sana Chiqarilgan yili</p>
                <input className='border-black bg-gray-100 rounded-xl px-5 py-4' style={{width:'40vh'}}  type='date' placeholder='дд.мм.гг' />
              </div>
              <div className="">
                <p className='opacity-65'>Xizmatning tugash sanasi</p>
                <input className='border-black bg-gray-100 rounded-xl px-5 py-4' style={{width:'40vh'}} type="date" placeholder='дд.мм.гг' />
              </div>
            </div>
          </div>
          <p className='mt-5 opacity-65'>GAZ sinov o'tkazilgan sana Amal qilish muddati</p>
          <div className="Ges_test">
            <div className="grid grid-cols-2 gap-4">
              <input className='border-black bg-gray-100 rounded-xl px-5 py-4' style={{width:'40vh'}} type="date" placeholder='дд.мм.гг' />
              <input className='border-black bg-gray-100 rounded-xl px-5 py-4' style={{width:'40vh'}} type="date" placeholder='дд.мм.гг' />
            </div>
          </div>

          <div className=' -ml-72 mt-20'>
          <div className='columns'>
            <div className='column is-1'>
              <Link to='/' type='button' className="custom-btn-1 btn-311 buttonnn-1112" style={{marginLeft:'290px'}}><span>Yopish</span></Link>
            </div>
            <div className='column'>
              <button className="custom-btn-1 btn-3 buttonnn-1113 " >
              <span>Qo'shish</span>
              </button>
            </div>
          </div>
        </div>
          </div>
      </div>

    </div>
  )
}

export default Gaz