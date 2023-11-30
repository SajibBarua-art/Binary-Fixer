import React, { useState } from 'react';

const ServiceInfo = ({ service }) => {
    const [isVisible, setIsVisible] = useState(true);
    const deleteProduct = (id) => {
        console.log(id);
        fetch(`https://binary-fixer-server.vercel.app/delete/service/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsVisible(false);
                }
            })
    }
    return (
        <div className="container">
            {
                isVisible && <div className="row bg-secondary text-white pt-2 rounded mb-1">
                    <div className="d-flex justify-content-center col-6">
                        <h4>{service.name}</h4>
                    </div>
                    <div className="d-flex justify-content-center col-6">
                        <button className='btn btn-danger' onClick={() => deleteProduct(service._id)} >Delete</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default ServiceInfo;