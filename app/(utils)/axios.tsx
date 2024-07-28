'use client'
import axios from "axios";

const token = typeof window !== 'undefined' ? localStorage.getItem('Token') : null;

const instence = axios.create({
    baseURL:"http://localhost:5000/",
    headers:{
        "Content-type": "application/json; charset=UTF-8",
        "Token": token,
    }
})

export default instence;

