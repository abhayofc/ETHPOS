import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar'


export default function SignupPage() {
    return (
        <>


            {/* Navbar */}

            <Navbar />
            <div className="main mt-10">

                <p className="text-white text-center
                     text-3xl font-bold mt-10">Signup</p>

                {/* Form */}

                <div className="flex justify-center mt-16">
                    <div className="w-full max-w-xs">
                        <form className="bg-transparent border shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Link className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" to={'/add-details'}>
                                    Sign Up
                                </Link>
                                <a className="inline-block align-baseline font-bold text-sm text-white hover:text-white" href="#">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                        <p className="text-center text-white text-xs">
                            &copy; 2024 ETHPay. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
