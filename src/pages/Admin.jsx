import React, { useEffect, useState } from "react";
import "../assets/style.scss";
import { Link, useNavigate } from "react-router-dom";
import { CARS, FINE } from "../urls";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SelectCar = () => {

  const [modda , setModda] = useState('')
  const [address , setAddress] = useState('')
  const [tavsif , setTavsif] = useState('')
  const [summa , setSumma] = useState(0)
  const [number , setNumber] = useState("")
  
  const navigate = useNavigate()
  
  const [cars, setCars] = useState([]);

  const createCar = () => {
    axios
      .post(FINE, {
        data: {
          modda: modda,
          address: address,
          Tavsif: tavsif,
          summa: summa,
          plate: number,
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  

  const filling = e => {
    e.preventDefault()

    if (modda && tavsif) {
      createCar()
    } else(
      toast.error("Bosh joylarni to'ldiring!")
    )
  }


console.log(number);

  const load = () => {
    axios
      .get(CARS)
      .then((res) => setCars(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="SelectCar">
      <div className='addCar'>
        <div className='columns'>
          <div className='column is-1'>
            <Link to='/addCar'>
              <button className='back'>
               <IoIosArrowBack/>
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
              <PiWarningCircle />
            </button>
            <p>BILISH MUHIM</p>
            <div className='go'>
              <i className="bi bi-chevron-right"></i>
            </div>
          </button>
        </div>

        <p className='carname'>
          Modda <span>*</span>
        </p>


        <div className='ModelsCars'>
          <div className='cars'>
            <input className="input2 "  type="text" style={{marginLeft:'500px' , width:'600px' , fontSize:'24px' , padding:'3px 0'}} onChange={(e)=> setModda(e.target.value)}  value={modda}/>
          </div>

          <p className='carname'>
            Qoidabuzarlik Tavsifi <span>*</span>
          </p>
          <div className='cars'>
            <input className="input2 "  type="text" style={{marginLeft:'500px' , width:'600px' , fontSize:'24px' , padding:'3px 0'}} onChange={(e)=>setTavsif(e.target.value)}  value={tavsif}/>
          </div>

          <p className='carname'>
            Address <span>*</span>
          </p>
          <div className='cars'>
            <input className="input2 "  type="text" style={{marginLeft:'500px' , width:'600px' , fontSize:'24px' , padding:'3px 0'}} onChange={(e)=>setAddress(e.target.value)}  value={address}/>
          </div>

          <p className='carname'>
            Summa <span>*</span>
          </p>
          <div className='cars'>
            <input className="input2 "  type="number" style={{marginLeft:'500px' , width:'600px' , fontSize:'24px' , padding:'3px 0'}} onChange={(e)=>setSumma(e.target.value)}  value={summa}/>
          </div>
        </div>


        {/* <div class="relative inline-block text-left ml-96">
          <div class="group">
              <button type="button"
                  class="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  Open Menu
                  <svg class="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                  </svg>
              </button>
              <div
                  class="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div class="py-1">
                    {cars &&
                            cars.map((category) => (
                              <a
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                key={category.id}
                              >
                                {category.attributes.number}
                              </a>
                            ))}
                  </div>
              </div>
          </div>
      </div> */}

              <select
                class=" w-sm flex justify-center items-center text-sm mt-7 font-medium transition duration-75 border border-gray-800 rounded-lg ml-96 shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                onChange={(e) => setNumber(e.target.value)} 
                value={number} 
                style={{marginLeft:'500px',  width:'600px' , height:'40px' , fontSize:'25px', border:'solid 3px #000'}}
              >
                {cars &&
                  cars.map((category) => (
                    <option
                      value={category.attributes.number}
                      className="block px-4 text-sm text-gray-700 hover:bg-gray-100"
                      key={category.id}
                    >
                      {category.attributes.number}
                    </option>
                  ))}
              </select>



        <div className='BackNext'>
          <div className='columns'>
            <div className='column is-1'>
              <Link to="/">
                <button className='Back'>
                  Yopish
                </button>
              </Link>
            </div>
            <ToastContainer />
            <div className='column'>
              <button  className='Next' onClick={filling}>
                Qo'shish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCar;
