import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Home = () => {
    const [user, setuser] = useState([]);
    useEffect(() => {
        loadusers();
    }, []);

    const loadusers = async () => {
        const res = await axios.get('http://localhost:5000/user');
        if(res.data.status){
            setuser(res.data.data);
        }else{
            alert("Some backend error")
        }
    }

    const deleteuser = async (id)=>{
        await axios.get(`http://localhost:5000/user/delete/${id}`);
        loadusers();
    }
    
    return (
        <div className="py-4 container">
            <table class="table border shadow mt-5">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Sno</th>
                        <th scope="col">name</th>
                        <th scope="col">user name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        user.map((user, index) => (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link class="btn btn-primary mr-2"  to={`/user/view/${user._id}`}>View</Link>
                                    <Link class="btn btn-outline-secondary mr-2" to={`/user/edit/${user._id}`}>Edit</Link>
                                    <Link class="btn btn-outline-danger"  onClick={()=> deleteuser(user._id)}>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Home;

