import React from 'react';
import { useForm } from "react-hook-form";
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://infinite-sands-68203.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    alert('Your given Email ID is set to admin panel.')
                }
            })
    };

    return (
        <div>
            <DashboardNavbar isAdmin={true}></DashboardNavbar>
            <form className='d-flex justify-content-center mt-5' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    {...register("email", {
                        required: "required",
                    })}
                    type="email"
                />

                <input className='brand-button' type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;