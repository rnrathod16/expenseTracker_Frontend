import React, { useContext, useState } from 'react'
import logo from './log.svg';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import { newContext } from '../../App';
import "./login.css"
const Login = () => {

    const { setCount } = useContext(newContext);

    setCount(500)
    const history = useHistory();
    const [log, setlog] = useState({
        username: "", password: ""
    })
    const handelInp = (e) => {
        const { name, value } = e.target;

        setlog((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const postData = async (e) => {
        e.preventDefault();
        const { username, password } = log;
        try {

            const result = await axios.post("https://expensetrackerback.onrender.com/login", { username, password });

            if (result) {

                const token = result.data.token;
                const id = result.data.dat;
                const name = result.data.usename;

                // setid(id);
                setCount(1200);
                localStorage.setItem("token", token);
                localStorage.setItem("id", id);
                localStorage.setItem("username", name);


                history.push("/home");
            }

        } catch (error) {
            console.log(error.response.data.message);
            window.alert(error.response.data.message);

        }
    }

    const demoLog = async (e) => {
        e.preventDefault();
        // const { username, password } = log;

        const username = 'demoUser';
        const password = '1234';
        try {

            const result = await axios.post("https://expensetrackerback.onrender.com/login", { username, password });

            if (result) {

                const token = result.data.token;
                const id = result.data.dat;
                const name = result.data.usename;

                // setid(id);
                setCount(1200);
                localStorage.setItem("token", token);
                localStorage.setItem("id", id);
                localStorage.setItem("username", name);


                history.push("/home");
            }

        } catch (error) {
            console.log(error.response.data.message);
            window.alert(error.response.data.message);

        }
    }

    return (
        <>
            <div className="container m-auto mt-5 dcenter">
                <div className="shadow-lg p-3 mb-2 bg-body rounded row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={logo} alt="logo" className='w-75 h-75' />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h2>Login Form</h2>
                        <form>

                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" name="username" value={log.username} onChange={handelInp} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={log.password} onChange={handelInp} id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={postData} style={{ background: "indigo" }}>Login</button>
                            <button type="submit" className="btn btn-primary m-3" onClick={demoLog} style={{ background: "indigo" }}>Demo Login</button>

                        </form>
                        <div style={{ marginTop: "13px", marginBottom: "34px" }}>
                            Don't have Account ? <NavLink className="nav-link" to="/" style={{ display: "inline-block", padding: 0 }}>Signup</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
