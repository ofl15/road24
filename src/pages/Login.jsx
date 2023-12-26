import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
// import logo2 from "../assests/logo3.png";
// import { Link } from "react-router-dom";
import { logo } from "../assets";
import { logo3 } from "../assets";

const Login = () => {
  return (
    <div className="login">
      <div className="r-top">
        <img className="logo2" src={logo} alt="" />
        <p>Road 24</p>
        <img className="logo3" src={logo3} alt="" />
      </div>
      <div className="r-parent">
        <div className="r-left">
          <p>Saytimizdan foydalanish uchun birinchi ro'yxatdan o'ting</p>
          <button>
            <FaArrowAltCircleRight />
          </button>
        </div>
        <div className="r-center">
          <div className="r-register">
            <div className="logo">
              <img src={logo} alt="" />
              <p className="r-title">Road24</p>
            </div>
            <div className="l-title">
              <p>Telefon raqamingizni kiriting :</p>
            </div>
            <div className="l-input">
              <input type="text" />
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="r-right">
          <div className="texts">
            <h3>Bu yerda ko'rishingiz mumkin :</h3>
            <div className="r-item">
              <li>YHXX jarimalarini </li>
              <FaRegCheckCircle className="r-check" />
            </div>
            <div className="r-item">
              <li>MIB jarimalarini </li>
              <FaRegCheckCircle className="r-check" />
            </div>
            <div className="r-item">
              <li>Sug'urta muddati </li>
              <FaRegCheckCircle className="r-check" />
            </div>
            <div className="r-item">
              <li>Texnik ko'rik muddati </li>
              <FaRegCheckCircle className="r-check" />
            </div>
            <div className="r-item">
              <li>Tonirovka ruxsatnomasi muddati </li>
              <FaRegCheckCircle className="r-check" />
            </div>
          </div>
          <div className="icons">
            <FaArrowDown />
          </div>
        </div>
      </div>
      <div className="test"></div>
    </div>
  );
};

export default Login;