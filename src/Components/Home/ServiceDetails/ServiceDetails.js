import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
        <div className="card card-style card-height text-center">
            <img src={service.img} className="card-img-top img-fluid" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <h6 className='text-secondary mb-3'>Price: {service.price}$</h6>
                <Link to='/' className='brand-btn'>WANT IT</Link>
            </div>
        </div>
    );
};

export default ServiceDetails;