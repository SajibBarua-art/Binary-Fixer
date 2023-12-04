import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5005/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoadingSpinner(false);
                console.log(data);
            })
    }, [])

    return (
        <div className='mb-4' id = "services">
            <h2 className='ms-4'>Our <span className="brand-color">Services</span>:</h2>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-wrap justify-content-evenly scroll-items bg-gray-style">
                    {
                        loadingSpinner && <div className="d-flex justify-content-center m-2">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden"></span>
                            </div>
                        </div>
                    }
                    {
                        services.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;