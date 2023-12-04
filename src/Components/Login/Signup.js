import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import './Login.css';
import Navbar from '../Shared/Navbar/Navbar';
import GoogleLogin from './GoogleLogin';
import Footer from '../Shared/Footer/Footer';

const Signup = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        history.push('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <main className="login-container d-flex justify-content-center mt-5">
        <section>
          <div className="signup-form">
            <h1>Create your account</h1>
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

              <button className="button-form" type="submit" onClick={onSubmit}>
                Sign up
              </button>
            </form>

            <p className="link-text">
              Already have an account?{' '}
              <NavLink to="/login">Log in now</NavLink>
            </p>
          </div>
        </section>
      </main>

      <GoogleLogin></GoogleLogin>
      <Footer></Footer>
    </div>
  );
};

export default Signup;
