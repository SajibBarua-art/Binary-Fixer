import React, { useEffect, useState } from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className="text-center mb-4">
            <h1>Our <span className="brand-color">Testimonials</span> :</h1>
            <p className="fs-5">There are many valid reasons why you should choose us to take care of your valuable device</p>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-wrap justify-content-center align-items-center scroll-items bg-gray-style">
                    {
                        testimonials.map(testimonial => <TestimonialDetails key={testimonial._id} testimonial={testimonial}></TestimonialDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;