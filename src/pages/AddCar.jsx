import React from 'react'
import { texpasport } from '../assets';
import { Link } from 'react-router-dom';

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

          
        </div>
        <div className="texpasport">
            <img className='texpasport' src={texpasport} alt="1" />
          </div>
        <div className="box2">
        <Link to="/"
        type="button" className='btn1'> Yopish</Link>
        <Link to="/SelectCar"
        type="button"
          className='btn2'>Keyingisi</Link>
        </div>
        </div>
    </div>
  )

}

export default AddCar