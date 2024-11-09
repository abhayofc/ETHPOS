import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { motion } from 'framer-motion'
export default function LandingPage() {
    return (
        <>
            <Navbar />
            <div className="main px-4">
                <p className="text-white border border-white rounded-full w-fit px-5 text-lg py-1 mt-16">Ethereum Payments</p>
                <p className=" text-white mt-6 text-4xl font-semibold">Empowering the next generation of payments</p>

                <p className="text-white mt-6 text-lg font-[500]">
                    Ethereum Payments bridges the gap between the crypto users and the shopkeepers around the globe at no extra cost.
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <Link to={'/signup'} className=" mt-10 px-6 bg-white rounded-xl py-3 text-lg font-[700] flex w-fit">Join ETHPay Payments <IoIosArrowForward size={20} className='ml-1 mt-1' /> </Link>

                </motion.div>
            </div>

        </>
    )
}
