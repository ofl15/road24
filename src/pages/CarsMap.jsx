import React, {  useEffect, useState } from "react";
import { texpasport } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CARS } from "../urls";
import axios from "axios";
import AddCar from "./AddCar";

const CarsMap = () => {
  const [car , setCar] = useState('')


    const cars = () => {
        axios
          .get(CARS)
          .then((res) => setCar(res.data.data))
          .catch((err) => console.log(err));
      };
    
      useEffect(() => {
        cars();
      }, []);

    
  return (
    <div>
    {car &&
      car.map(
        (fine) => (
            <div key={fine.id}>
              <AddCar
                id={fine.id}
                modda={fine.attributes.modda}
              />
            </div>
          )
      )}
    </div>
  )
}

export default CarsMap