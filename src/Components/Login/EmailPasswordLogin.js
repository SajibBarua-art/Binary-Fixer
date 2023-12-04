import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { UserContext } from '../../App';

const EmailPasswordLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userState, setUserState] = useContext(UserContext);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } }

  const onLogin = async(e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserState(user);
        console.log(userState);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main className="container d-flex justify-content-center mt-5">
      <section>
        <div className="signup-form">
          <h3>Log in to your account</h3>
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

            <div className="form-group">
              <button className="button-form" onClick={onLogin}>Login</button>
            </div>
          </form>

          <p className="text-sm text-center">
            No account yet? {' '}
            <NavLink to="/signup">Sign up</NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default EmailPasswordLogin;
