import React from 'react';
import './Login.css';
import Navbar from '../Shared/Navbar/Navbar';
import EmailPasswordLogin from './EmailPasswordLogin';
import GoogleLogin from './GoogleLogin';

const Login = () => {
    return (
        <div>
            <Navbar />
            <EmailPasswordLogin />
            <GoogleLogin />
        </div>
    );
};

export default Login;
