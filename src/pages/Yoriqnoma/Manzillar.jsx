import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import {Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";


function Manzilar() {
  return (
    <>
    <div className="Manzilar">
        <div className="hamma12">
    <div className="bwdauyu">
        <Link className='btnishonchnoma' to="/yoriqnoma" type='button'><IoIosArrowBack/></Link>
        <p className='text232'>Manzilar(Texnik ko'rik va  Texpasport)</p>
    </div>
    <br />
    <div className="box999">
        <h1>Texnik ko'rikdan o'tkazish shaxobchangizni <br /> ilovaga qo'shish uchun:</h1>
        <div className="boxkl">
        <MdErrorOutline className='mt-1 text-2xl' />
        <p>Ma'lumotlarni to'ldiring</p>
        <FaChevronRight className='mt-2'/>

        </div>
    </div>
    <br />
    <h1 className='op'>Shahar yoki viloyatni tanlang</h1>
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Namangan viloyati</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Andijon viloyati</h1><br />
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Qashqadaryo viloyati</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Surxandaryo viloyati</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Buxoro viloyati</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Navoiy viloyati</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Xorazm viloyati</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Qaraqalpog'iston <br /> Respublikasi</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Toshkent shahri</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Toshkent viloyati</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Sirdaryo viloyati</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Jisax viloyati</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Samarqand viloyati</h1>
    <FaChevronRight />
    </div>
    <div className="rt">
    <hr />
    </div>
    <div className="tr">
    <h1 className='op'>Farg'ona  viloyati</h1>
    <FaChevronRight />
    </div>
    </div>
    </>
  )
}

export default Manzilar