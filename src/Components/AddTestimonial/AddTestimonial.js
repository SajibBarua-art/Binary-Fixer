import React from 'react';
import { useForm } from "react-hook-form";
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';

const AddTestimonial = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const testimonialData = {
            serviceName: data.name,
            clientName: data.client,
            description: data.description,
            rating: data.rating
        };

        fetch('http://localhost:5005/addTestimonial', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(testimonialData)
        })
        .then(res => {
            if (res) {
                alert('Your submitted review is accepted successfully.')
            }
        })
    };

    return (
        <div className='mb-5'>
            <DashboardNavbar isAdmin={false}></DashboardNavbar>
            <h1 className='my-3 ml-2 component-color'>Add a Review:</h1>

            <main className="container d-flex justify-content-center mt-5">
                <div className='signup-form'>
                    <h2 className='text-center brand-color mb-4'>Your Review information</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group my-3'>
                            <label className='label-form' htmlFor="fullName"> Your Full Name </label>
                            <input 
                                className='m-2 input-form' 
                                type="text" 
                                id="fullName"
                                placeholder="Your full name"
                                required
                                {...register("client", { required: true })} 
                            />
                            {errors.client && <p className="text-danger">Your Name is Required!</p>}
                        </div>
                        <div className='form-group my-3'>
                            <label className='label-form' htmlFor="serviceName"> Service Name </label>
                            <input 
                                className='m-2 input-form' 
                                type="text"
                                id="serviceName" 
                                placeholder="Service name"
                                required
                                {...register("name", { required: true })} 
                            />
                            {errors.name && <p className="text-danger">Service name is Required!</p>}
                        </div>
                        <div className='form-group my-3'>
                            <label className='label-form' htmlFor="rating"> Rating </label>
                            <input 
                                className='m-2 input-form'
                                type="number" 
                                id="rating"
                                required
                                placeholder="Enter rating from (1-5)"
                                {...register("rating", { min: 0, max: 5 })}
                                min="1" // Set the minimum value for the rating
                                max="5" // Set the maximum value for the rating
                            />
                            {errors.rating && <p className="text-danger">Rating must be in the range of 0 to 5!</p>}
                            
                        </div>
                        <div className='form-group my-3'>
                            <label className='label-form' htmlFor="description"> Description </label>
                            <textarea 
                                className='m-2 input-form'
                                placeholder="Description" 
                                {...register("description")}
                                rows="5"
                            />
                        </div>
                        <div className='btn-right'>
                            <input style={{ height: '40px' }} className='btn btn-success m-3' type="submit" />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AddTestimonial;