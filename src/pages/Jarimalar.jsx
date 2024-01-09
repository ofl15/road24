import React from "react";
import "../assets/style.scss";
import { IoIosArrowForward } from "react-icons/io";
import { GiInfo } from "react-icons/gi";
import { BiSolidFilePdf } from "react-icons/bi";
import Infors from "../components/Infors";

export default function Jarimalar() {
  return (
    <div className="jarimalar">
      <div className="left">
        <Infors />
      </div>

      <div className="right">
        <h1>RA23705433979</h1>
        <div className="j-box">
          <div className="jarimalar-items">
            <div className="jarimalar-item">
              <h3>Qoidabuzarlik sanasi :</h3>
              <p>01-yanvar 2024 - yil(4 kun avval)</p>
            </div>
            <div className="jarimalar-item">
              <h3>Qoidabuzarlik moddasi :</h3>
              <p>128-modda 1-band</p>
            </div>
            <div className="jarimalar-item">
              <h3>Qoidabuzarlik tavsifi :</h3>
              <p>
                Tezlikni oshirish (20 km-dan ko'p bo'lmagan) <br />
                <span>Batafsil</span>{" "}
              </p>
            </div>
            <div className="jarimalar-item">
              <h3>Qoidabuzarlik joyi :</h3>
              <p>Abu Ali Ibn sino ko'chasi 0-4,3km</p>
            </div>
          </div>
          <div className="location">
            <iframe
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49060.96211378192!2d64.38159847489527!3d39.77759498159774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s"
            ></iframe>
          </div>
        </div>
        <div className="end">
          <h2>JARIMA SUMMASI (chegirmasiz)</h2>
          <span>330 000 so'm</span>

          <div className="end-f ">
          <button className="end-btn">
            <GiInfo className="mt-2 ml-1"/> Huquq va majburiyatlaringiz <IoIosArrowForward className="mt-2"/>
          </button>
          <button className="end-btn pt-3">
            {" "}
            <BiSolidFilePdf className="-mt-1" />
            Qarorni yuklab olish PDF <IoIosArrowForward className="-mt-1"/>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
