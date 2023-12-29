import React, { useState } from 'react'
import axios from 'axios';
import CARS from '../urls'
import Cars from '../components/Cars';

const Main = () => {

  const [cars , setCars]= useState([])

  
  const load = () => {
    axios.get(CARS)
    .then(res => setCars(res.data.data))
    .catch(err => console.log(err))
  }
  
  console.log(CARS,'-------');

  return (
    <div>
        <Cars cars={cars}/>
    </div>
    )
}

export default Main