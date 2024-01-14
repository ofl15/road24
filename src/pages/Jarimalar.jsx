import React, { useEffect, useState } from "react";
import "../assets/style.scss";
import { IoIosArrowForward } from "react-icons/io";
import { GiInfo } from "react-icons/gi";
import { BiSolidFilePdf } from "react-icons/bi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import axios from "axios";
import { FINE } from '../urls'
import Fines from "../components/Fines";
import Infors from "../components/Infors";


export default function Jarimalar() {

  const [fines, setFines] = useState([]);
  
  const [randomNumber, setRandomNumber] = useState(11);
  const load = () => {
    axios
      .get(FINE)
      .then((res) => setFines(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    load();
  }, []);

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  }, []); 
  

  return (
    <div>
      <div className="jarimalar">
      <Infors />

        <Tabs selectedIndex={tabIndex} onSelect={handleTabChange}>
          <div className="jarimalar-tabs">
            <Link to={"/"}>
              <div className="tab-btn">
                <button className="btn">
                  <IoIosArrowBack /> 
                </button>
              </div>
            </Link>
            <div className="tabs">
              <TabList>
                <Tab>To'langan jarimalar ({fines.length})</Tab>
                <Tab>To'lanmagan jarimalar ({fines.length})</Tab>
              </TabList>
            </div>
          </div>

          <TabPanel>
           <Fines fines={fines} />
          </TabPanel>

          <TabPanel>
           
           <Fines fines={fines} />
          
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}