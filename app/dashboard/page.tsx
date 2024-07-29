"use client"
import { toast } from "react-toastify";
import Button from "../(components)/Button";
import Navbar from "../(components)/Navbar";
import TodoTab from "../(components)/TodoTab";
import axios from "../(utils)/axios";
import { useEffect, useState } from "react";
import { useMyContext } from "../(context)/context";

interface Todo {
    _id: string;
    title: string;
    status: 'todo' | 'inprogress' | 'underreview' | 'finished';
    description?:string;
    priority?:string;
    deadline?:Date;
  }


export default function page() {
  const {globTodos,setGlobTodos} = useMyContext();

    const [Todo, setTodo] = useState([]);
    const [inprogress, setInprogress] = useState([]);
    const [underReview, setUnderReview] = useState([]);
    const [Finished, setFinished] = useState([]);

    const getTodo = async ()=>{
        try {
            const {data} = await axios.get("todo/getalltodo");
            setGlobTodos(data);
        } catch (error) {
            toast.error((error as any)?.response?.data?.msg);    
        }
         
    }

    const setinCols =()=>{
        setTodo(globTodos.filter((todo:Todo)=>{ return todo.status=="todo"}));
        setInprogress(globTodos.filter((todo:Todo)=>{ return todo.status=="inprogress"}));
        setUnderReview(globTodos.filter((todo:Todo)=>{ return todo.status=="underreview"}));
        setFinished(globTodos.filter((todo:Todo)=>{ return todo.status=="finished"}));
    }

    useEffect(() => {
      getTodo();
    }, [])

    useEffect(() => {
      setinCols();
    }, [globTodos])

    
    

    return (
        <div className="relative bg-[#F7F7F7] flex h-screen">
            <Navbar />

            <div className="content w-[80%] px-7 py-4 space-y-4 overflow-y-scroll">
                <div className="greet w-full flex justify-between">
                    <h1 className="text-3xl font-bold">Good morning, User!</h1>
                    <button className="flex items-center gap-1 cursor-pointer">Help & Feedback <img src="./question.png" alt="" className="w-5" /></button>
                </div>

                <div className="intro flex gap-2">
                    {[{ title: "Introducing tags", desc: "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.", url: "./h1.png" }, { title: "Share Notes Instantly", desc: "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.", url: "./h2.png" }, { title: "Access Anywhere", desc: "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.", url: "./h3.png" }].map((item, i) => (
                        <div key={i} className="bg-white flex gap-2 px-2 py-4 rounded-lg">
                            <img src={item.url} alt="" className="w-[25%]" />
                            <div>
                                <h1 className="font-semibold">{item.title}</h1>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="options flex justify-between">
                    <div className="left flex bg-white items-center px-2 rounded-md">
                        <input type="text" placeholder="Search" className="p-2" />
                        <img src="./search.png" alt="" className="w-6 h-6" />
                    </div>
                    <div className="right flex gap-10">
                        {[{ title: "Calender View", url: "./calender.png" }, { title: "Automation", url: "./star.png" }, { title: "Filter", url: "./filter.png" }, { title: "Share", url: "./share.png" }].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <p className="text-slate-500">{item.title}</p>
                                <img src={item.url} alt="" className="w-6" />
                            </div>
                        ))}
                        <Button text="Create new" sm={true} />
                    </div>
                </div>


                <div className="tasks bg-white p-2 rounded-md grid gap-4 grid-cols-4">
                    <TodoTab status="Todo" todos={Todo}/>
                    <TodoTab status="In Progress" todos={inprogress}/>
                    <TodoTab status="Under Review" todos={underReview}/>
                    <TodoTab status="Finished" todos={Finished}/>
                </div>

            </div>
        </div>
    )
}
