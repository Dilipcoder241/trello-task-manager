'use client'
import axios from "axios";

const token:string | null = typeof window !== 'undefined' ? localStorage.getItem('Token') : null;

const instence = axios.create({
    baseURL:"http://localhost:5000/",
    headers:{
        "Content-Type": "application/json; charset=UTF-8",
        "Token": token || "",
    }
})

export default instence;

