import React from 'react';
import './Login.css';
import Navbar from '../Shared/Navbar/Navbar';
import EmailPasswordLogin from './EmailPasswordLogin';
import GoogleLogin from './GoogleLogin';
import Footer from '../Shared/Footer/Footer';

const Login = () => {
    return (
        <div>
            <Navbar />
            <EmailPasswordLogin />
            <GoogleLogin />
            <Footer></Footer>
        </div>
    );
};

export default Login;
