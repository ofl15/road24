import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa6";
import Infors from './Infors'

function CarOil() {
    return (
        <div className="grid grid-cols-2 gap-4">
                    <Infors />

            <div className="columns">
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
                    <p className='ml-44 mb-10 mt-1 text-3xl' style={{fontWeight:'600'}}>Avtomobil moyi</p>
                    </div>
                </div>
                    
                    <div className="Tests ">
                        <p className='CarTest opacity-55 text-3xl' style={{fontWeight:'600'}}>KEYINGI ALMASHTIRISH <span>---</span></p>
                        <p className='CarTest0 opacity-55 text-3xl mb-4' style={{fontWeight:'600'}}>ALMASHTIRISH PROBEGI <span>---</span></p>
                        <hr />
                    </div>
                    <div className=" mt-5">
                        <div className="grid grid-cols-2 gap-4">
                        <div className="">
                            <p className='opacity-65'>Oxirgi almashtirish</p>
                            <input className='border-black bg-gray-100 rounded-xl px-5 py-4' style={{width:'40vh'}}  type='date' placeholder='дд.мм.гг' />
                        </div>
                        <div className="">
                            <p className='opacity-65'>Yurgan masofa (probeg)</p>
                            <input className='border-black bg-gray-100 rounded-xl px-5 py-4' style={{width:'40vh'}} type="number" placeholder='00 km' />
                        </div>
                        </div>
                    </div>


                    <div className="ges_name mt-3">
                        <p className=' opacity-65'>Moy markasi</p>
                        <input className=' border-black bg-gray-100 rounded-xl px-5 py-4' style={{width:'86vh'}} type="text" placeholder='moy markasini korsating' />
                    </div>
                    <div className="ges_name mt-3">
                        <p className=' opacity-65'>Moy qancha km yurganda tavsiya etiladi</p>
                        <input className=' border-black bg-gray-100 rounded-xl px-5 py-4' style={{width:'86vh'}} type="text" placeholder='00 km' />
                    </div>
                    <div className="ges_name mt-3">
                        <p className=' opacity-65'>Kunlik masofa (1 kunda necha km yurasizx)</p>
                        <input className=' border-black bg-gray-100 rounded-xl px-5 py-4' style={{width:'86vh'}} type="text" placeholder='00 km' />
                    </div>
                                
                    <div className=' -ml-72 mt-10'>
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

export default CarOil