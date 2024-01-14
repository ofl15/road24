import React, { useRef, useState } from "react";
import "../assets/style.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CARS } from "../urls";
import axios from "axios";
import { BiImageAdd } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SelectCar = () => {
  const { carnumber, tectnumber } = useParams();                                                                                                                      
  const [mark, setMark] = useState("");
  const [model, setModel] = useState("");
  const [file, setFile] = useState();

  const navigate = useNavigate();
  const [files, setFiles] = useState();
  
  const uploadImage = async (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("files", files[0]);
    axios.post("http://localhost:1337/api/upload", formData).then((res) => {
      const imageId = res.data[0];
      axios
        .post("http://localhost:1337/api/cars", {
              data: { image: imageId ,
                  number: carnumber ,
                  Tachniche: tectnumber ,
                  Brand: mark ,
                  Model: model
              },
        })
        .then((res) => {
          console.log(res.data.data, "---------------------------");
          navigate("/")
        });
    });
  };

  // file
  const inputRef = useRef(null);
  

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    setFile(URL.createObjectURL(event.target.files[0])); 


    // event.target.value = null;
  };

  //file



  const filling = (e) => {
    e.preventDefault();

    if (mark && model && files) {
      uploadImage();
    } else toast.error("Bosh joylarni to'ldiring!");
  };

  return (
    <form onSubmit={filling}>
      <div className="SelectCar" style={{zIndex:'99999'}}>
        <div className="addCar">
          <div className="columns">
            <div className="column is-1">
              <Link to="/addCar">
                <button className="back">
                  <IoIosArrowBack />
                </button>
              </Link>
            </div>
            <div className="column is-2">{/* NUMBER CAR */}</div>
          </div>
          {/* ->><LINK><<- */}
          <div className="infor">
            <button className="info">
              <button className="infomation">
                <PiWarningCircle />
              </button>
              <p>BILISH MUHIM</p>
              <div className="go">
                <i className="bi bi-chevron-right"></i>
              </div>
            </button>
          </div>
          {/* -> </LINK> <- тут будет линк "BILISH MIHIM"  */}
          {/* --------------------------------------------------------------------------------------------------------- */}
          <p className="carname">
            Avtomobil markasi <span>*</span>
          </p>
          {/* --------------------------------------------------------------------------------------------------------- */}

          <div className="ModelsCars">
            <div className="cars">
              <input
                className="input2 "
                type="text"
                style={{
                  marginLeft: "500px",
                  width: "600px",
                  fontSize: "24px",
                  padding: "3px 0",
                }}
                onChange={(e) => setMark(e.target.value)}
                value={mark}
              />
            </div>

            <p className="carname">
              Avtomobil modeli <span>*</span>
            </p>
            <div className="cars">
              <input
                className="input2  mb-2"
                type="text"
                style={{
                  marginLeft: "500px",
                  width: "600px",
                  fontSize: "24px",
                  padding: "3px 0",
                }}
                onChange={(e) => setModel(e.target.value)}
                value={model}
              />
            </div>
          </div>

          <p className="carfoto">Mashinani rasmini qoshish</p>
          <div className="carfotos">
            {file ? (
              <div className="add_image ">
                <img
                  style={{ width: "300px", height: "" }}
                  className="ml-44"
                  src={file}
                  alt=""
                />
              </div>
            ) : (
              <div className="add_image">
                <div>
                  {/* <input
                    style={{ display: "none" }}
                    ref={inputRef}
                    type="file"
                    // onChange={handleFileChange}
                    onChange={(e) => {
                      setFile(e.target.value);
                      handleFileChange()
                    }}
                     // value={file}
                  /> */}
                  <input
                    style={{ display: "none" }}
                    ref={inputRef}
                    className="ml-96 "
                    type="file"
                    // onChange={handleFileChange}
                    onChange={(e) => {setFiles(e.target.files)
                            handleFileChange(e)
                    }}
                    // value={files}
                  />
                  <button className="add_image1 custom-btn-1 btn-140" type="button" onClick={handleClick}>
                    <BiImageAdd className=" ml-60"/>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="BackNext">
            <div className="columns">
              <div className="column is-1">
                {/* <Link to="/"> */}
                  <Link to='/' type='button' className="custom-btn-1 btn-311 buttonnn-1112"><span>Yopish</span></Link>
                {/* </Link> */}
              </div>
              <ToastContainer />
              <div className="column">
                <button className=" custom-btn-1 btn-3 buttonnn-1113 text-white "><span>Qo'shish</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SelectCar;
