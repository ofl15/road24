import React from "react";
import { Link } from "react-router-dom";

export default function Fine({ id, modda, summa, tavsif, address , date , random }) {

   
  function maskNumbers(number) {
    const numberStr = number.toString();
    let result = "";
    
    for (let i = numberStr.length - 1; i >= 0; i--) {
      const indexFromEnd = numberStr.length - 1 - i;
      
      if (indexFromEnd > 0 && indexFromEnd % 3 === 0) {
        result = "." + result;
      }
      
      result = numberStr[i] + result;
    }
    
    return result;
  }



  return (
    <div className="fine-items">
      <Link to={`/fine/${id}`} >
      <div className="fine-item ">
        <div className="parent">
          <div className="child1">
            <div className="fine-number">
              <p>{random}</p>
            </div>
            <div className="fine">
              <p style={{ width: '175%' }}>{tavsif}</p>
              <span>{maskNumbers(summa)} so'm</span>
            </div>
            <div className="fine-location">
              <p style={{ width: '130%' }}>{address} <br />  <span>{date}</span></p>
            </div>
            <br />
          </div>
          <div className="child3">
            <div className="yhxx">
            </div>
          </div>
          <div className="child2">
            <div className="location-two">
              <iframe className=""
                width='100%'
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49060.96211378192!2d64.38159847489527!3d39.77759498159774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      </Link>
      <hr />
    </div>
  );
}