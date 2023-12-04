import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import OrderDetails from '../OrderDetails/OrderDetails';

const BookingList = ({isAdmin}) => {
    const [userState] = useContext(UserContext);
    const [ordersService, setOrdersService] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(true);
    const email = userState.email;

    useEffect(() => {
        fetch('http://localhost:5005/orders/' + email)
            .then(res => res.json())
            .then(data => {
                setOrdersService(data);
                setIsDataLoading(false);
                console.log(data);
            })
    }, [email])
    return (
        <div className="text-break text-warp">
            <DashboardNavbar isAdmin={isAdmin}></DashboardNavbar>
            <h3 className='mt-4 ml-2'>All Orders: </h3>
            <div className="container">
                <div className="row bg-dark text-white p-2 pt-3 mb-3 rounded">
                    <div className="d-flex justify-content-center col-3">
                        <h5>Service Name</h5>
                    </div>
                    <div className="d-flex justify-content-center col-6">
                        <h5>Email</h5>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h5>Status</h5>
                    </div>
                </div>
            </div>
            {
                isDataLoading && <div className="d-flex justify-content-center my-3">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }
            <div className="mb-5">
                {
                    ordersService.map(service => <OrderDetails isAdmin={isAdmin} service={service} key={service._id}></OrderDetails>)
                }
            </div>
        </div>
    );
};

export default BookingList;