import Navbar from '../Components/Navbar';
import { GiReceiveMoney } from "react-icons/gi";
import { FaReceipt } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

export default function HomePage() {
    //  data for ETH payments
    const data = [
        { date: '2024-09-21', eth: 0.5 },
        { date: '2024-09-22', eth: 1.2 },
        { date: '2024-09-23', eth: 0.7 },
        { date: '2024-09-24', eth: 1.8 },
    ]
    return (
        <>
            <div className="bg-gradient-to-b from-[#288580] to-[#5764da]">
                <Navbar />
                <p className="text-center text-white text-2xl mt-10 font-bold">Dashboard</p>
                {/* Main Section */}
                <div className="main flex flex-col items-center mt-2">
                    <div className="flex flex-row flex-wrap mt-10 mx-10 gap-4 justify-center">
                        {/* Receive Payment */}
                        <Link to={'/receive-payments'}>
                            <div className="bg-transparent border border-white p-2 w-28 hover:border-black hover:text-black text-white cursor-pointer">
                                <div className="flex justify-center">
                                    <GiReceiveMoney size={70} color='white' />
                                </div>
                                <p className="text-wrap text-center mt-3 text-xs font-bold">Receive Payment</p>
                            </div></Link>

                        {/* Recent Payment */}
                        <Link to={'/recent-transactions'}>
                            <div className="bg-transparent border border-white p-2 w-28 hover:border-black hover:text-black text-white cursor-pointer">
                                <div className="flex justify-center">
                                    <FaReceipt size={70} color='white' />
                                </div>
                                <p className="text-wrap text-center mt-3 text-xs font-bold">Recent Payment</p>
                            </div></Link>

                        {/* Accounts */}
                        <div className="bg-transparent border border-white p-2 w-28 hover:border-black text-white hover:text-black cursor-pointer">
                            <div className="flex justify-center">
                                <MdAccountBalance size={70} color='white' />
                            </div>
                            <p className="text-wrap text-center mt-3 text-xs font-bold">Accounts</p>
                        </div>
                    </div>

                    <p className="text-center text-white mt-10 text-2xl font-semibold">Daily Report</p>

                    {/* Chart Section */}
                    <div className="w-full h-64 mt-5">
                        <ResponsiveContainer width="95%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="2 2" stroke="#ffffff" />
                                <XAxis dataKey="date" stroke="#ffffff" />
                                <YAxis stroke="#ffffff" />
                                <Tooltip contentStyle={{ backgroundColor: '#333', color: '#ffffff' }} />
                                <Legend />

                                <Bar dataKey="eth" fill="white" />
                            </BarChart>

                        </ResponsiveContainer>
                    </div>
                </div>

                <p className="text-white text-center mt-10 text-xs pb-10">
                    &copy; 2024 ETHPay - A Project by Abhay Vishwakarma | All rights reserved
                </p>
            </div>
        </>
    );
}
