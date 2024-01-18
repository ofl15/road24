import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CARD } from '../urls';
import { InputMask } from 'primereact/inputmask';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { humo, uzcard } from '../assets';

const Card = () => {

    const [cards, setCards] = useState([]);
    const [number , setNumber] = useState('')
    const [date , setDate] = useState('')
    const [holder , setHolder] = useState('')


    const navigate = useNavigate()

    const createCard = (e) => {

        axios
          .post(CARD, {
            data: {
              Name: holder ,
              date: date,
              num: number,
              money: 8467450
            },
          })
          .then((res) => {
            console.log(res.data);
            toast.success("Karta muvaffaqiyatli qo`shildi!")
            setTimeout(() => {
              navigate("/");
            }, 1500);
          })
          .catch((err) => console.log(err));
      };

      const deleteCard = (id) => {
        let result = window.confirm("Kartani o`chirmoqchimisiz?")

        if (result === true) {
          axios
            .delete(`${CARD}/${id}`)
            .then((res) => {
              console.log(res.data);
              toast.success("Karta ochirildi!")
              setTimeout(() => {
                navigate("/");
              }, 1500);
            })
            .catch((err) => console.log(err));
        } else {
          toast.warn("Kartani o`chirish Bekor qilindi!")
        }
      };


      

      const filling = e => {
        e.preventDefault()


        if (number && holder && date) {
          if (cards.length < 1) {
            if (number.slice(0,4) === '8600' || number.slice(0,4) === '9860' || number.slice(0,3) === '561') {
              if(date.slice(0,2) <= 12 && date.slice(3,5) <= 30 && date.slice(3,5) >= 24) {
                if (holder.length < 23) {
                  createCard();

                } else {
                  toast.error('Ism Familiya xato kiritildi!')
                }
              } else {
                toast.error('Xato sana kiritildi!')  
              }
            } else {
              toast.error('Xato malumot kiritildi!')
            }
          }else {
            toast.error('1 tadan ortiq karta qoshish mumkin emas!')
          }
        } else(
          toast.error("Bo`sh joylarni to'ldiring!")
        )
      }

      
    const load = () => {
      axios
        .get(CARD)
        .then((res) => setCards(res.data.data))
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      load();
    }, []);

    function addStarToString(str) {
      const stars = Array(11).fill('*').join(''); // Create a string of 11 "*"
      const newStr = str.slice(0, 4) + stars + str.slice(17); // Add the stars to the string from 3rd to 13th index
    
      return newStr;
    }
      

  return (
    <div className='Card Main grid grid-cols-2 gap-4'>

    <div class="w-full max-w-lg mx-auto p-8 z-50">
        <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-lg font-medium mb-6">Payment Information</h2>
        <form>
            <div class="grid grid-cols-2 gap-6">
                <div class="col-span-2 sm:col-span-1">
                    <label for="card-number" className="block text-sm font-medium text-gray-700 mb-2" >Card Number</label>
                    <InputMask  onChange={e => {
                        setNumber(e.target.value); 
                    }} value={number} type="text" name="card-number" id="card-number" mask='9999 9999 9999 9999' placeholder="0000 0000 0000 0000" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="expiration-date" class="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                    <InputMask mask='99/99' onChange={e => setDate(e.target.value)} value={date} type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>
                <div class="col-span-2 sm:col-span-2">
                    <label for="card-holder" class="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
                    <input onChange={e => setHolder(e.target.value)} value={holder} type="text" name="card-holder" id="card-holder" placeholder="Full Name" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>
            </div>
            <div class="mt-8">
                <ToastContainer />
                <button type="submit" onClick={filling} class="w-full custom-btn-1 btn-3 text-white "><span>Submit</span></button>
            </div>
        </form>
        </div>
        </div>
                
{/* card */}
        {cards && cards.map((card) => (

            <figure class="absolute m-24" style={{marginLeft:'700px'}}>
            <div class="credit-card w-max h-max relative select-none pointer-events-none">
                <div
                    class="verso z-1 absolute overflow-hidden transform translate-y-12 left-16 w-96 h-56 rounded-2xl bg-gray-400 shadow-2xl">
                    <div class="w-full h-12 bg-gray-200 absolute top-10">&nbsp;</div>
                </div>

                    <div
                    class="recto z-2 absolute overflow-hidden w-96 h-56 rounded-2xl px-8 py-6 bg-black text-white shadow-xl flex flex-col justify-end gap-6">
                    <div class="logo absolute top-6 right-8 w-16 h-8 flex justify-items-center items-center">
                      {card.attributes.num.slice(0,4) === '9860' ? (
                        <img src={humo} alt="" className='ml-2 mt-10' /> ):
                         (<img src={uzcard} alt="" className='ml-5 mt-10' style={{width:'50px' , height:'70px'}}/>) }
                    </div>
                          
                    <div class="pin w-11 h-7 rounded bg-yellow-100">&nbsp;</div>

                    <div class="number whitespace-nowrap text-2xl font-semibold" style={{fontFamily:'Courier new, mono'}}>
                        {addStarToString(card.attributes.num)}
                    </div>

                    <div class="credentials flex gap-8">
                        <div class="owner flex flex-col w-max">
                            <span class="text-xs uppercase">Card holder</span>
                            <span class="whitespace-nowrap text-lg">{card.attributes.Name}</span>
                        </div>
                        <div class="expires flex flex-col w-max">
                            <span class="text-xs uppercase">Expires</span>
                            <span class="whitespace-nowrap text-lg">{card.attributes.date}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => deleteCard(card.id)} className='mt-80 ml-36 custom-btn btn-14' style={{width:'130px' , height:'40px', background:'rgb(255,27,0)' , background:'linear-gradient(0deg, rgba(255,27,0,1) 0%, rgba(251,75,2,1) 100%)'}}>Delete</button>
        </figure>
        ))}
    </div>
  )
}

export default Card