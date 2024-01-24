import React, { useEffect, useState } from 'react'
import { FaCar } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { BsJournalText } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { USER } from '../urls';
import axios from 'axios';


const Sidebar = () => {
  const [userr, setUserr] = useState({});
  const [username] = useState(JSON.parse(localStorage.getItem('user')) || []);

  const id = username.id;

  const usr = () => {
    axios
      .get(USER.replace('id', id))
      .then((res) => setUserr(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    usr();
  }, []);

  return (
    <div>
      {userr && userr.cars && userr.cars.length > 0  ?  (
        <div className=' border-r-2 fixed ' style={{height: '91vh' , width:'12%'}} >
          <Link to="/" className=' block  border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
            < FaCar  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
            <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>Garaj</p>
          </Link>
          <Link to='/tolovlar' className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
            < MdHistory  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
            <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>To`lovlar</p>
          </Link>
          <Link to="/yoriqnoma" className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
            < BsJournalText  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
            <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>Yo`riqnoma</p>
          </Link>
          <Link to="/sozlamalar" className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
            < IoSettingsOutline  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
            <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>Sozlamalar</p>
          </Link>
        </div>
        ) : (
          <div className=' border-r-2 fixed ' style={{height: '91vh' , width:'12%'}} >
          <Link to='/' className=' block  border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
            < FaCar  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
            <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>Garaj</p>
          </Link>
          <div className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
            < MdHistory  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
            <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>To`lovlar</p>
          </div>
          <div className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
            < BsJournalText  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
            <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>Yo`riqnoma</p>
          </div>
          <Link to="/sozlamalar" className=' block border-y-2 cursor-pointer' style={{padding: '56px 0'}}>
            < IoSettingsOutline  className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}/>
            <p className=' justify-center items-center text-2xl flex' style={{ width: '100vh', color:'#198e7c' , position:'relative' , right:'280px'}}>Sozlamalar</p>
          </Link>
        </div>
        ) }
      </div>
  )
}

export default Sidebar