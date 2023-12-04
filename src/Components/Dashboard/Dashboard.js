import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import BookingList from '../BookingList/BookingList';
import BookOrder from '../BookOrder/BookOrder';

const Dashboard = () => {
    const [userState] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(true);
    const email = userState.email;
    useEffect(() => {
        fetch('http://localhost:5005/admin/' + email)
        .then(res => res.json())
        .then(adminData => {
            console.log(isAdmin);
            if(adminData.length === 0) {
                setIsAdmin(false);
            }
        })
    })
    return (
        <div>
            {
                isAdmin ? <BookingList isAdmin={isAdmin}></BookingList> : <BookOrder isAdmin={isAdmin}></BookOrder>
            }
        </div>
    );
};

export default Dashboard;