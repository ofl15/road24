import React, { useRef, useState } from "react";
import "../assets/style.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FINE } from "../urls";
import axios from "axios";
import { BiImageAdd } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SelectCar = () => {
  const { carnumber, tectnumber } = useParams();
  const [mark , setMark] = useState('')
  const [model , setModel] = useState('')

  const navigate = useNavigate()
  
  
  const createCar = () => {

    
    axios
    .post(FINE, {
      data: {
        number: carnumber,
        Tachniche: tectnumber,
        Brand: mark ,
        Model:model ,
        },
      })
      .then((res) => console.log(res.data) , navigate('/'))
      .catch((err) => console.log(err));
  };









  // file
  // const inputRef = useRef(null);

  // const handleClick = () => {

  //   inputRef.current.click();
  // };

//   const handleFileChange = event => {
//     const fileObj = event.target.files && event.target.files[0];
//     if (!fileObj) {
//       return;
//     }
  
//     setFile(URL.createObjectURL(event.target.files[0]));
//     setImg(fileObj);
  
//     event.target.value = null;
//   };
  
  //file

  const filling = e => {
    e.preventDefault()

    if (mark && model) {
      createCar()
    } else(
      toast.error("Bosh joylarni to'ldiring!")
    )
  }

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
            <input className="input2 "  type="text" style={{marginLeft:'500px' , width:'600px' , fontSize:'24px' , padding:'3px 0'}} onChange={(e)=>setMark(e.target.value)}  value={mark}/>
          </div>

          <p className='carname'>
            Qoidabuzarlik Tavsifi <span>*</span>
          </p>
          <div className='cars'>
            <input className="input2 "  type="text" style={{marginLeft:'500px' , width:'600px' , fontSize:'24px' , padding:'3px 0'}} onChange={(e)=>setModel(e.target.value)}  value={model}/>
          </div>

          <p className='carname'>
            Address <span>*</span>
          </p>
          <div className='cars'>
            <input className="input2 "  type="text" style={{marginLeft:'500px' , width:'600px' , fontSize:'24px' , padding:'3px 0'}} />
          </div>

          <p className='carname'>
            Summa <span>*</span>
          </p>
          <div className='cars'>
            <input className="input2 "  type="number" style={{marginLeft:'500px' , width:'600px' , fontSize:'24px' , padding:'3px 0'}}/>
          </div>
        </div>

        {/* <p className='carfoto'>Mashinani rsmini qoshish</p>
        <div className='carfotos'>
          {file ? (
            <div className="add_image ">
              <img style={{width:'300px' , height:''}} className="ml-44"  src={file} alt="" />
            </div>
          ) : (
            <div className="add_image">
              <div>
                <input 
                  style={{ display: 'none' }}
                  ref={inputRef}
                  type="file"
                  onChange={handleFileChange}
                  value={img}
                />

                <button className='add_image1' onClick={handleClick}><BiImageAdd /></button>
              </div>
            </div>
          )}
        </div> */}




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
