import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const BookOrder = ({isAdmin}) => {
    const [userState, setUserState] = useContext(UserContext);
    const { id } = useParams();
    const [selectedOrder, setSelectedOrder] = useState({});

    console.log(userState);

    useEffect(() => {
        fetch('http://localhost:5000/order/' + id)
            .then(res => res.json())
            .then(data => {
                setSelectedOrder(data);
            });
    }, [id])

    const handlePayment = paymentId => {
        const orderDetails = { order: selectedOrder, email: userState.email, state: "pending", paymentId, orderTime: new Date() }
        console.log(orderDetails);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
    }
    return (
        <div>
            <DashboardNavbar isAdmin={isAdmin}></DashboardNavbar>
            <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
        </div>
    );
};

export default BookOrder;