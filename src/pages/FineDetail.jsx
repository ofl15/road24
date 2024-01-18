import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GiInfo } from "react-icons/gi";
import { BiSolidFilePdf } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { CARD, CARDD, FINE_DETAIL } from "../urls";
import axios from "axios";
import { humo, uzcard } from '../assets';
import Modal from "../components/Modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FineDetail() {
  const [card, setCard] = useState('');
  const [fine, setFine] = useState(null);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = () => {
    setIsLoading(true);
  
    axios
      .put(FINE_DETAIL.replace("id", id), 
      {
        data:{
          is_payment: true ,
        },
        })
      .then((res) => {
        console.log("Jarima to'landi:", res.data);
        closeModal()
        toast.success("Jarima to'landi!")
        setTimeout(() => {
          navigate("/jarimalar");
        }, 1500);
      })
      .catch((err) => {
        console.error("Jarima to'lashda xatolik:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  


  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  function addStarToString(str) {
    const stars = Array(11).fill("*").join("");
    const newStr = str.slice(0, 4) + stars + str.slice(17);
    return newStr;
  }
  
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
  const date = fine ?  fine.attributes.releaseDate : ''
  const number = fine ?  fine.attributes.car.data.attributes.number : ''
  const thumb = fine ?  fine.attributes.car.data.attributes.image.data.attributes.formats.large.url : ''
  const random = fine ?  fine.attributes.idnum : ''
  const boolean = fine ?  fine.attributes.is_payment : ''
  
  
  const cardNum = card ? card.attributes.num : "";
  const cardDate = card ? card.attributes.date : "";
  const cardHolder = card ? card.attributes.Name : "";
  const moneyy = card ? card.attributes.money : "";
  const iddd = card ? card.id : "";

  
    const minus = moneyy - summa
  
    const calculate = () => {
      axios.put(CARDD.replace('id' , iddd), {
        data: {
          money: minus
        }
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err, '----------');
      });
    };
    
  
    const verification = () => {
      if (moneyy > summa ) {
        handlePayment();
        calculate();
      } else if(!card) {
        closeModal()
        toast.warn("Karta qo'shilmagan")
        setTimeout(() => {
          navigate('/card')
        }, 2000);
      } else {
        closeModal()
        toast.warn("Kartangizda yetarli mablag' mavjud emas!")
      }
    } 


  
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

    
  const load = () => {
    axios
    .get(CARD)
    .then((res) => setCard(res.data.data[0]))
    .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    load();
  }, []);

  return (
<div className="jarimalar">
      <div className="left">
        <div className="info">
          <div className="flex px-3 py-3 ml-28 margin-t">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={`http://localhost:1337${thumb}`}
                alt="Sunset in the mountains"
              />
            </div>
          </div>
          <div className="inp ml-52 mt-20">
            <input
              type="text"
              value={number}
              className="bg-slate-300 py-2 text-2xl justify-center items-center w-48"
              style={{ color: "#198e7c" }}
            />
          </div>
        </div>
      </div>
      <div className="right">
        <h1>{random}</h1>

        {fine && (
          <div className="j-box">
            <div className="jarimalar-items">
              <div className="jarimalar-item">
                <h3>Qoidabuzarlik sanasi :</h3>
                <p>{date}</p>
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
          <span>{maskNumbers(summa)} so'm</span>

          <div className="end-f">
            {boolean === false ? (
            <button onClick={openModal} className="end-btn mr-10">
              <GiInfo /><span>Jarimani to'lash</span>  <IoIosArrowForward />
            </button>
            ) : ''}

            <ToastContainer />
            <button className="end-btn">
              {" "}
              <BiSolidFilePdf /> <span>Qarorni yuklab olish PDF</span>
               <IoIosArrowForward />
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <div className="m-form">
                <div className="m-flex">
                  <div className="m-top">
                    <div>Karta orqali to'lash </div>

                    <div>
                      <IoCloseCircleOutline
                        className="close-two"
                        onClick={closeModal}
                      />
                    </div>
                  </div>
                  <div className="m-center ml-12">
                    <div class="credit-card h-max relative select-none pointer-events-none">
                      <div class="verso z-1 absolute overflow-hidden transform translate-y-12 left-16 w-96 h-56 rounded-2xl bg-gray-400 shadow-2xl">
                        <div class="w-full h-12 bg-gray-200 absolute top-10">
                          &nbsp;
                        </div>
                      </div>

                    <div
                    class="recto z-2 absolute overflow-hidden w-96 h-56 rounded-2xl px-8 py-6 bg-black text-white shadow-xl flex flex-col justify-end gap-6">
                    <div class="logo absolute top-6 right-8 w-16 h-8 flex justify-items-center items-center">
                      {cardNum.slice(0,4) === '9860' ? (
                        <img src={humo} alt="" className='ml-2 mt-10' /> ):
                         (<img src={uzcard} alt="" className='ml-5 mt-10' style={{width:'50px' , height:'70px'}}/>) }
                    </div>

                        <div class="pin w-11 h-7 rounded bg-yellow-100">
                          &nbsp;
                        </div>

                        <div
                          class="number whitespace-nowrap text-2xl font-semibold"
                          style={{ fontFamily: "Courier new, mono" }}
                        >
                          {addStarToString(cardNum)}
                        </div>

                        <div class="credentials flex gap-8">
                          <div class="owner flex flex-col w-max">
                            <span class="text-xs uppercase">Card holder</span>
                            <span class="whitespace-nowrap text-lg">
                              {cardHolder}
                            </span>
                          </div>
                          <div class="expires flex flex-col w-max">
                            <span class="text-xs uppercase">Expires</span>
                            <span class="whitespace-nowrap text-lg">
                              {cardDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-buttons">
                  <button className="close-btn" onClick={closeModal}>
                    Yopish
                  </button>
                  <button onClick={verification} disabled={isLoading} className="submit-btn">
                    To'lash
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}