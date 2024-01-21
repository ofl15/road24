import React, { useEffect, useState } from "react";
import axios from "axios";
import { CARS } from "../urls";
import Cars from "../components/Cars";
import Car from "../components/Car";
import { useNavigate } from "react-router-dom";

const Main = () => {
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


  const navigate = useNavigate()
  const isAuthenticated = localStorage.getItem("user") && localStorage.getItem("token")


  if (!isAuthenticated) {
    return navigate('/login')
  }

  return (
    <div>
      <Car cars={cars} />
    </div>
  );
};

export default Main;
