import React, { useState, useContext, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { UserContext } from '../../App';

const EmailPasswordLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIssue, setPasswordIssue] = useState('');
  const [emailIssue, setEmailIssue] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');
  
  const [userState, setUserState] = useContext(UserContext);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && !user.emailVerified) {
        // Display verification message
        setVerificationMessage(
          'Verification email sent! Please check your email to verify your account first.'
        );
      }
    });

    return () => unsubscribe();
  }, []);

  const onLogin = async(e) => {
    e.preventDefault();
    setEmailIssue('');
    setPasswordIssue('');

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user && user.emailVerified) {
          setUserState(user);
          console.log(userState);
          history.replace(from);
        } else {
          setPasswordIssue('Your email is not verified!');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        
        if(errorCode === 'auth/user-not-found') {
          setEmailIssue('Your given email address is not registered yet. Please Sign up first or try another email address.')
        } else if(errorCode === 'auth/invalid-email') {
          setEmailIssue('Your email address format is not correct!');
        } else if(errorCode === 'auth/wrong-password') {
          setPasswordIssue('Wrong Password! Try again.');
        } else {
          setPasswordIssue(errorMessage);
        }
      });
  };

  return (
    <main className="container d-flex justify-content-center mt-5">
      <section>
        <div className="signup-form">
          <h3 className='text-center mb-3'>Log in to your account</h3>
          {verificationMessage && 
            <div className="alert alert-success text-center">
              {verificationMessage}
            </div>
          }
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
              <div className='alert alert-danger text-center'>
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

            {passwordIssue &&
              <div className='alert alert-danger text-center'>
                {passwordIssue}
              </div>
            }

            <div className="form-group btn-right">
              <button className="button-form " onClick={onLogin}>Login</button>
            </div>
          </form>

          <p className="text-sm text-center mt-3">
            Forgot your password? {' '}
            <NavLink to="/forgotpassword">Reset</NavLink>
          </p>

          <p className="text-sm text-center mt-3">
            No account yet? {' '}
            <NavLink to="/signup">Sign up</NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default EmailPasswordLogin;
