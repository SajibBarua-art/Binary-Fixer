import React, { useEffect, useState } from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5005/testimonials')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data);
                setLoadingSpinner(false);
                console.log(data);
            })
    }, [])
    return (
        <div className="text-center mb-4" id = "testimonials">
            <h1>Our <span className="brand-color">Testimonials</span> :</h1>
            <p className="fs-5">There are many valid reasons why you should choose us to take care of your valuable device</p>
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
                        testimonials.map(testimonial => <TestimonialDetails key={testimonial._id} testimonial={testimonial}></TestimonialDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;