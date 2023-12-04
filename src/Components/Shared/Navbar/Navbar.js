import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../Login/firebase';
import { UserContext } from '../../../App';

const Navbar = () => {
    const brandStyle = {
        color: 'rgb(5, 182, 182)',
        fontWeight: 900,
        fontSize: '30px',
        textDecoration: 'none',

    }

    const history = useHistory();
    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            history.push('/');
            console.log('Signed out successfully');
          })
          .catch((error) => {
            console.error("Error in sign out", error);
          });
    };


    const [user, setUser] = useState(null);
    const [userState, setUserState] = useContext(UserContext);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setUserState(user);
            console.log(userState);
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, []); // Empty dependency array to run the effect only once

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-style bg-dark">
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
                                <Link className="nav-link" to="/services"> Services </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"> Contact </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus"> About Us </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services"> Testimonials </Link>
                            </li>

                            {user ? (
                            <li className="nav-item">
                                <Link onClick={handleLogout} to="/" className="nav-link btn btn-secondary">
                                    Log Out
                                </Link>
                            </li>
                            ) : (
                            <>
                                <li className="nav-item">
                                <Link to="/login" className="nav-link btn btn-secondary">
                                    Log In
                                </Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/signup" className="nav-link btn btn-secondary">
                                    Sign Up
                                </Link>
                                </li>
                            </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;