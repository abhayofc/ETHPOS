import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

export default function AddDetails() {
    return (
        <>

            <div className="bg-gradient-to-b from-[#288580]  to-[#5764da] h-screen">
                <Navbar />

                <div className="flex justify-center mt-24">
                    <div className="w-full max-w-xs">

                        <form className="bg-transparent border shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="shopname">
                                    Shop Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shopname" type="text" placeholder="ETHPay Inc." />
                            </div>

                            <div className="flex items-center justify-between">
                                <Link className="bg-white hover:bg-slate-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" to={'/dashboard'}>
                                    Start Using ETHPay
                                </Link>

                            </div>
                        </form>

                    </div>

                </div>




            </div>




        </>
    )
}
