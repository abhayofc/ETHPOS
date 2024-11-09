import React from 'react'
import Navbar from '../../Components/Navbar'
import { MdArrowCircleLeft, MdArrowDownward, MdArrowUpward } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Payment from '../../Components/Payment-list'
import PaymentCard from '../../Components/Payment-list'

export default function RecentPayments() {
    return (
        <>

            <Navbar />

            <div className="screen mt-2 mx-4">
                <Link to={'/dashboard'}>
                    <MdArrowCircleLeft size={30} color='white' /></Link>

                <div className="mainscreen mt-4">
                    <p className="text-slate-50 font-semibold text-3xl">Transactions</p>

                    <div className="tab  rounded-md px-2 py-2 mt-10 space-y-2">

                        <PaymentCard address={'0x75f56beddC4...'} amount={'0.225'} type={'+'} />

                        <PaymentCard address={'0x75f56beddC4...'} amount={'0.225'} type={'+'} />
                        <PaymentCard address={'0x75f56beddC4...'} amount={'0.225'} type={'+'} />
                        <PaymentCard address={'0x75f56beddC4...'} amount={'0.225'} type={'+'} />
                        <PaymentCard address={'0x75f56beddC4...'} amount={'0.225'} type={'+'} />
                        <PaymentCard address={'0x75f56beddC4...'} amount={'0.225'} type={'+'} />







                    </div>

                </div>

            </div>



        </>
    )
}
