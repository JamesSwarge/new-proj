import React from 'react'
import './Homepage.scss';
import CustomCarousel from '../components/CustomCarousel/CustomCarousel';

function Homepage() {

    return (
        <>
            <section className="cust-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                            <CustomCarousel />
                        </div>
                        <div className="col-lg-6 order-1 align-self-center">
                            <div className="custom-carousel-img-wrap">
                                <img className="custom-carousel-img img-fluid" src="assets/images/rocket.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Homepage
