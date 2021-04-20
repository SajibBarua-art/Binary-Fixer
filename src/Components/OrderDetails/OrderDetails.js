import React, { useState } from 'react';
import ServiceState from '../ServiceState/ServiceState';

const OrderDetails = ({ service, isAdmin }) => {
    const [isVisible] = useState(true);
    const [status, setStatus] = useState(service.state);
    return (
        <div className="container">
            {
                isVisible && <div className="row bg-secondary text-white pt-2 rounded mb-1">
                    <div className="d-flex justify-content-center col-3">
                        <p>{service.order.name}</p>
                    </div>
                    <div className="d-flex justify-content-center col-6">
                        <p>{service.email}</p>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        { isAdmin ? <ServiceState id={service._id} state={status}></ServiceState> :<p>{service.state}</p> }
                    </div>
                </div>
            }
        </div>
    );
};

export default OrderDetails;