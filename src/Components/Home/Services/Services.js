import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-4'>
            <h2 className='ms-4'>Our <span className="brand-color">Services</span>:</h2>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-wrap justify-content-center align-items-center scroll-items bg-gray-style">
                    {
                        services.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;