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
  
  
  const [id, setId] = useState([]);



  let date=new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let release = day - 2 + '.' + month + 1 + '.' + year
  let datee = day + '.' + month + 1 + '.' + year

  
  let x = Math.random() * 10000000000000;
  let y = Math.round(x);
  let random = "RA" + y

  
  const createCar = () => {
    axios
      .post(FINE, {
        data: {
          modda: modda,
          address: address,
          Tavsif: tavsif,
          summa: summa,
          is_payment: false ,
          date: datee ,
          releaseDate: release,
          idnum: random,
          car:{
            set: [number]
          }
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





  const loading = () => {
    axios
      .get(CARS)
      .then((res) => setId(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loading();
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



              <select
                class=" w-sm flex justify-center items-center text-sm mt-7 font-medium transition duration-75 border border-gray-800 rounded-lg ml-96 shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                onChange={(e) => setNumber(e.target.value)} 
                value={number} 
                style={{marginLeft:'500px',  width:'600px' , height:'40px' , fontSize:'25px', border:'solid 3px #000'}}
              >
                {id &&
                  id.map((category) => (
                    <option
                      value={category.id}
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
              <Link to='/' type='button' className="custom-btn-1 btn-311 buttonnn-1112"><span>Yopish</span></Link>
            </div>
            <ToastContainer />
            <div className='column'>
              <button className=" custom-btn-1 btn-3 buttonnn-1113 text-white " onClick={filling}>
              <span>Qo'shish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCar;
