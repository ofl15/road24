import React, { useState , useRef, useEffect} from 'react'
import { HiOutlinePhone } from "react-icons/hi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
// import { logo, logo3 } from '../index';
import { logo } from '../assets';
import { logo3 } from '../assets';
import { USERS, VERIFICATION } from '../urls';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const [email , setEmail] = useState("")
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const [password2 , setPassword2] = useState("")
  const [userr, setUserr] = useState({});
  const [carsList, setCarsList] = useState([]);

  let navigate = useNavigate()

  const notify = () => toast.success("You successfully signed up");

  const register = event => {

     
      if(password === password2) {
          axios.post("http://localhost:1337/api/users", {username , email , password , confirmed: true, role: 1 })
          .then(res => {
            setTimeout(() => {
              navigate("/login");
            }, 1500);
            notify()
        })
          .catch(err => console.log(err))
      } else {
          throw Error('Password do not match')
      }
  }

  const usr = () => {
    axios
      .get(USERS)
      .then((res) => setUserr(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    usr();
  }, []);

  const fetchCars = () => {
    axios
      .get(USERS)
      .then((res) => {
        const carNumbers = res.data.map(
          (carData) => carData.username
        );
        setCarsList(carNumbers);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCars();
  }, []);




  const checking = (event) => {
    event.preventDefault()


    if (username && email && password && password2) {
      if (carsList.includes(username)) {
      toast.warn(`Kiritilgan username mavjud`)
      } else {
        register()
      }
    } else {
      toast.warn(`bo'sh joylarni to'diring`)
    }
  }

  return (
    <div className="register">
      <div className="r-top">
      <img className='logo2' src={logo} alt="" /> 
      <p>Road 24</p>
      <img className='logo3' src={logo3} alt="" />
      </div>
      <div className="r-parent">
        <div className="r-left">
         <p>Saytimizdan foydalanish uchun birinchi ro'yxatdan o'ting</p>
  
         <button><FaArrowAltCircleRight /></button>

        </div>
        <div className="r-center">
          <form onSubmit={checking}>
            <div className="r-register">
            {/* <div className="logo">
              <img src={logo} alt="" />
              <p className="r-title">Road24</p>
            </div> */}
            <div className="l-title">
              <p style={{fontWeight:'600'}}>Register</p>
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
                  type="email"
                  id='email'
                  className='input'
                  onInput={event => setEmail(event.target.value)}
                  value={email}
                  placeholder='email'
              />
            </div>
            <div className="l-input ml-7 w-72 h-10">
              <input
                  type='password'
                  id='password'
                  className='input'
                  onInput={event => setPassword(event.target.value)}
                  value={password}
                  placeholder='parol'
              />
            </div>
            <div className="l-input ml-7 w-72 h-10">
              <input
                  type='password'
                  id='password2'
                  className='input'
                  onInput={event => setPassword2(event.target.value)}
                  value={password2}
                  placeholder='parolni tasdiqlang'
              />
            </div>
            <ToastContainer />
              <button className='mt-2 text-white px-7 py-2 rounded bg-slate-500 hover:bg-zinc-400 hover:text-black transition-all'>Submit</button>
          </div>
            <Link to='/login' className='flex justify-center items-center mt-2 -mb-2 text-blue-400'>akkaunt bormi?</Link>
          </form>
        </div>
        <div className="r-right">
        <div className="texts">
          <h3>Bu yerda ko'rishingiz mumkin :</h3>
          <div className="r-item">
          <li>YHXX jarimalarini </li>
          <FaRegCheckCircle className='r-check' />
          </div>
          <div className="r-item">
          <li>MIB jarimalarini </li>
          <FaRegCheckCircle className='r-check' />
          </div>
         <div className="r-item">
         <li>Sug'urta muddati </li>
         <FaRegCheckCircle className='r-check' />
         </div>
          <div className="r-item">
          <li>Texnik ko'rik muddati </li>
          <FaRegCheckCircle className='r-check' />
          </div>
         <div className="r-item">
         <li>Tonirovka ruxsatnomasi muddati </li>
         <FaRegCheckCircle className='r-check' />
         </div>
        </div>
        <div className="icons">
        <FaArrowDown />
        </div>
        </div>
      </div>
    <div className="test">
    </div>
    </div>
  )
}

export default Register