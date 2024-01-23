import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { video } from "../assets";

export default function NotFound() {
  return (
    <div className="notfound">
      {/* <video autoPlay muted loop className="absolute z-50" style={{height:'90vh'}}>
        <source src={video} type="video/mp4" />
      </video> */}
      <div className="n-items">
        <h1>404</h1>
        <h1>Bu sahifa mavjud emas</h1>
        <Link to='/'>
          <button>
            <FaArrowLeft /> Asosiy sahifaga qaytish
          </button>
        </Link>
      </div>
    </div>
  );
}
