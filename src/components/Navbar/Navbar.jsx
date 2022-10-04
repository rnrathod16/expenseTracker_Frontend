import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { newContext } from '../../App';
const Navbar = () => {

    const { setCount } = useContext(newContext);
    const name = localStorage.getItem('username');
    const id = localStorage.getItem('id');

    const history = useHistory();
    const deleteToken = (e) => {
        e.preventDefault();
        // setid(null)
        localStorage.removeItem('id');
        localStorage.removeItem('username');

        setCount(400);
        history.push("/login")
    }

    const Nav = () => {
        return (id ? <><li className="nav-item">
            <NavLink to="/login" className="nav-link" onClick={deleteToken}>Logout</NavLink>
        </li></> : <><li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Signup</NavLink>
            </li></>)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "indigo" }}>
                <div className="container">
                    <span className="navbar-brand">ExpenseTracker</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <span className="nav-link" style={{ color: "white" }}> {id ? `Welcome ${name}` : ''}</span>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Signup</NavLink>
                            </li> */}
                            {/* <li className="nav-item">
                                <NavLink to="/login" className="nav-link" onClick={deleteToken}>Logout</NavLink>
                            </li> */}
                            <Nav />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar