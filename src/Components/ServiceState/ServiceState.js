import React from 'react';
import { useForm } from "react-hook-form";

const ServiceState = ({ state, id }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const status = data.statusList;
        fetch(`http://localhost:5005/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if(data) {
                    alert("Status update successfully!");
                }
            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <select defaultValue={state} {...register("statusList")}>
                <option value="Pending">Pending</option>
                <option value="OnGoing">OnGoing</option>
                <option value="Done">Done</option>
            </select>

            <input type="submit" />
        </form>
    );
};

export default ServiceState;