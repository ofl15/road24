import React from 'react'
import '../assets/style.scss'
import { Link } from 'react-router-dom'
// import bmw from '../img/BMW_logo_(gray).svg.png'

const SelectCar = () => {

  return (
    <div><div className='addCar'>
      <div className='columns'>
        <div className='column is-1'>
          <Link to='/addCar'>
            <button className='back'>
              <i className="bi bi-chevron-left"></i>
            </button>
          </Link>
        </div>
        <div className='column is-2'>
          {/* NUMBER CAR */}
        </div>
      </div>
      {/* ->><LINK><<- */}
      <div className='infor'>
        <button className='info'>
          <button className='infomation'>
            <i className="bi bi-info-lg"></i>
          </button>
          <p>BILISH MUHIM</p>
          <div className='go'>
            <i className="bi bi-chevron-right"></i>
          </div>
        </button>
      </div>
      {/* -> </LINK> <- тут будет линк "BILISH MIHIM"  */}
      {/* --------------------------------------------------------------------------------------------------------- */}
      <p className='carname'>
        Avtomobil markasi <span>*</span>
      </p>
      {/* --------------------------------------------------------------------------------------------------------- */}




      <div className='ModelsCars'>
        <div className='cars'>
          <select name="user_profile_color_1">
            <optgroup label='Avtomobil markasi'>
              <input type="text" />
              <option value="1">CHEVOLET</option>
              <option value="2">UAZ</option>
              <option value="3">GAZ</option>
              <option value="4">BMW</option>
              <option value="5">FORD</option>
              <option value="6">HONDA</option>
              <option value="7">LADA</option>
              <option value="8">MAN</option>
              <option value="9">Mercedes-Bens</option>
              <option value="10">Porsche</option>
              <option value="11">Isuzu</option>
              <option value="12">Kia</option>
              <option value="13">Land Rover</option>
              <option value="14">Manzda</option>
              <option value="15">Rolls-Royce</option>
              <option value="16">Toyato</option>
              <option value="17">Volkswagen</option>
              <option value="18">Daf</option>
            </optgroup>
          </select>
        </div>




        <p className='carname'>
          Avtomobil modeli <span>*</span>
        </p>
        <div className='cars'>
          <select name="user_profile_color_1">
            <optgroup label='Avtomobil modellari'>
              <option className='CHEVOLET' value="1">CHEVOLET</option>
              <option value="1">Malibu</option>
              <option value="2">Gentra</option>
              <option value="3">Nexia</option>
              <option value="4">Cobalt</option>
              <option value="5">Spark</option>
              <option value="6">Chevrolet Silverado</option>
              <option value="6">Chevrolet Blazer EV</option>
              <option className='CHEVOLET' value="1">UAZ</option>
              <option value="6">УАЗ-452</option>
              <option value="6">UAZ-3909</option>
              <option value="6">UAZ-39094</option>
              <option value="6">UAZ-3741</option>
              <option className='CHEVOLET' value="1">GAZ</option>
              <option value="6">ГАЗ-ММ</option>
              <option value="6">ГАЗ-12</option>
              <option value="6">ГАЗ-M-20</option>
              <option className='CHEVOLET' value="1">BMW</option>
              <option value="6">BMW F90</option>
              <option value="6">BMW iX1</option>
              <option value="6">BMW iX</option>
              <option value="6">BMW i4</option>
              <option value="6">BMW i7</option>
              <option value="6">BMW i7 M70 xDrive</option>
              <option value="6">BMW XM</option>
              <option value="6">BMW M340i petrol</option>
            </optgroup>
          </select>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------------------- */}
      <div className='carfoto'>
        <p>Mashinani rsmini qoshish</p>
        {/* FOTO CARS */}
      </div>
      {/* --------------------------------------------------------------------------------------------------------- */}
      <div className='BackNext'>
        <Link to="/">
          <button className='Back'>
            Yopish
          </button>
        </Link>
        <button className='Next'>
          Qo'shish
        </button>
      </div>
    </div>
    </div>
  )
}

export default SelectCar