import React from 'react';

const TestimonialDetails = ({testimonial}) => {
    return (
        <div className="card card-style card-height p-4 text-start">
            <h4 className="card-title">{testimonial.serviceName}</h4>
            <p className='text-secondary'>Rating: {testimonial.rating}</p>
            <p className="my-3">{testimonial.description}</p>
            <div className="card-body">
                <h6 className='mb-3 text-end text-primary'>~ {testimonial.clientName}</h6>
            </div>
        </div>
    );
};

export default TestimonialDetails;