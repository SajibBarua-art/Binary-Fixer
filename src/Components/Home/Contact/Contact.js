import React from 'react';

const Contact = () => {
    return (
        <div className="text-center m-5">
            <h1>Get <span className="brand-color">Your Computer</span> Fixed Now!</h1>
            <h3 className='text-secondary my-1'>+1-800-1234567</h3>
            <p className='fs-5'>for one of our professional computer repair techs to help you with your Desktop, Laptop, Mac or other inquiry</p>
            <button className="brand-btn me-5 mt-4">GET YOUR REPAIR</button>
            <button className="brand-btn" style={{fontWeight: '700'}}>CONTACT US</button>
        </div>
    );
};

export default Contact;