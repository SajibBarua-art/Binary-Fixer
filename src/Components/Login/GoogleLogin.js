import React, { useContext } from 'react';
import {  signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { UserContext } from '../../App';
import googleIcon from '../../images/googleIcon.png';

const GoogleLogin = () => {
  const history = useHistory();
  const [userState, setUserState] = useContext(UserContext);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } }

  const onGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      setUserState(user);
      console.log(userState);
      history.replace(from);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <div className='d-flex justify-content-center my-5'>
            <div>
                <button className='login-btn' onClick={onGoogleSignIn}>
                    <img className='google-icon' src={googleIcon} alt="" /> Sign in with Google
                </button>
            </div>
    </div>
  );
};

export default GoogleLogin;