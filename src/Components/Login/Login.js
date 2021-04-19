import React, { useContext } from 'react';
import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import googleIcon from '../../images/googleIcon.png';
import Navbar from '../Shared/Navbar/Navbar';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [setUserState] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                setUserState(user);
                history.replace(from);
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='d-flex justify-content-center my-5'>
                <div>
                    <h4 className="mb-4 rounded">You have to login first</h4>
                    <button className='login-btn' onClick={handleGoogleSignIn}>
                        <img className='google-icon' src={googleIcon} alt="" /> Login with Google
                </button>
                </div>
            </div>
        </div>
    );
};

export default Login;