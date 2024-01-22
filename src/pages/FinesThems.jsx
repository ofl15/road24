import React, { useState } from 'react'
import '../assets/Fines.scss'
import { Link, useActionData } from 'react-router-dom'
import { SlArrowRight } from "react-icons/sl";
// import Infors from '../components/Infors';

function Fines() {

    const [status, setStatus] = useState(false)
    const updateState = () => {
        setStatus(!status)
        console.log(status);
    }

    return (

        < div className="All -ml-5">
            {/* <Infors /> */}


                    <div >

                        {/* <p className='Mavzular'>Mavzular</p> */}
                        <div className="Themss">
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Kamar, motoshlem</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Tex.ko'rik, tibbiyot qutichasi, ovozi, tutun, axlat</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Qayta jihozlar , tormoz, rul</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Oyna qoraytirish, ksenon, nakleyka, migalka, sirena, signal</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Quyib o'tish, qarama-qarshi, yo'l-chiziq/belgi</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Piyoda va trotuar qoidalari</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Telefon va monitordan foydalanish</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Tezlikni oshirish</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Spirtli ichimlik, giyovand modda</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Xujjatsiz (tex.pasport, ishonchnoma sug'urta, haydovchilik guvoxnoma...)</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>ДТП-ЙТХ-YTH</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>DRBsiz yurish,guruh harakat</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Svetofor va stop-chizig'i</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>To'xtash va to'xtab turish</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>piyodalar va velosipedlar uchun</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Bo'ysunmaslik</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="flex kkk">
                                <div className="column is-11">
                                    <p>Boshqa</p>
                                </div>
                                <div className="againme">
                                    <SlArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>


        </div >
    )
}

export default Fines