import React from 'react'

const Sidebar = () => {

  const sides = [ 'Garaj', 'To`lovlar' , 'Yo`riqnoma' , 'Sozlamalar'  ]
  return (
    <div className=' border-r-2 w-1/6 fixed ' style={{height: '91vh'}} >
      <div className=' block  border-y-2 cursor-pointer' style={{padding: '68px 0'}}>
      <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}>Garaj</p>
      </div>
      <div className=' block border-y-2 cursor-pointer' style={{padding: '68px 0'}}>
      <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}>To`lovlar</p>
      </div>
      <div className=' block border-y-2 cursor-pointer' style={{padding: '68px 0'}}>
      <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}>Yo`riqnoma</p>
      </div>
      <div className=' block border-y-2 cursor-pointer' style={{padding: '68px 0'}}>
      <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'240px'}}>Sozlamalar</p>
      </div>
    </div>
  )
}

export default Sidebar