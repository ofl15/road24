import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GiInfo } from "react-icons/gi";
import { BiSolidFilePdf } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { CARD, CARDD, FINE_DETAIL, USER_CARD } from "../urls";
import axios from "axios";
import { humo, uzcard } from '../assets';
import Modal from "../components/Modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jsPDF } from "jspdf";
import finePhoto from '../assets/finePhoto.jpg'


export default function FineDetail() {
  const [card, setCard] = useState('');
  const [fine, setFine] = useState(null);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);

  const [userr, setUserr] = useState([]);
  const [username] = useState(JSON.parse(localStorage.getItem('user')) || []);

  const idd = username.id;

  const usr = () => {
    axios
      .get(USER_CARD.replace('id', idd))
      .then((res) => setUserr(res.data.cards[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    usr();
  }, []);

  let paymentStatusText = "";
  if (fine && fine.attributes.is_payment) {
    paymentStatusText = "Jarima to'langan" ;
  } else {
    paymentStatusText = "Jarima to'lanmagan";
  }

  const generatePDF = () => {
    const pdf = new jsPDF();
  
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
  
    pdf.text("ROAD 24", 80, 10);
  
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    
    pdf.text(`${releaseDate}`, 10, 30)
    pdf.text(`Jarima raqami:${random}`, 75, 30)
    pdf.text("Buxoro viloyati", 170, 30)

    pdf.setFont("bold")
    pdf.text("Men, BUXORO VILOYATI YHXX GAI inspektori QURBONOV SHAVKAT QO'LDOSH OG'LI", 10, 50)
    pdf.setFont("helvetica", "normal");
    pdf.text("maxsus avtomatlashtirilgan foto va video moslamalari orqali qayd etilgan yo'l harakati qoidalarini", 10, 55)
    pdf.text("buzulishi tafsilotlarini ko'rib chiqib, qoyidagilarni aniqladim:", 10, 60)
    pdf.setFont("italic");
    pdf.text(`Qoidabuzarlik sanasi: ${date} `, 10, 70)
    pdf.text(`Qoidabuzarlik moddasi: ${modda}`, 10, 78)
    pdf.text(`Qoidabuzarlik tavfsifi: ${tavsif}`, 10, 86)
    pdf.text(`Qoidabuzarlik joyi: ${address}`, 10, 94)
    pdf.text(`Jarima summasi: ${summa} so'm`, 10, 102)
    pdf.text(`Jarima to'langani : ${paymentStatusText}`, 10, 110)
    pdf.setFont("helvetica", "bold");
    pdf.text(`O‘zbekiston Respublikasi MJtKning ${modda} - moddasiga asoslangan holda, QAROR :`, 10, 118)
    pdf.text("QILAMAN:", 10, 126)
    pdf.setFont("helvetica", "normal");
    pdf.text(`${model} rusumli, ${number} davlat raqam belgili transport vositasiga (${releaseDate}) O‘zbekiston  `, 10 , 134)
    pdf.text(`Respublikasi MJtKning ${modda} moddasiga asosan 330 000 so'm miqdorida jarima belgilansin.` , 10 , 142)
    pdf.text("Mazkur qaror ustidan e’tirozingiz bo‘lsa +998 (65) 221-86-05 telefon raqamiga soat 09:00", 10 , 150)
    pdf.text(" dan 18:00 gacha murojaat qilishingizni tavsiya qilamiz", 10 , 158)
    pdf.setFont("helvetica", "bold");
    pdf.text("Huquq va majburiyatlaringiz:" , 10, 166)
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text("Tayinlangan jarimani qaror chiqarilgan kundan boshlab 60 (oltmish) kundan kechiktirmay, ushbu qaror xususida shikoyat ", 10 , 175)
    pdf.text("berilgan yoki protest bildirilgan taqdirda esa, shikoyat yoki protest qanoatlantirilmaganligi to‘g‘risida xabar berilgan", 10 , 180)
    pdf.text("kundan e’tiboran 30 (o‘ttiz) kundan kechiktirmay to‘lashingiz lozim.  ", 10 , 185)
    pdf.text("Mazkur qaror chiqarilgan kundan e’tiboran 60 (oltmish) kun o‘tgach, jarima to‘lanmagan taqdirda, transport vositangiz", 10, 192)
    pdf.text("qarorning ijrosi yuzasidan ish yuritish tugaguniga  qadar ushlab turiladi.", 10, 197)
    pdf.text("Mazkur qaror ustidan yuqori turuvchi organga (mansabdor shaxsga) yoki jinoyat ishlar bo‘yicha tuman (shahar) sudyasiga", 10, 204)
    pdf.text("uning nusxasini olgan kuningizdan boshlab 10 (o‘n) kun ichida shikoyat berishingiz mumkin. Shikoyat ma’muriy huquqbu", 10, 209)
    pdf.text("zarlik to‘g‘risidagi ish yuzasidan qaror qabul qilgan organ (mansabdor shaxs) orqali yoki bevosita shikoyat yo‘llangan", 10, 214)
    pdf.text("sudga yuboriladi.", 10, 219)
    pdf.text("O‘zbekiston Respublikasi Ma’muriy javobgarlik to‘g‘risidagi kodeksi 3321-moddasiga muvofiq huquqbuzar unga jarima ", 10, 226)
    pdf.text("to‘g‘risidagi qaror topshirilgan kundan  boshlab o‘n besh kun ichida jarima miqdorining 50 foizini, o‘ttiz kun ichida 70", 10, 231)
    pdf.text("foizini ixtiyoriy ravishda to‘lagan taqdirda, u jarimaning qolgan qismini to‘lashdan ozod qilinadi, quydagilar mustasno", 10, 236)
    pdf.text("ushbu Kodeksning 131, 132, 136 va 140-moddalarida nazarda tutilgan huquqbuzarliklar sodir etilganda;", 10, 243 )
    pdf.text("jarima solish to‘g‘risidagi qaror ustidan shikoyat qilinganda yoki protest bildirilganda;", 10, 248)
    pdf.text("xuddi shunday huquqbuzarlik ma’muriy jazo chorasi qo‘llanilganidan keyin bir yil davomida takror sodir etilganda.", 10, 253)

    // setTimeout(() => {
      pdf.save("jarima.pdf");
    // }, 1000);
  };

  
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
    if(!userr) {
      toast.warn("Karta qo'shilmagan")
      setTimeout(() => {
        navigate('/card')
      }, 2000);
    } else {
    setIsModalOpen(true);
    }
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
  const date = fine ?  fine.attributes.date : ''
  const number = fine ?  fine.attributes.car.data.attributes.number : ''
  const thumb = fine ?  fine.attributes.car.data.attributes.image.data.attributes.formats.large.url : ''
  const model = fine ?  fine.attributes.car.data.attributes.Model : ''
  const random = fine ?  fine.attributes.idnum : ''
  const boolean = fine ?  fine.attributes.is_payment : ''
  const releaseDate = fine ? fine.attributes.releaseDate : ''

  const cardNum = userr ? userr.num : '';
  const cardDate = userr ? userr.date : '';
  const cardHolder = userr ? userr.Name : '';
  const moneyy = userr ? userr.money : '';
  const iddd = userr ? userr.id : '';
  // const iddd = userr ? userr.cards.id : '' ;
  console.log(cardNum);
  
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
                <p>{releaseDate}</p>
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
              <div className="jarimalar-item">
                <h3>JARIMA SUMMASI (chegirmasiz)</h3>
                <h4 className=" text-2xl text-red-600" style={{fontWeight:'500'}}>{maskNumbers(summa)} so'm</h4>
              </div>
            </div>
            <div className="location">
              <div className="child11">
              <img src={finePhoto} alt="" />
              </div>
              <div className="child22">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d911.7083157160358!2d64.44530096272233!3d39.77088603029141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1706017406186!5m2!1sru!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        )}

        <div className="end">

          <div className="end-f">
            {boolean === false ? (
            <button onClick={openModal} className="end-btn mr-10">
              <GiInfo /><span>Jarimani to'lash</span>  <IoIosArrowForward />
            </button>
            ) : ''}

            <ToastContainer />
            <button onClick={generatePDF} className="end-btn">
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
                      {/* {cardNum.slice(0,4) === '9860' ? (
                        <img src={humo} alt="" className='ml-2 mt-10' /> ):
                         (<img src={uzcard} alt="" className='ml-5 mt-10' style={{width:'50px' , height:'70px'}}/>) } */}
                    </div>

                        <div class="pin w-11 h-7 rounded bg-yellow-100">
                          &nbsp;
                        </div>

                        <div
                          class="number whitespace-nowrap text-2xl font-semibold"
                          style={{ fontFamily: "Courier new, mono" }}
                        >
                          {cardNum}
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