import React, { useState } from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
export default function Navbar() {
    const [opened, setOpened] = useState(false);

    function ToggleDrawer() {
        setOpened((prevOpened) => !prevOpened); // Proper way to toggle the state
    }

    return (
        <>
            <div className="navbar flex justify-between px-4 py-4 bg-[#5266ce] shadow-xl">
                <Link className="brandname text-white text-3xl font-bold" to={'/'}>
                    ETHPoS
                </Link>
                <IoMdArrowDropdownCircle color="white" size={36} onClick={ToggleDrawer} />
            </div>
            <motion.div

                initial={{ scale: .5, }}
                animate={{ rotate: 360, scale: 1 }}


            >
                <div className={`bg-black z-10 transition-all duration-700 ease-in-out text-white bg-opacity-45 ${opened ? '' : 'hidden'}`}>


                    <ul className="nav px-1 space-y-1 py-3">
                        <li className="nav-links">Home</li>
                        <li className="nav-links">Login</li>
                        <li className="nav-links">Signup</li>
                        <li className="nav-links">About us</li>
                        <li className="nav-links">Contact us</li>
                    </ul>

                </div >

            </motion.div >
        </>
    );
}
