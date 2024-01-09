import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CARS } from '../urls';
import axios from 'axios';

const Infors = () => {

  const [cars, setCars] = useState([]);

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
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={cars.length}
        className='slider'
      >
        <Slider className='two'>
          {cars.map((car) => (
            <Slide index={car}>
              <div className='borderr flex px-3 py-3  ml-28 mt-16'>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="w-full" src={`http://localhost:1337${car.attributes.image.data.attributes.formats.thumbnail.url}`} alt="" />
                </div>
              </div>
              <div className='inp ml-52  mt-20'>
                <input type="text" value={car.attributes.number} className=' bg-slate-300  py-2 text-2xl  justify-center items-center w-48' style={{color:'#198e7c'}}/>
              </div>
            </Slide>
          ))}
        </Slider>
        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    );
  }

export default Infors