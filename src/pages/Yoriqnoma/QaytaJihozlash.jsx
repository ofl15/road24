import React from "react";
import '../../assets/style.scss'
import { TiCancel } from "react-icons/ti";
import { MdDirectionsCarFilled } from "react-icons/md";
import { BsFileText } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa6";
import { PiCarProfileLight } from "react-icons/pi";
import { CiCircleQuestion } from "react-icons/ci";
import { Link,  } from 'react-router-dom';



export default function QaytaJihozlash() {


  return (
    <div className="qaytajihozlash">
      <div className="q-left">
      <div className="info">
        <div className="flex px-3 py-3  ml-28 mt-16">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://avatars.mds.yandex.net/i?id=4389e8786c88c834f03d64eb00578b99ed9daed7-9231751-images-thumbs&n=13" alt="Sunset in the mountains"/>
            </div>
        </div>
      <div className='inp ml-52  mt-20'>
        <input type="text" value="80 A777AA" className=' bg-slate-300   pl-10 py-2 text-2xl  justify-center items-center w-48' style={{color:'#198e7c'}}/>
      </div>

    </div>
      </div>
      <div className="q-right">
      <div className="q-title">Avtomobilni qayta jihozlash:</div>
      <div className="q-subtitle">
        Avtomototransport vositasi qayta jihozlangan deb tan olinadigan
        o‘zgarishlar ro‘yxati:
      </div>
      <div className="q-description">
        - yukxonaning (bortning) gabarit o‘lchamlarini o‘zgartirish (ko‘tarish,
        uzaytirish); <br /> - yukxona eshiklarining ikki yonga vertikal ochilishiga
        ruxsat berish; <br /> - chet elda ishlab chiqarilgan yengil avtomobillar
        kuzovini almashtirish; <br /> - avtotransport vositalarining tashqi
        ko‘rinishiga (kuzov) o‘zgartirish(lar) kiritish (masalan, “Captiva-3 ”
        rusumli avtomobilni “Captiva-4 ” rusumiga); <br /> - avtotransport vositasining
        dvigatelini o‘zgartirish; <br /> - yarim tirkamani tirkamaga o‘zgartirish; <br /> -
        qo‘shimcha yoqilg‘i sig‘imi (bak) o‘rnatish; <br /> - qo‘shimcha o‘rindiq
        o‘rnatish yoki kamaytirish (olib tashlash); <br /> - avtotransport vositasiga
        ishlab chiqargan korxona tomonidan ko‘zda tutilmagan antenna, sirena,
        ratsiya o‘rnatish; <br /> - ehtiyot (zaxira) g‘ildiragini belgilanmagan joyda
        (orqa eshikka) o‘rnatish; <br /> - avtotransport vositasining konstruksiyasida
        ko‘zda tutilmagan yoritish chiroqlari (ksenon lampa) o‘rnatish; <br /> -
        transport vositalariga yalt-yalt etuvchi chiroq-mayoqcha va (yoki)
        maxsus tovushli ishoralar beruvchi moslamalar o‘rnatish; <br /> - avtotransport
        vositasiga gaz ballon va jihozlarini o‘rnatish.
      </div>
      </div>
    
    </div>
  );
}
