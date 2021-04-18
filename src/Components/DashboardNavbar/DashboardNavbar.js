import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardNavbar.css';

const DashboardNavbar = ({ isAdmin }) => {
    return (
        <div className="container text-break test-wrap">
            {
                isAdmin ?
                    <div className="row admin-navbar">
                        <div className="col-md-2 col-sm-12 d-flex justify-content-center">
                            <Link to='/home'><button className="btn btn-outline-success">Home</button></Link>
                        </div>
                        <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                            <Link to='/orderList'><button className="btn btn-outline-success">Order List</button></Link>
                        </div>
                        <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                            <Link to='/addService'><button className="btn btn-outline-success">Add Service</button></Link>
                        </div>
                        <div className="col-md-2 col-sm-12 d-flex justify-content-center">
                            <Link to='/makeAdmin'><button className="btn btn-outline-success">Make Admin</button></Link>
                        </div>
                        <div className="col-md-2 col-sm-12 d-flex justify-content-center">
                            <Link to='/manage'><button className="btn btn-outline-success">Manage</button></Link>
                        </div>
                    </div>
                    :
                    <div className="row admin-navbar">
                        <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                            <Link to='/home'><button className="btn btn-outline-success">Home</button></Link>
                        </div>
                        <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                            <Link to='/bookOrder'><button className="btn btn-outline-success">Book</button></Link>
                        </div>
                        <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                            <Link to='/bookingList'><button className="btn btn-outline-success">Booking List</button></Link>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                            <Link to='/addTestimonial'><button className="btn btn-outline-success">Testimonial</button></Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default DashboardNavbar;