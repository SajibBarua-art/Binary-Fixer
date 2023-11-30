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

        fetch('https://binary-fixer-server.vercel.app/addTestimonial', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(testimonialData)
        })
            .then(res => {
                if (res) {
                    alert('Your submitted testimonial is accepted successfully.')
                }
            })
    };

    return (
        <div>
            <DashboardNavbar isAdmin={false}></DashboardNavbar>
            <h1 className='my-3 ml-2 component-color'>Add a Review:</h1>
            <div className='form-card'>
                <h2 className='text-center brand-color mb-4'>Give all Review information below</h2>
                <form className='d-flex justify-content-center flex-wrap form-style' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input className='m-2' type="text" defaultValue="Your Full Name" {...register("client", { required: true })} />
                        {errors.client && <p className="text-danger">Your Name is Required!</p>}
                    </div>
                    <br />
                    <div>
                        <input className='m-2' type="text" defaultValue="Service Name" {...register("name", { required: true })} />
                        {errors.name && <p className="text-danger">Service name is Required!</p>}
                    </div>
                    <br />
                    <div className="mt-2 mx-4">
                        <h4>Rating: <input style={{ width: '60px' }} type="number" defaultValue="Rating" {...register("rating", { min: 0, max: 5 })} /></h4>
                        {errors.rating && <p className="text-danger">Rating must be in range of 0 to 5!</p>}
                        
                    </div>
                    <br />
                    <input className='m-2' type="text" defaultValue="Description" {...register("description")} />
                    <input style={{ height: '50px' }} className='btn btn-success m-3' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddTestimonial;