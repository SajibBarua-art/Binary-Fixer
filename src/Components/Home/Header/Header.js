import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* Carousel part */}
            <div className=''>
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="6000">
                            <div className="d-flex justify-content-center">
                                <div className="container row">
                                    <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                                        <div className='p-3'>
                                            <h1 className="text-wrap" style={{ fontSize: '40px' }}>We are <div style={{ fontSize: '50px' }} className='brand-color'>Satisfied</div> with our work</h1>
                                            <p className='text-wrap mt-4' style={{ fontSize: '20px', color: 'gray' }}>We can handle just about any tech question or computer repairs that comes our way</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <img className="img-fluid" src="https://image.freepik.com/free-vector/warranty-service-isometric-icons-set-electronics-household-appliances-need-diagnostics-repair-isolated_1284-32025.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="d-flex justify-content-center">
                                <div className="container row">
                                    <div className="col-md-6 col-sm-12 d-flex justify-align-center align-items-center">
                                        <div className='p-3'>
                                            <h1 className="text-wrap" style={{ fontSize: '40px' }}><div style={{ fontSize: '50px' }} className='brand-color'>PC Support</div> that's there before you need it</h1>
                                            <p className='text-wrap mt-4' style={{ fontSize: '20px', color: 'gray' }}>The best way to fix your PC problems for all cellphone brands and models</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <img className="img-fluid" src="https://image.freepik.com/free-vector/computer-service-abstract-concept-illustration_335657-3785.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center">
                                <div className="container row">
                                    <div className="col-md-6 col-sm-12 d-flex justify-align-center align-items-center">
                                        <div className='p-3'>
                                            <h1 className="text-wrap" style={{ fontSize: '40px' }}><div style={{ fontSize: '50px' }} className='brand-color'>Cell Phone Repairs</div> Fast, Adorable Prices</h1>
                                            <p className='text-wrap mt-4' style={{ fontSize: '20px', color: 'gray' }}>We are the repair specialist </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <img className="img-fluid" src="https://image.freepik.com/free-vector/product-teardown-concept-illustration_114360-1240.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;