import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router-dom';

export default function Edituser() {
    let history = useHistory();
    const { id } = useParams();
    
    const [olduser,setolduser] = useState({
        name :"",
        email:"",
        username:"",
        number:"",
        website:"",
    })

    useEffect(()=>{
        loaduser();
    },[])

    const loaduser = async ()=>{
        const res = await axios.get('http://localhost:5000/user/'+id);
        setolduser(res.data.data)
    }

    const oninputcome = (e)=>{
        setolduser({...olduser,[e.target.name]:e.target.value})
    }
    
    const onsub = async (e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:5000/user/update/${id}`,olduser)
        history.push('/');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-7 col-6 border shadow mt-5">
                <h1 className="mt-4 text-center">Edit User</h1>
                    <form onSubmit={onsub}>
                        <div className="form-group">
                            <label>Enter name</label>
                            <input type="text" className="form-control"value={olduser.name} onChange={oninputcome} placeholder="Enter name" name="name" />
                        </div>
                        <div className="form-group">
                            <label>Enter Username</label>
                            <input type="text" className="form-control"value={olduser.username} onChange={oninputcome} placeholder="Enter Username" name="username" />
                        </div>
                        <div className="form-group">
                            <label>Enter Email</label>
                            <input type="text" placeholder="Enter Email" value={olduser.email} onChange={oninputcome} className="form-control" name="email" />
                        </div>
                        <div className="form-group">
                            <label>Enter Number</label>
                            <input type="number" className="form-control" value={olduser.number} onChange={oninputcome} placeholder="Enter Number" name="number" />
                        </div>
                        <div className="form-group">
                            <label>Enter Website</label>
                            <input type="text" className="form-control" value={olduser.website} onChange={oninputcome} name="website" placeholder="Enter Website" />
                        </div>
                        <button type="submit" className="btn mb-4 mt-2 btn-block btn-secondary">Edit User</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
