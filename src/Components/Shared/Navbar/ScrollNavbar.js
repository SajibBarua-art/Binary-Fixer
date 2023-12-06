import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../Login/firebase';
import { Link as ScrollLink } from 'react-scroll';
import { UserContext } from '../../../App';

const ScrollNavbar = () => {
    const brandStyle = {
        color: 'rgb(5, 182, 182)',
        fontWeight: 900,
        fontSize: '28px',
        textDecoration: 'none',

    }
    
    const logoutStyle = {
        fontWeight: 'bold'
    }

    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            console.log('Signed out successfully');
          })
          .catch((error) => {
            console.error("Error in sign out", error);
          });
    };

    const [navClass, setNavClass] = useState('');

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setNavClass('scrolled');
        } else {
            setNavClass('');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [userVerified, setUserVerified] = useState(null);
    const [userState, setUserState] = useContext(UserContext);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user && user.emailVerified) {
                setUserVerified(user);
                setUserState(user);
            } else {
                setUserVerified(null);
                setUserState(null);
            }
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, []); // Empty dependency array to run the effect only once

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-style ${navClass}`}>
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
                                <ScrollLink
                                    className="nav-link btn"
                                    activeClass="active"
                                    to="home" // Specify the element's ID to scroll to
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust the offset based on your design
                                    duration={500}
                                    >
                                    Home
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    className="nav-link btn"
                                    activeClass="active"
                                    to="services" // Specify the element's ID to scroll to
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust the offset based on your design
                                    duration={500}
                                    >
                                    Services
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    className="nav-link btn"
                                    activeClass="active"
                                    to="contact" // Specify the element's ID to scroll to
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust the offset based on your design
                                    duration={500}
                                    >
                                    Contact
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    className="nav-link btn"
                                    activeClass="active"
                                    to="aboutus" // Specify the element's ID to scroll to
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust the offset based on your design
                                    duration={500}
                                    >
                                    About Us
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    className="nav-link btn"
                                    activeClass="active"
                                    to="testimonials" // Specify the element's ID to scroll to
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust the offset based on your design
                                    duration={500}
                                    >
                                    Testimonials
                                </ScrollLink>
                            </li>

                            {userVerified ? (
                            <li className="nav-item">
                                <button onClick={handleLogout} className="nav-link btn btn-secondary" style={logoutStyle} >
                                    Log Out
                                </button>
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

export default ScrollNavbar;