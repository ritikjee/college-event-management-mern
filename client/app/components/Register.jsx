'use client'

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import {setToken} from '../lib/auth.js'


function Register({ setShowLoginModal, setShowRegisterModal}) {
    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        imageLink: "",
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data)

        if(data.status === 401){
            alert("user already exists please try another email or username")
        }

        else{
            alert("user created successfully")
            // setShowLoginModal(true)
            setShowRegisterModal(false)
            setToken(data.user._id,data.user.userName)
        }
    };

    const [show, setShow] = useState(false);
    const showPassword = () => {
        setShow(!show);
    };
    return (
        <>


            <div className=" md:w-[350px] lg:w-[500px] bg-white rounded-2xl p-4 pt-10  max-[400px] shadow-2xl">
                <h1 className="text-[35px] flex items-center justify-center font-bold">
                    horizon
                </h1>
                <div className="my-2">Name</div>
                <div className="flex flex-row border-gray-400 placeholder:text-[#667086] placeholder:text-[16px]  border-[0.5px] mt-2 rounded-[5px]">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Enter your name"
                        className="w-full p-2 px-6 py-2 rounded placeholder:text-[#667086]"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="my-2">Email</div>
                <div className="flex flex-row border-gray-400 placeholder:text-[#667086] placeholder:text-[16px]  border-[0.5px] mt-2 rounded-[5px]">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email"
                        className="w-full p-2 px-6 py-2 rounded placeholder:text-[#667086]"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="my-2">Username</div>
                <div className="flex flex-row border-gray-400 placeholder:text-[#667086] placeholder:text-[16px]  border-[0.5px] mt-2 rounded-[5px]">
                    <input
                        type="userName"
                        name="userName"
                        value={formData.userName}
                        placeholder="Enter your email"
                        className="w-full p-2 px-6 py-2 rounded placeholder:text-[#667086]"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mt-3">Password</div>
                <div className="flex flex-row border-gray-400 items-center placeholder:text-[#667086] placeholder:text-[16px]  border-[0.5px] mt-2 rounded-[5px]">
                    <input
                        type={show ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        placeholder="Enter your Password"
                        className="w-full p-2 px-6 py-2 rounded placeholder:text-[#667086]"
                        width="90vw"
                        onChange={handleChange}
                        required
                    />
                    {!show ?
                        <FaEye className="text-3xl pr-2 hover:cursor-pointer" onClick={() => {
                            showPassword(!show)
                        }} /> :
                        <RiEyeCloseLine className="text-3xl pr-2 hover:cursor-pointer" onClick={() => {
                            showPassword(!show)
                        }}
                        />
                    }
                </div>
                <div className="mt-3">Profile Image Link</div>
                <div className="flex flex-row border-gray-400 items-center placeholder:text-[#667086] placeholder:text-[16px]  border-[0.5px] mt-2 rounded-[5px]">
                    <input
                        type='text'
                        name="imageLink"
                        value={formData.imageLink}
                        placeholder="Enter your Profile Image Link"
                        className="w-full p-2 px-6 py-2 rounded placeholder:text-[#667086]"
                        width="90vw"
                        onChange={handleChange}
                        required
                    />
                  
                </div>


                <div className="w-full flex justify-center gap-10 mt-4">
                    <button
                        className="p-[10px] md:py-[16px] md:px-[16px] text-white bg-[#2270E2] mb-4 font-medium rounded-lg hover:cursor-pointer hover:scale-105 transform transition-all "
                        onClick={handleSubmit}
                    >
                        Sign Up

                    </button>
                    <button className="p-[10px] md:py-[16px] md:px-[16px] text-white bg-red-600 mb-4 font-medium rounded-lg hover:cursor-pointer hover:scale-105 transform transition-all
                    
                    "

                        onClick={
                            () => {
                                setShowRegisterModal(false)
                            }
                        }>
                        Cancel
                    </button>
                </div>

                <div className=" text-center">
                    {" "}
                    Already have an account?{" "}

                    <span className=" text-[#2270E2] hover:cursor-pointer"
                        onClick={() => {
                            setShowLoginModal(true)
                            setShowRegisterModal(false)

                        }}
                    > Sign in</span>

                </div>
            </div>

        </>
    );
}

export default Register;