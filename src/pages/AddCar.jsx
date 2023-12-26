import React from 'react'


const AddCar = () => {
  return (
    <div className="AddCar">
      <div className="box">
        <h1 className='text1'>Avtomobil Qo'shish</h1>
        <br />
        <input id='input' type="text" placeholder='80 A 777 AA'/>
        <br />
        <br />
        <br />
        <div className="box1">
          <input className='input1' type="text" placeholder='AAF' />
          <input className='input2' type="number" />

          <div className="texpasport">
            
          </div>
        </div>
        <div className="box2">
        <button className='btn1'>Yopish</button>
        <button className='btn2'>Keyingisi</button>
        </div>
        </div>
    </div>
  )

}

export default AddCar