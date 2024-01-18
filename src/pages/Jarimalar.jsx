import React, { useEffect, useState } from "react";
import "../assets/style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { FINE } from '../urls'
import Fines from "../components/Fines";
import Infors from "../components/Infors";
import FalseFines from '../components/FalseFines'


export default function Jarimalar() {

  const [fines, setFines] = useState([]);
  
  const falseFines = fines.filter(fine => fine.attributes.is_payment === false);
  const trueFines = fines.filter(fine => fine.attributes.is_payment === true);

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
            <div className="tabs">
              <TabList>
                <Tab>To'lanmagan jarimalar ({falseFines.length})</Tab>
                <Tab>To'langan jarimalar ({trueFines.length})</Tab>
              </TabList>
            </div>
          </div>

          <TabPanel>
           <FalseFines fines={fines} />
          </TabPanel>

          <TabPanel>
           <Fines fines={fines} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}