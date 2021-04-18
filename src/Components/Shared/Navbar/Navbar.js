import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const brandStyle = {
        color: 'rgb(5, 182, 182)',
        fontWeight: 900,
        fontSize: '30px',
        textDecoration: 'none',

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between align-items-start">
                <div>
                    <Link style={brandStyle} to='/home'>Binary Fixer</Link>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-style">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Us</a>
                            </li>
                            <li className="nav-item">
                                <Link to='login' className='btn btn-secondary'>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;