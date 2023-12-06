import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from './firebase';
import './Login.css';
import Navbar from '../Shared/Navbar/Navbar';
import GoogleLogin from './GoogleLogin';

const Signup = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordIssue, setPasswordIssue] = useState('');
  const [emailIssue, setEmailIssue] = useState('');

  useEffect(() => {
    // password issue handling
    if(password !== confirmPassword) {
      setPasswordIssue('Your password is not matched!');
    } else if(password !== '' && password.length < 8) {
        setPasswordIssue('Try at least 8 characters in your password');
    } else {
      setPasswordIssue('');
    }
  }, [confirmPassword]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Send email verification
      await sendEmailVerification(user);
      
      history.replace('/login');
    } catch (error) {
      const errorCode = error.code;
      console.log(errorCode);

      if(errorCode === 'auth/invalid-email') {
        setEmailIssue('Your email address format is not correct!');
      } else {
        setEmailIssue('');
      }
    }
  };


  return (
    <div>
      <Navbar></Navbar>
      <main className="login-container d-flex justify-content-center mt-5">
        <section>
          <div className="signup-form">
            <h3 className='text-center mb-3'>Create your account</h3>
            <form>
              <div className="form-group">
                <label className="label-form" htmlFor="email-address">Email address</label>
                <input className="input-form"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              {emailIssue &&
                <div className='alert alert-danger'>
                  { emailIssue }
                </div>
              }

              <div className="form-group">
                <label className="label-form" htmlFor="password">Password</label>
                <input className="input-form"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <label className="label-form" htmlFor="password">Confirm Password</label>
                <input className="input-form"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Confirm Password"
                />
              </div>

              {passwordIssue &&
                <div className='alert alert-danger text-center'>
                  {passwordIssue}
                </div>
              }
              
              <div className="form-group btn-right">
                <button className="button-form" type="submit" onClick={onSubmit}>
                  Sign up
                </button>
              </div>
            </form>

            <p className="link-text mt-3">
              Already have an account?{' '}
              <NavLink to="/login">Log in now</NavLink>
            </p>
          </div>
        </section>
      </main>

      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Signup;
