import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';

export default function Viewuser() {
    const [user,setuser] = useState({
        name :"",
        email:"",
        username:"",
        number:"",
        website:"",
    });

    const { id } = useParams();

    useEffect(()=>{
        loaduser();
    },[])

    const loaduser = async ()=>{
        const res = await axios.get(`http://localhost:5000/user/${id}`);
        if(res.data.status)
        setuser(res.data.data)
    }
    return (
        <div>
         <p>Id: <strong>{user._id}</strong> </p>
         <p>Username: <strong>{user.username}</strong> </p>
         <p>Name: <strong>{user.name}</strong> </p>
         <p>Email: <strong>{user.email}</strong> </p>
         <p>Website: <strong>{user.website}</strong> </p>
        </div>
    )
}
