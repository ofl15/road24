import React, { useEffect, useState } from "react";
import { texpasport } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CARS } from "../urls";
import axios from "axios";

const AddCar = () => {
  const [carNumber, setCarNumber] = useState();
  const [tectNumber, setTectNumber] = useState();
  const [carsList, setCarsList] = useState([]);
  const [car, setCar] = useState("");

  const navigate = useNavigate();

  const notify = () => toast.error("Bosh joylarni to'ldiring!");

  const filling = (e) => {
    e.preventDefault();
    const sliceToCheck = carNumber.slice(4, 7);

    if (carNumber && tectNumber) {
      if (
        carNumber.slice(0, 2) === "01" ||
        carNumber.slice(0, 2) === "10" ||
        carNumber.slice(0, 2) === "20" ||
        carNumber.slice(0, 2) === "25" ||
        carNumber.slice(0, 2) === "30" ||
        carNumber.slice(0, 2) === "40" ||
        carNumber.slice(0, 2) === "50" ||
        carNumber.slice(0, 2) === "60" ||
        carNumber.slice(0, 2) === "70" ||
        carNumber.slice(0, 2) === "75" ||
        carNumber.slice(0, 2) === "80" ||
        carNumber.slice(0, 2) === "85" ||
        carNumber.slice(0, 2) === "90" ||
        carNumber.slice(0, 2) === "95"
      ) {
        if (carsList.includes(carNumber)) {
          toast.error("Kiritilgan mashina mavjud!");
        } else {
          if (tectNumber.length !== 10 || carNumber.length !== 9) {
            toast.error("xato ma'lumot kiritildi!");
          } else {
            if (
              tectNumber.slice(0, 3) === "AAF" ||
              tectNumber.slice(0, 3) === "AAD"
            ) {
              if (/^\d+$/.test(sliceToCheck)) {
                const parsedSlice = parseInt(sliceToCheck);
                if (!isNaN(parsedSlice)) {
                  navigate(`/selectcar/${carNumber}/${tectNumber}`);
                } else {
                  toast.error("xato ma'lumot kiritildi!");
                }
              } else {
                toast.error("xato ma'lumot kiritildi!");
              }
            } else {
              toast.error("xato ma'lumot kiritildi!");
            }
          }
        }
      } else {
        toast.error("xato ma'lumot kiritildi!");
      }
    } else {
      notify();
    }
  };

  const fetchCars = () => {
    axios
      .get(CARS)
      .then((res) => {
        const carNumbers = res.data.data.map(
          (carData) => carData.attributes.number
        );
        setCarsList(carNumbers);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const isAuthenticated =
    localStorage.getItem("user") && localStorage.getItem("token");

  if (!isAuthenticated) {
    return navigate("/login");
  }

  return (
    <div className="AddCar">
      <div className="box">
        <form>
          <h1 className="text-4xl mt-7 ml-12 ">Avtomobil Qo'shish</h1>
          <br />
          <input
            id="input"
            type="text"
            placeholder="80 A777AA"
            onChange={(e) => {
              setCarNumber(e.target.value.toUpperCase()); // Convert to uppercase
            }}
            value={carNumber}
          />
          <br />
          <br />
          <br />
          <div className="box1">
            <input
              className="input2"
              type="text"
              onChange={(e) => {
                setTectNumber(e.target.value.toUpperCase()); // Convert to uppercase
              }}
              value={tectNumber}
              placeholder="AAF1234567"
            />
          </div>
          <div className="texpasport">
            <img className="texpasport" src={texpasport} alt="1" />
          </div>
          <div className="box2 ">
            <Link
              to="/"
              type="button"
              className="custom-btn btn-2"
              style={{
                background: "rgb(6,14,131)",
                background:
                  "linear-gradient(0deg, rgba(6,14,131,1) 0%, rgba(12,25,180,1) 100%)",
              }}
            >
              {" "}
              Yopish
            </Link>
            <ToastContainer />
            <button
              onClick={filling}
              type="button"
              className="btn-12 custom-btn-1 text-black -ml-9"
            >
              <span>Click!</span>
              <span>Keyingisi</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
