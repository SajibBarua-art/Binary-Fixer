import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const Signout = ({ history }) => {
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

  return (
    <>
      <nav>
        <p>Are you sure you want to Log out?</p>
        <div>
          <button className='button-form' onClick={handleLogout}>Log Out</button>
        </div>
      </nav>
    </>
  );
};

export default Signout;
