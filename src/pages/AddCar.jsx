import React, { useEffect, useState } from "react";
import { texpasport } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import IMask from "imask";
import { CARS } from "../urls";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCar = () => {
  const [carNumber, setCarNumber] = useState();
  const [tectNumber, setTectNumber] = useState();

  const navigate = useNavigate()

  const notify = () =>  toast.error("Bosh joylarni to'ldiring!");

  const filling = e => {
    e.preventDefault()

    if (carNumber && tectNumber) {
      navigate(`/selectcar/${carNumber}/${tectNumber}`)
    }else{
      notify()
    }
  }

  return (
    <div className="AddCar">
      <div className="box">
        <form>
          <h1 className="text1">Avtomobil Qo'shish</h1>
          <br />
          <input
            id="input"
            type="text"
            placeholder="80 A 777 AA"
            onChange={(e)=>setCarNumber(e.target.value)}
            value={carNumber}
          />
          <br />
          <br />
          <br />
          <div className="box1">
            <input
              className="input2"
              type="text"
              onChange={(e)=>setTectNumber(e.target.value)}
              value={tectNumber}
              placeholder="AAF1234567"
            />
          </div>
          <div className="texpasport">
            <img className="texpasport" src={texpasport} alt="1" />
          </div>
          <div className="box2 ">
            <Link to="/" type="button" className="custom-btn btn-2" style={{background:'rgb(6,14,131)' , background:'linear-gradient(0deg, rgba(6,14,131,1) 0%, rgba(12,25,180,1) 100%)'}}>
              {" "}
              Yopish
            </Link>
            <ToastContainer />
            <button onClick={filling} type="button" className="btn-12 custom-btn-1 text-black -ml-9">
            <span>Click!</span><span>Keyingisi</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
