import React from 'react'
import Infors from './Infors'

const modda = () => {
  return (
    <div className='Main grid grid-cols-2 gap-4'>
      <Infors />
    <div className="signs" >
        <h1 className='mt-2 text-3xl'>Sug'urta</h1>
        <div className="flex py-3 gap-4">
            <div className="rounded overflow-hidden shadow-lg cursor-pointer py-6 px-4" style={{width:'500px'}}>
                <p>Sug'urta deganda yuridik yoki jismoniy shaxslar to'laydigan sug'urta
                    mukofotlaridan shuningdek
                    sug'urtalovchining boshqa mablag'laridan
                    shakilantiriladigan pul fondlari hisobidan
                    muayyan vogea (sug'urta hodisasi) yuz
                    berganda ushbu shaxslarga sug'urta
                    shartnomasiga muvofiq sug'urta tovonini
                    (sug'urta pulini) to'lash yo'li bilan ularning manfaatlarini himoya qilish tushuniladi.</p>
                    <p className='mt-3' style={{fontWeight:'600'}}>
                    MAJBURIY SUG'URTA SHARTNOMASI
                    MUDDATI O'TIB KETGANLIGI YOKI
                    YO'QLIGI UCHUN JARIMA</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default modda