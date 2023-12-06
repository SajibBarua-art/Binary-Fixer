import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div id="footer-bottom" className="bg-dark pt-3 pb-1 text-white text-center">
            <div className='d-flex justify-content-center'>
                <Link to='/IphoneRepair' className="text-white mx-3 text-decoration-none fs-5">Iphone Repair</Link>
                <Link to='/IpadRepair' className="text-white mx-3 text-decoration-none fs-5">Ipad Repair</Link>
                <Link to='/LaptopRepair' className="text-white mx-3 text-decoration-none fs-5">Laptop Repair</Link>
                <Link to='/MacRepair' className="text-white mx-3 text-decoration-none fs-5">Mac Repair</Link>
                <Link to='/ComputerRepair' className="text-white mx-3 text-decoration-none fs-5">Computer Repair</Link>
                <Link to='/SmartphoneRepair' className="text-white mx-3 text-decoration-none fs-5">Smartphone Repair</Link>
            </div>

            <h2 className="text-center my-3">Call Us to Our Office <span className='brand-color'>+1-800-1234567</span></h2>
            <div className="d-flex justify-content-evenly my-4">
                <div className='d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faLocationArrow} className="fs-1 text-primary me-2" />
                    <p> New market, Road no - 37484, <br /> Chattogram, Bangladesh</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faClock} className="fs-1 text-primary me-2"/>
                    <p>Mon-Fri: 7:00am-7:00pm <br /> Sat-Sun: 10:00am-5:00pm</p>
                </div>
            </div>
            <p>© 2021 Computer Repair. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;