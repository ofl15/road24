import React from "react";
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
