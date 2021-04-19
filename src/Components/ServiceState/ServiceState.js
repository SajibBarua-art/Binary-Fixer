import React from 'react';
import { useForm } from "react-hook-form";

const ServiceState = ({ setStatus, id }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (status) => {
        fetch(`/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(currentStatus => setStatus(currentStatus))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <select {...register("statusList")}>
                <option value="pending">Pending</option>
                <option value="going">OnGoing</option>
                <option value="done">Done</option>
            </select>

            <input type="submit" />
        </form>
    );
};

export default ServiceState;