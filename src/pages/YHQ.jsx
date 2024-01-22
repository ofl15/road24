import React, { useEffect, useState } from "react";
import "../assets/style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Infors from "../components/Infors";
import FineTheme from './FinesThems'
import AllSubstances from "../components/AllSubstances";

export default function Jarimalar() {



  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  

  return (
    <div>
      <div className="jarimalar">
      <Infors />

        <Tabs selectedIndex={tabIndex} onSelect={handleTabChange}>
          <div className="jarimalar-tabs">
            <Link to={"/"}>
              <div className="tab-btn">
                <button className="btn px-2 py-2 rounded-full">
                  <IoIosArrowBack  className=" text-2xl"/> 
                </button>
              </div>
            </Link>
            <div className="tabs -ml-36">
              <TabList>
                <Tab>Mavzular </Tab>
                <Tab>Barcha moddalar</Tab>
              </TabList>
            </div>
          </div>

          <TabPanel>
           <FineTheme />
          </TabPanel>

          <TabPanel>
           <AllSubstances />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}