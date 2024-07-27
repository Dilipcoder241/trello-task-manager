'use client'
import Link from "next/link";
import { useState } from "react";


export default function login() {
  const [passVisible, setPassVisible] = useState(false);
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#ffff] to-[#afa3ff] flex justify-center">
      <div className="bg-white w-[40%] h-fit mt-[5%] border-2 rounded-lg p-10 space-y-4">
        <h1 className="text-4xl font-bold text-center mb-2">Welcome to <span className="text-[#4534ac]">Workflo</span>!</h1>
        <input type="email" placeholder="Your Email" className="w-full p-2 rounded-md bg-[#EBEBEB]" />
        <div className="w-full p-2 rounded-md bg-[#EBEBEB] flex items-center justify-between">
          <input type={passVisible==true?"text":"password"} placeholder="Password" className="bg-[#EBEBEB] outline-none" />
          <img src="./eye-open.png" alt="" className="h-5 w-5 cursor-pointer" onClick={()=>{setPassVisible(!passVisible)}}/>
        </div>
        <button className="w-full bg-[#4534ac] text-white p-3 rounded-md">Login</button>
        <p className="text-center">Don't have an account? Create <Link href="/" className="text-[#4534ac] font-semibold">a new account. </Link></p>
      </div>
    </div>
  );
}

