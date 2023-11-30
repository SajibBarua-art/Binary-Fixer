import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import BookingList from '../BookingList/BookingList';
import BookOrder from '../BookOrder/BookOrder';

const Dashboard = () => {
    const [userState] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(true);
    const email = userState.email;
    useEffect(() => {
        fetch('https://binary-fixer-server.vercel.app/admin/' + email)
        .then(res => res.json())
        .then(adminData => {
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