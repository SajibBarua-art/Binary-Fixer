import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import ServiceInfo from './ServiceInfo/ServiceInfo';

const Manage = () => {
    const [services, setServices] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(true);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            setIsDataLoading(false);
        });
    },[])
    return (
        <div className='text-break text-wrap'>
            <DashboardNavbar isAdmin={true}></DashboardNavbar>
            <div>
                <h3 className='mt-4 ml-2'>Manage Service: </h3>
                <div className="container">
                    <div className="row bg-dark text-white p-2 pt-3 mb-3 rounded">
                        <div className="d-flex justify-content-center col-6">
                            <h4>Service Name</h4>
                        </div>
                        <div className="d-flex justify-content-center col-6">
                            <h4>Method</h4>
                        </div>
                    </div>
                </div>
                {
                    isDataLoading && <div className="d-flex justify-content-center my-3">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
                }
                <div className="mb-5">
                    {
                        services.map(service => <ServiceInfo service={service} key={service._id}></ServiceInfo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Manage;