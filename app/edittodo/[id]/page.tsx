'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "../../(utils)/axios";
import Image from "next/image";
import { useMyContext } from "@/app/(context)/context";


export default function page({params}) {
  const {id} = params;
  const {globTodos , setGlobTodos} = useMyContext();
  const [updateTodo, setupdateTodo] = useState(globTodos.filter(todo=>{return todo._id==id})[0]);
  
  const [title, setTitle] = useState(updateTodo?.title || "");
  const [status, setStatus] = useState(updateTodo?.status || "");
  const [priority, setPriority] = useState(updateTodo?.priority || "");
  const [deadline, setDeadline] = useState(updateTodo?.deadline.split('T')[0] || "");
  const [description, setDescription] = useState(updateTodo?.description || "");
  
  

  const handleUpdateTodo = async(todoid)=>{
    if(title=="" || status==""  ){
        toast.error("please fill title and status");
        return;
    }
    
    const body={
      title,status,priority,deadline,description
    }
    try {
      const {data} = await axios.post(`/todo/update/${todoid}`, body);
      if(data){
        setTitle("");
        setStatus("");
        setPriority("");
        setDeadline("");
        setDescription("");
        setGlobTodos(data);
        toast.success("Todo Updated");
      }
      else{
        toast.error("some error occuer in Updating todo");
      }
    } catch (error) {
      toast.error((error as any).response.data.msg);
    }

  }

  useEffect(() => {
    if(!localStorage.getItem("Token")){
      toast.error("Please Login!")
    }
  }, [])
  

  return (
    <div className="w-full h-screen p-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <Link href="/dashboard"><Image height={28} width={28} src="/cross.png" alt="" className="w-7" /></Link>
          <Image height={28} width={28} src="/minmax.png" alt="" className="w-7" />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-[#F4F4F4] p-3 rounded-md">
            <p>share</p>
            <Image height={28} width={28} src="/share.png" alt="" className="w-6" />
          </div>
          <div className="flex items-center gap-3 bg-[#F4F4F4] p-3 rounded-md">
            <p>Favorite</p>
            <Image height={28} width={28} src="/favorite.png" alt="" className="w-6" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title" className="text-7xl outline-none" />

        <div className="flex gap-36">
          <div>
            <div className="mt-10">
                <div className="flex gap-5 items-center">
                  <Image height={28} width={28} src="/status.png" alt="" className="w-7" />
                  <p className="text-xl">Status</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex gap-5 items-center">
                  <Image height={28} width={28} src="/priority.png" alt="" className="w-7" />
                  <p className="text-xl">Priority</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex gap-5 items-center">
                  <Image height={28} width={28} src="/calender.png" alt="" className="w-7" />
                  <p className="text-xl">Deadline</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex gap-5 items-center">
                  <Image height={28} width={28} src="/pencil.png" alt="" className="w-7" />
                  <p className="text-xl">Description</p>
                </div>
            </div>
          </div>

          <div className="inputs">
          <div className="mt-10">
                <select name="status" className="outline-none text-xl" value={status} onChange={(e)=>{setStatus(e.target.value)}}>
                  <option value="">Not Selected</option>
                  <option value="todo">To Do</option>
                  <option value="inprogress">In Progress</option>
                  <option value="underreview">Under Review</option>
                  <option value="finished">Finished</option>
                </select>
            </div>
            <div className="mt-10">
                <select name="status" className="outline-none text-xl" value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
                  <option value="">Not Selected</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="urgent">Urgent</option>
                </select>
            </div>
            <div className="mt-10"> 
                <input type="date" className="text-xl" value={deadline} onChange={(e)=>{setDeadline(e.target.value)}}/>
            </div>
            <div className="mt-10">
                <textarea className="outline-none border-2 rounded-md p-2" value={description} onChange={(e)=>{setDescription(e.target.value)}} rows={5} cols={30} placeholder="Description"></textarea>
            </div>

            <button onClick={()=>handleUpdateTodo(id)} className="mt-5 w-full bg-green-400 p-3 rounded-lg font-semibold hover:bg-green-500 duration-200 hover:text-white text-slate-700">Update todo</button>
          </div>

        </div>
      </div>

    </div>
  )
}
