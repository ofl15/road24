import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { logo } from "../assets";
import { logo3 } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const notify = () => toast.success("You successfully logged in");

  
  const signIn = event => {
      event.preventDefault()

      axios.post('http://localhost:1337/api/auth/local' , { 
          identifier: username,
          password,
      })
          .then(res => {
              localStorage.setItem('user' , JSON.stringify(res.data.user))
              localStorage.setItem('token' , JSON.stringify(res.data.jwt))
              setTimeout(() => {
                navigate("/");
              }, 1500);
              notify()
          })
          .catch(err => console.log((err)))
  }

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
          <form onSubmit={event=> signIn(event)}>
            <div className="r-register">
            {/* <div className="logo">
              <img src={logo} alt="" />
              <p className="r-title">Road24</p>
            </div> */}
            <div className="l-title">
              <p style={{fontWeight:'600'}}>Login</p>
            </div>
            <div className="l-input ml-7 w-72 h-10">
              <input
                  type="text"
                  id='username'
                  className='input'
                  onInput={event => setUsername(event.target.value)}
                  value={username}
                  placeholder='Username ni kiriting'
              />
            </div>
            <div className="l-input ml-7 w-72 h-10">
              <input
                  type='password'
                  id='password'
                  className='input'
                  onInput={event => setPassword(event.target.value)}
                  value={password}
                  placeholder='email'
              />
              <ToastContainer />
            </div>
              <button className='mt-2 text-white px-7 py-2 rounded bg-slate-500 hover:bg-zinc-400 hover:text-black transition-all'>Submit</button>
            </div>
              <Link to='/register' className='flex justify-center items-center mt-5 -mb-5 text-blue-400'>akkaunt yo'qmi?</Link>
          </form>
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