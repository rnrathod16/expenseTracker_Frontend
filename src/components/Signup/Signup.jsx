import axios from 'axios';
import React, { useState } from 'react'
import img from './img.svg';
import { NavLink, useHistory } from 'react-router-dom'
import "./signup.css"
const Signup = () => {

    const [getData, setgetData] = useState({});
    const history = useHistory();
    const handelInp = (e) => {
        const { name, value } = e.target;
        setgetData((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const postData = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("https://expensetrackerback.onrender.com/signup", getData);

            if (result) {

                window.alert("Account Created 😄")
                history.push("/login");
            }


        } catch (error) {
            console.log(error.response.data);
            window.alert(error.response.data);
        }
    }

    return (
        <>
            <div className="container m-auto mt-5 dcenter">
                <div className="shadow-lg p-3 mb-2 bg-body rounded row">
                    <div className="col-md-6 mt-4">
                        <h2>Registration Form</h2>
                        <form method='POST'>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" name="username" value={getData.username} onChange={handelInp} id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={getData.password} onChange={handelInp} id="exampleInputPasswo" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={postData} style={{ background: "indigo" }}>Signup</button>

                        </form>
                        <div style={{ marginTop: "13px" }}>
                            Already have Account ? <NavLink className="nav-link" to="/login" style={{ display: "inline-block", padding: 0 }}>Login</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={img} alt="logo" className='w-75 h-75' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
