'use client'

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Loginpage from "./Login";
import Register from "./Register";
import { getToken , removeToken } from "../lib/auth";

export default function Navbar() {
    const token = getToken();
    const [show, setShow] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    return (
        <>
            <>
                <div className='flex justify-center pb-10 items-center'>
                    <div className='max-w-7xl w-full pt-5 px-7 flex items-center justify-between'>
                        <div className='flex items-center font-bold gap-8'>
                            <div className='text-[32px] hover:cursor-pointer'>
                                horizon
                            </div>

                            <div className='md:flex gap-5 hidden text-[13px]'>
                                <p className="hover:cursor-pointer">Colleges</p>
                                <p className="hover:cursor-pointer">Events</p>
                            </div>
                        </div>
                        <div>
                            {!(token?.userId)?<button className='bg-[#2270E2] text-xl hidden md:flex font-semibold text-white px-[18px] py-[8px] rounded-lg'       
                            onClick={() => setShowLoginModal(!showLoginModal)}
                            >
                                Login
                            </button>:
                            <button className='bg-[#2270E2] text-xl hidden md:flex font-semibold text-white px-[18px] py-[8px] rounded-lg'       
                            onClick={() => removeToken()}
                            >
                                Logout
                            </button>}
                            {!show ?
                                <GiHamburgerMenu id='open' className='md:hidden text-[32px] hover:cursor-pointer'
                                    onClick={() => setShow(!show)}
                                />
                                : <IoClose id='close' className='md:hidden text-[42px] hover:cursor-pointer'
                                    onClick={() => setShow(!show)}
                                />}
                        </div>
                    </div>
                </div>
                {show && <div className="absolute md:hidden  z-20 bg-white font-bold text-[16px] gap-3 w-screen flex flex-col py-3 pr-5 items-end justify-center">
                    <p className="hover:cursor-pointer">Colleges</p>
                    <p className="hover:cursor-pointer">Events</p>
                    <p className="hover:cursor-pointer">
                        {!(token?.userId)?
                        <div className="flex flex-col gap-3">
                        <p className="bg-[#2270E2] text-white font-bold py-[12px] px-[24px] rounded-2xl" 
                        onClick={() => setShowLoginModal(!showLoginModal)}
                        >
                            Login
                        </p>
                        <p className="hover:cursor-pointer">
                        <button className="bg-[#2270E2] text-white font-bold py-[12px] px-[24px] rounded-2xl"
                        >
                            Register
                        </button>
                    </p>

                        </div>:
                       <p className="bg-[#2270E2] text-white font-bold py-[12px] px-[24px] rounded-2xl" 
                       onClick={() => removeToken()}
                       >
                           Logout
                       </p>
                        }
                    </p>
                   
                </div>}
                {showLoginModal && <div className="h-screen w-screen z-50 bg-black bg-opacity-40  fixed inset-0 flex items-center justify-center">
                <Loginpage setShowLoginModal={setShowLoginModal} setShowRegisterModal={setShowRegisterModal} />
            </div>}
            {showRegisterModal && <div className="min-h-screen w-screen z-50 bg-black bg-opacity-40  fixed inset-0 flex items-center justify-center">
                <Register setShowLoginModal={setShowLoginModal} setShowRegisterModal={setShowRegisterModal} />
            </div>}


            </>
        </>
    )

}