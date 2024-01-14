import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GiInfo } from "react-icons/gi";
import { BiSolidFilePdf } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { FINE, FINE_DETAIL } from "../urls";
import axios from "axios";

export default function FineDetail() {
    

  const [fine, setFine] = useState();
    
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(FINE_DETAIL.replace("id", id))
      .then((res) => setFine(res.data.data  ))
      .catch((err) => console.log(err));
  }, []);




  const modda = fine ? fine.attributes.modda : ''
  const summa = fine ?  fine.attributes.summa : ''
  const tavsif = fine ?  fine.attributes.Tavsif : ''
  const address = fine ?  fine.attributes.address : ''
  const number = fine ?  fine.attributes.car.data.attributes.number : ''
  const thumb = fine ?  fine.attributes.car.data.attributes.image.data.attributes.formats.large.url : ''
  
   
  return (
    <div className="jarimalar">
        <div className="left">
        <div className="info">
            <div className="flex px-3 py-3  ml-28 margin-t">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={`http://localhost:1337${thumb}`}
                  alt="Sunset in the mountains"
                />
              </div>
            </div>
            <div className="inp ml-52  mt-20">
              <input
                type="text"
                value={number}
                className=" bg-slate-300 py-2 text-2xl  justify-center items-center w-48"
                style={{ color: "#198e7c" }}
              />
            </div>
          </div>
        </div>
      <div className="right">
        <h1>RA23705433979</h1>

        {fine && (
          <div className="j-box">
            <div className="jarimalar-items">
              <div className="jarimalar-item">
                <h3>Qoidabuzarlik sanasi :</h3>
                <p>01-yanvar 2024 - yil(4 kun avval)</p>
              </div>
              <div className="jarimalar-item">
                <h3>Qoidabuzarlik moddasi :</h3>
                <p>{modda}</p>
              </div>
              <div className="jarimalar-item">
                <h3>Qoidabuzarlik tavsifi :</h3>
                <p>
                  {tavsif} <br />
                  <span>Batafsil</span>{" "}
                </p>
              </div>
              <div className="jarimalar-item">
                <h3>Qoidabuzarlik joyi :</h3>
                <p>{address}</p>
              </div>
            </div>
            <div className="location">
              <iframe
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49060.96211378192!2d64.38159847489527!3d39.77759498159774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s"
              ></iframe>
            </div>
          </div>
        )}

        <div className="end">
          <h2>JARIMA SUMMASI (chegirmasiz)</h2>
          <span>{summa} so'm</span>

          <div className="end-f">
            <button className="end-btn">
              <GiInfo /> Huquq va majburiyatlaringiz <IoIosArrowForward />
            </button>
            <button className="end-btn">
              {" "}
              <BiSolidFilePdf />
              Qarorni yuklab olish PDF <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}