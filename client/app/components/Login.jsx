'use client'

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { setToken } from '../lib/auth.js'


function Loginpage({ setShowLoginModal, setShowRegisterModal }) {
    const [formData, setFormData] = useState({
        identifier: "",
        password: "",
    });

    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data)

        if (data.status === 401) {
            alert("user does not exist")
        }

        else {
            alert("user logged in successfully")
            // setShowLoginModal(true)
            setShowLoginModal(false)
            setToken(data.user._id,data.user.userName)
        }
    };

    const [show, setShow] = useState(false);
    const showPassword = () => {
        setShow(!show);
    };
    return (
        <>




            <div className=" md:w-[350px] lg:w-[500px] bg-white rounded-2xl px-5 py-5  max-[400px] shadow-2xl">
                <h1 className="font-poppins text-2xl lg:text-4xl font-bold pb-5">
                    Login to your account
                </h1>
                <p className="font-poppins lg:text-xl  pb-4">
                    Welcome back! Please enter your credentials to access your
                    account.
                </p>
                <div className="my-2">Username or Email</div>
                <div className="flex flex-row border-gray-400 placeholder:text-[#667086] placeholder:text-[16px]  border-[0.5px] mt-2 rounded-[5px]">
                    <input
                        type="email"
                        name="identifier"
                        placeholder="Enter your email or username"
                        className="w-full p-2 px-6 py-2 rounded placeholder:text-[#667086]"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mt-3">Password</div>
                <div className="flex flex-row items-center border-gray-400 placeholder:text-[#667086] placeholder:text-[16px]  border-[0.5px] mt-2 rounded-[5px]">
                    <input
                        type={show ? "text" : "password"}
                        name="password"
                        placeholder="Enter your Password"
                        className="w-full p-2 px-6 py-2 rounded placeholder:text-[#667086]"
                        width="90vw"
                        onChange={handleChange}
                        required
                    />
                    {!show ?
                        <FaEye className="text-3xl pr-2 hover:cursor-pointer"
                            onClick={() => {
                                showPassword(!show)
                            }}
                        /> :
                        <RiEyeCloseLine className="text-3xl pr-2 hover:cursor-pointer"
                            onClick={() => {
                                showPassword(!show)
                            }
                            }
                        />

                    }
                </div>
                <div className="w-full flex gap-10 items-center justify-center mt-4">
                    <button
                        className="p-[10px] md:py-[16px] md:px-[16px] text-white bg-[#2270E2] mb-4 font-medium rounded-lg hover:scale-105 transform transition-all"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                    <button className="p-[10px] md:py-[16px] md:px-[16px] text-white bg-red-600 mb-4 font-medium rounded-lg hover:scale-105 transform transition-all"
                        onClick={
                            () => {
                                setShowLoginModal(false)
                            }
                        }
                    >
                        Cancel
                    </button>

                </div>



                <div className=" text-center p-8">
                    {" "}
                    Don’t have an account?{" "}
                    <span className=" hover:cursor-pointer hover:scale-125 transform transition-all text-[#2270E2]"
                        onClick={() => {
                            setShowLoginModal(false)
                            setShowRegisterModal(true)
                        }
                        }
                    > Sign up</span>

                </div>
                {/* </div> */}
            </div>
        </>
    );
}

export default Loginpage;