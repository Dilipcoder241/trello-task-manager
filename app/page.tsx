'use client'
import Link from "next/link";
import { useState } from "react";
import axios from "./(utils)/axios";
import { toast } from "react-toastify";


export default function Home() {
  const [passVisible, setPassVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignup = async () =>{
    if(username==""|| email==""|| password==""){
      toast.error("Please Fill All The Fields");
      return;
    }
    const body = {
      username, email ,password
    }
    try {
      const {data} = await axios.post("/user/register" , body);
      window.location.href = '/login';
    } catch (error) {
      toast.error(error?.response?.data.msg);
    }
    
  }
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#ffff] to-[#afa3ff] flex justify-center">
      <div className="bg-white w-[40%] h-fit mt-[5%] border-2 rounded-lg p-10 space-y-4">
        <h1 className="text-4xl font-bold text-center mb-2">Welcome to <span className="text-[#4534ac]">Workflo</span>!</h1>
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Full Name" className="w-full p-2 rounded-md bg-[#EBEBEB]" />
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your Email" className="w-full p-2 rounded-md bg-[#EBEBEB]" />
        <div className="w-full p-2 rounded-md bg-[#EBEBEB] flex items-center justify-between">
          <input type={passVisible == true ? "text" : "password"} value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" className="bg-[#EBEBEB] outline-none" />
          <img src="./eye-open.png" alt="" className="h-5 w-5 cursor-pointer" onClick={() => { setPassVisible(!passVisible) }} />
        </div>
        <button className="w-full bg-[#4534ac] text-white p-3 rounded-md" onClick={handleSignup}>Sing Up</button>
        <p className="text-center">Already Have An Account? <Link href="/login" className="text-[#4534ac] font-semibold">Log in. </Link></p>
      </div>
    </div>
  );
}
