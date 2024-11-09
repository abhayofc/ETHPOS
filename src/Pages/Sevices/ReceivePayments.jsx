import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import { IoMdArrowDropleftCircle } from 'react-icons/io';
import { MdArrowCircleLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'



export default function ReceivePayments() {

    const [generated, isGenerated] = useState(false);
    const QRIMAGE = "/frame.png";
    function handleClick() {
        isGenerated(true);

    }

    return (
        <>
            <Navbar />
            <div className="scree screen mt-2 mx-4">
                <Link to={'/dashboard'} className='flex w-fit'>
                    <MdArrowCircleLeft size={30} color='white' className='' /></Link>

                {generated ? <></> : <div className="form mt-10">
                    {/* <div className="flex justify-center">


                        <div className="inputFields flex ">
                           
                            <input type="number" name="amount" id="" className='px-7 py-1 rounded-sm text-black' placeholder='Enter the amount' />

                        </div>
                    </div> */}


                    <div className="flex justify-center mt-36">


                        <input type="number" className='bg-transparent border-b-2 focus:outline-none text-white text-center w-96 text-[96px] placeholder:text-slate-200 relative' placeholder='$0' />

                    </div>



                    <div className="text-center flex justify-center mt-10">
                        <button className='bg-transparent border-yellow-300 border-2 text-white py-3 px-10 rounded-md font-bold hover:bg-yellow-300 hover:text-black hover:border-black' onClick={handleClick} >Generate QR Code</button>
                    </div>

                </div >}


                {generated ? <><div className="qrcodehere mt-6 ">
                    <img src={QRIMAGE} alt="" className="px-36 mt-24" />
                </div>


                    <div className="backbtn">

                        <div className="flex justify-center mt-10">
                            <Link to={'/dashboard'}>
                                <IoMdArrowDropleftCircle size={56} color='white' /></Link>
                        </div>

                    </div>


                </>
                    : ''}







            </div>



        </>
    )
}



