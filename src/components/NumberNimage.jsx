import React from 'react'

const NumberNimage = ({thumb , number}) => {
  return (
    <div className="info">
    <div className="flex px-3 py-3  ml-28 mt-16">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" style={{width:'400px' , height:''}} src={`http://localhost:1337${thumb}`} alt="Placeholder image" />
        </div>
    </div>
  <div className='inp ml-52  mt-20'>
    <input type="text" value={number} className=' bg-slate-300  py-2 text-2xl  justify-center items-center w-48' style={{color:'#198e7c'}}/>
  </div>

</div>
  )
}

export default NumberNimage