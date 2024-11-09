import React from 'react'
import { MdArrowDownward } from 'react-icons/md'
import { motion } from 'framer-motion'

export default function PaymentCard({ transaction, address, type, amount }) {
    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="paymentcard flex justify-between bg-white p-2 rounded-md">
                <MdArrowDownward size={30} />
                <div className="">
                    {address}
                </div>
                <div className="text-green-600 font-semibold">
                    {type} {amount} ETH
                </div>
            </div>

        </motion.div>

    );
}
