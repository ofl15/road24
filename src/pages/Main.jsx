import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CARS from '../urls'
import Cars from '../components/Cars';

const Main = () => {

  const [cars , setCars]= useState([])

  
  const load = () => {
    axios
      .get(CARS)
      .then((res) => setCars(res.data.data))
      .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    load();
  }, [setCars]);

  console.log(setCars,'----------');

  return (
    <div>
        <Cars cars={cars}/>
    </div>
    )
}

export default Main