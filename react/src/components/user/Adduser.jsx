import React, { useState } from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom';

export default function Adduser() {
    let history = useHistory();
    const [user,setuser] = useState({
        name : "",
        username : "",
        email: "",
        number:"",
        website:""
      });

    const adduser = ()=>{
       
    }
    const oninputchange = (e)=>{
        setuser({...user,[e.target.name]:e.target.value})   
    }

    const onsub = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/adduser",user);
        history.push("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-7 col-6 border shadow mt-5">
                    <form className="mt-5" onSubmit={onsub}>
                        <div className="form-group">
                            <label>Enter name</label>
                            <input type="text" className="form-control"  value={user.name}  onChange={oninputchange}placeholder="Enter name" name="name" />
                        </div>
                        <div className="form-group">
                            <label>Enter Username</label>
                            <input type="text" className="form-control" value={user.uname}  onChange={oninputchange} placeholder="Enter Username" name="username" />
                        </div>
                        <div className="form-group">
                            <label>Enter Email</label>
                            <input type="text" placeholder="Enter Email" value={user.email}  onChange={oninputchange} className="form-control" name="email" />
                        </div>
                        <div className="form-group">
                            <label>Enter Number</label>
                            <input type="number" className="form-control" value={user.number}  onChange={oninputchange} placeholder="Enter Number" name="number" />
                        </div>
                        <div className="form-group">
                            <label>Enter Website</label>
                            <input type="text" className="form-control" value={user.website}  onChange={oninputchange} name="website" placeholder="Enter Website" />
                        </div>
                        <button type="submit" className="btn mb-4 mt-2 btn-block btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
