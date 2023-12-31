import React from 'react'

const modda = () => {
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