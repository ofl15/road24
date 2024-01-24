import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CARS, USER, USERS } from '../urls';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";

const Infors = () => {
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


  const navigate = useNavigate()
  const isAuthenticated = localStorage.getItem("user") && localStorage.getItem("token")


  if (!isAuthenticated) {
    return navigate('/login')
  }

  return (
    <div>
    {userr && userr.cars && userr.cars.length > 0 ? (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={userr.cars.length}
        className='slider'
      >
        <Slider className='two'>
          {userr.cars.map((car) => (
            <Slide index={car.id} key={car.id}>
              <div className='borderr flex px-3 py-3 ml-28 mt-16'>
                <div className='max-w-sm rounded overflow-hidden '>
                  {car.image && car.image.formats && car.image.formats.large ? (
                    <img
                      className='w-full'
                      src={`http://localhost:1337${car.image.formats.large.url}`}
                      alt=''
                    />
                  ) : (
                    <p>No Image</p>
                  )}
                </div>
              </div>
              <div className='inp ml-52 mt-20'>
                <input
                  type='text'
                  value={car.number}
                  className='bg-slate-300 py-2 text-2xl justify-center items-center w-48'
                  style={{ color: '#198e7c' }}
                />
              </div>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    ) : (
      <Link to='/addCar' className='mt-80 fixed' style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' , zIndex:'6000' , width:'100vh' , height:'100vh ' }}>
        <h1 type='button' className='text-2xl' style={{ fontWeight: '600' }}>
          Mashina qo'shilmagan
        {/* <AiOutlinePlus className='flex justify-center items-center ml-80 '/> */}
        </h1>
      </Link>
    )}
  </div>
  );
};

export default Infors;