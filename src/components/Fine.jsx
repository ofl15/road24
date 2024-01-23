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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1500.4390910837208!2d64.44430520239793!3d39.77135991173867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1706026858957!5m2!1sru!2s" width="100%"loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
      </Link>
      <hr />
    </div>
  );
}