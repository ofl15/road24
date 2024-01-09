import React from "react";
import { TiCancel } from "react-icons/ti";
import { MdDirectionsCarFilled } from "react-icons/md";
import { BsFileText } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa6";
import { PiCarProfileLight } from "react-icons/pi";
import { CiCircleQuestion } from "react-icons/ci";
import { Link,  } from 'react-router-dom';
import MyAccordion from "../../components/MyAccordion";
import Infors from "../../components/Infors";



export default function Questions() { 

  return (
    <div className="questions">
      <div className="right">
        <Infors />
      </div>
      <div className="left">
        <MyAccordion  />
      </div>
    </div>
  );
}
